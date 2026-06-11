import {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  FaCrown,
  FaDoorOpen,
} from 'react-icons/fa'

import {
  useNavigate,
  useParams,
} from 'react-router-dom'

import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout'

import { supabase } from '../../services/supabase'

import './Room.css'

interface Player {
  id: string

  user_id: string

  is_host: boolean

  is_ready: boolean

  profiles: {
    nickname: string

    avatar: string
  }
}

interface Message {
  id: string

  message: string

  created_at: string

  profiles: {
    nickname: string

    avatar: string
  }
}

interface RoomData {
  id: string

  max_players: number

  match_duration: number

  status?: string
}
export function Room() {
  const navigate =
    useNavigate()

  const { code } =
    useParams()

  const messagesEndRef =
    useRef<HTMLDivElement>(null)

  const [loading, setLoading] =
    useState(true)

  const [roomId, setRoomId] =
    useState('')

  const [room, setRoom] =
    useState<RoomData | null>(
      null,
    )

  const [players, setPlayers] =
    useState<Player[]>([])

  const [messages, setMessages] =
    useState<Message[]>([])

  const [message, setMessage] =
    useState('')

  const [currentUserId, setCurrentUserId] =
    useState('')

  const [
    showLeaveModal,
    setShowLeaveModal,
  ] = useState(false)

  async function loadPlayers(
    currentRoomId: string,
  ) {
    const {
      data: roomPlayers,
    } = await supabase
      .from('room_players')
      .select(`
        id,
        user_id,
        is_host,
        is_ready,
        profiles:profiles!room_players_user_id_fkey (
          nickname,
          avatar
        )
      `)
      .eq(
        'room_id',
        currentRoomId,
      )
      
      .order(
        'created_at',
        {
          ascending: true,
        },
      )
console.log(
  'LOAD PLAYERS',
  currentRoomId,
)
    if (roomPlayers) {
      setPlayers(
        roomPlayers as unknown as Player[],
      )
    }
  }

  async function loadMessages(
    currentRoomId: string,
  ) {
    const {
      data: roomMessages,
    } = await supabase
      .from('room_messages')
      .select(`
        id,
        message,
        created_at,
        profiles:profiles!room_messages_user_id_fkey (
          nickname,
          avatar
        )
      `)
      .eq(
        'room_id',
        currentRoomId,
      )
      .order(
        'created_at',
        {
          ascending: true,
        },
      )

    if (roomMessages) {
      setMessages(
        roomMessages as unknown as Message[],
      )
    }
  }

  async function loadRoom() {
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      navigate('/conectar')

      return
    }

    setCurrentUserId(user.id)

    const { data: roomData } =
      await supabase
        .from('rooms')
        .select('*')
        .eq(
          'code',
          code,
        )
        .single()

    if (!roomData) {
      navigate(
        '/entrar-sala',
      )

      return
    }

    setRoom(roomData)

    setRoomId(roomData.id)

    const {
      data: playerExists,
    } = await supabase
      .from('room_players')
      .select('id')
      .eq(
        'room_id',
        roomData.id,
      )
      .eq(
        'user_id',
        user.id,
      )
      .single()

    if (!playerExists) {
      navigate(
        '/entrar-sala',
      )

      return
    }

    await loadPlayers(
      roomData.id,
    )

    await loadMessages(
      roomData.id,
    )

    setLoading(false)
  }

  async function handleToggleReady() {
    const currentPlayer =
      players.find(
        (player) =>
          player.user_id ===
          currentUserId,
      )

    if (!currentPlayer)
      return

    await supabase
      .from('room_players')
      .update({
        is_ready:
          !currentPlayer.is_ready,
      })
      .eq(
        'id',
        currentPlayer.id,
      )
  }

  async function handleSendMessage() {
    if (!message.trim())
      return

    if (
      message.length > 100
    )
      return

    await supabase
      .from('room_messages')
      .insert({
        room_id: roomId,

        user_id:
          currentUserId,

        message:
          message.trim(),
      })

    setMessage('')
  }

  async function handleLeaveRoom() {
    const currentPlayer =
      players.find(
        (player) =>
          player.user_id ===
          currentUserId,
      )

    if (!currentPlayer)
      return

    const isHost =
      currentPlayer.is_host

    await supabase
      .from('room_players')
      .delete()
      .eq(
        'user_id',
        currentUserId,
      )
      .eq(
        'room_id',
        roomId,
      )

    await supabase
      .from('profiles')
      .update({
        current_room_id:
          null,
      })
      .eq(
        'id',
        currentUserId,
      )

    const {
      data: remainingPlayers,
    } = await supabase
      .from('room_players')
      .select(`
        id,
        user_id,
        profiles:profiles!room_players_user_id_fkey (
          nickname
        )
      `)
      .eq(
        'room_id',
        roomId,
      )
      .order(
        'created_at',
        {
          ascending: true,
        },
      )

    if (
      !remainingPlayers ||
      remainingPlayers.length ===
        0
    ) {
      await supabase
        .from('room_messages')
        .delete()
        .eq(
          'room_id',
          roomId,
        )

      await supabase
        .from('rooms')
        .delete()
        .eq('id', roomId)

      navigate('/inicio')

      return
    }

    if (isHost) {
      const newHost =
        remainingPlayers[0] as any

      await supabase
        .from('room_players')
        .update({
          is_host: true,
        })
        .eq(
          'id',
          newHost.id,
        )

      await supabase
        .from('room_messages')
        .insert({
          room_id: roomId,

          user_id:
            newHost.user_id,

          message: `O novo líder é ${newHost.profiles.nickname}`,
        })
    }

    navigate('/inicio')
  }

  async function handleChangeMaxPlayers(
    value: number,
  ) {
    if (!isHost) return

    await supabase
      .from('rooms')
      .update({
        max_players: value,
      })
      .eq('id', roomId)

    setRoom((prev) =>
      prev
        ? {
            ...prev,
            max_players:
              value,
          }
        : null,
    )
  }

  async function handleChangeMatchDuration(
    value: number,
  ) {
    if (!isHost) return

    await supabase
      .from('rooms')
      .update({
        match_duration:
          value,
      })
      .eq('id', roomId)

    setRoom((prev) =>
      prev
        ? {
            ...prev,
            match_duration:
              value,
          }
        : null,
    )
  }

async function handleStartGame() {
  if (!isHost)
    return

  if (players.length < 3) {
    alert(
      'A sala precisa ter pelo menos 3 jogadores.',
    )

    return
  }

  const allReady =
    players.every(
      (player) =>
        player.is_ready,
    )

  if (!allReady) {
    alert(
      'Todos os jogadores precisam estar prontos.',
    )

    return
  }

  try {
    const terrains = [
      'fire',
      'water',
      'earth',
      'air',
      'light',
      'darkness',
      'heroes',
    ]

    const randomTerrain =
      terrains[
        Math.floor(
          Math.random() *
            terrains.length,
        )
      ]

    await supabase
      .from('rooms')
      .update({
        status: 'playing',

        started_at:
          new Date().toISOString(),

        timer_started_at:
          new Date().toISOString(),
      })
      .eq('id', roomId)

    await supabase
      .from('game_state')
      .insert({
        room_id: roomId,

        current_player_turn:
          players[0].user_id,

        current_terrain:
          randomTerrain,

        turn_number: 1,

        phase:
          'race_selection',
      })

    const gamePlayers =
      players.map(
        (
          player,
          index,
        ) => ({
          room_id: roomId,

          user_id:
            player.user_id,

          nickname:
            player.profiles
              .nickname,

          avatar:
            player.profiles
              .avatar,

          position:
            index + 1,

          level: 1,

          power: 0,

          race:
            'SEM RAÇA',

          class:
            'SEM CLASSE',

          hand_cards: [],

          equipped_items:
            {},

          accessories: [],

          curses: [],

          status:
            'normal',

          is_dead: false,
        }),
      )

    await supabase
      .from('game_players')
      .insert(gamePlayers)

    await supabase
      .from('game_logs')
      .insert({
        room_id: roomId,

        message:
          'A partida começou.',

        type:
          'system',

        color:
          'gold',
      })
  } catch (error) {
    console.error(error)

    alert(
      'Erro ao iniciar partida.',
    )
  }
}

  useEffect(() => {
    loadRoom()
  }, [])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView(
      {
        behavior: 'smooth',
      },
    )
  }, [messages])

  useEffect(() => {
    if (!roomId) return
console.log(
  'ROOM ID',
  roomId,
)
    const playersChannel =
      supabase.channel(
        `players-${roomId}`,
      )

    playersChannel.on(
      'postgres_changes',
      {
        event: '*',

        schema: 'public',

        table:
          'room_players',
      },
      async () => {
        await loadPlayers(
          roomId,
        )
      },
    )

    playersChannel.subscribe()

    const roomChannel =
  supabase.channel(
    `room-${roomId}`,
  )

roomChannel.on(
  'postgres_changes',
  {
    event: 'UPDATE',

    schema: 'public',

    table: 'rooms',

    filter: `id=eq.${roomId}`,
  },
  (payload) => {
    const updatedRoom =
      payload.new as any

    if (
      updatedRoom.status ===
      'playing'
    ) {
      navigate(
        `/game/${roomId}`,
      )
    }
  },
)

roomChannel.subscribe()

    const messagesChannel =
      supabase.channel(
        `messages-${roomId}`,
      )

    messagesChannel.on(
      'postgres_changes',
      {
        event: '*',

        schema: 'public',

        table:
          'room_messages',
      },
      async () => {
        await loadMessages(
          roomId,
        )
      },
    )

    messagesChannel.subscribe()

    return () => {
      supabase.removeChannel(
        playersChannel,
      )

    supabase.removeChannel(
  roomChannel,
      )

      supabase.removeChannel(
        messagesChannel,
      )
    }
  }, [roomId])

  useEffect(() => {
    const handleBeforeUnload =
      (
        event: BeforeUnloadEvent,
      ) => {
        event.preventDefault()

        event.returnValue =
          ''
      }

    window.addEventListener(
      'beforeunload',
      handleBeforeUnload,
    )

    return () => {
      window.removeEventListener(
        'beforeunload',
        handleBeforeUnload,
      )
    }
  }, [])

  const currentPlayer =
    players.find(
      (player) =>
        player.user_id ===
        currentUserId,
    )

  const isHost =
    currentPlayer?.is_host

  if (loading) {
    return (
      <DashboardLayout title="SALA">
        <div className="room-loading">
          Carregando sala...
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout title="SALA"hideSidebar>
      <div className="room-container">
        <div className="room-left">
          <div className="room-players">
            {players.map(
              (player) => (
                <div
                  key={
                    player.id
                  }
                  className={`room-player ${
                    player.is_ready
                      ? 'ready'
                      : 'not-ready'
                  }`}
                >
                  <img
                    src={
                      player
                        .profiles
                        ?.avatar
                    }
                    alt=""
                  />

                  <span>
                    {
                      player
                        .profiles
                        ?.nickname
                    }
                  </span>

                  {player.is_host && (
                    <FaCrown className="room-crown" />
                  )}
                </div>
              ),
            )}
          </div>

          <button
            className="room-ready-button"
            onClick={
              handleToggleReady
            }
          >
            ESTOU PRONTO
          </button>

          <button
            className="room-exit-button"
            onClick={() =>
              setShowLeaveModal(
                true,
              )
            }
          >
            SAIR DA SALA
          </button>
        </div>

        <div className="room-center">
          <div className="room-chat">
            <div className="room-messages">
              {messages.map(
                (msg) => (
                  <div
                    key={msg.id}
                    className="room-message"
                  >
                    <img
                      src={
                        msg
                          .profiles
                          ?.avatar
                      }
                      alt=""
                    />

                    <div>
                      <strong>
                        {
                          msg
                            .profiles
                            ?.nickname
                        }
                      </strong>

                      <p>
                        {
                          msg.message
                        }
                      </p>
                    </div>
                  </div>
                ),
              )}

              <div
                ref={
                  messagesEndRef
                }
              />
            </div>

            <div className="room-chat-input-area">
              <input
                type="text"
                maxLength={100}
                placeholder="Digite uma mensagem..."
                value={message}
                onChange={(
                  event,
                ) =>
                  setMessage(
                    event.target
                      .value,
                  )
                }
                onKeyDown={(
                  event,
                ) => {
                  if (
                    event.key ===
                    'Enter'
                  ) {
                    handleSendMessage()
                  }
                }}
              />

              <button
                onClick={
                  handleSendMessage
                }
              >
                ENVIAR
              </button>
            </div>
          </div>
        </div>

        <div className="room-right">
          <div className="room-settings">
            <h3>
              QUANTIDADE
              <br />
              DE JOGADORES
            </h3>

            <select
              disabled={!isHost}
              value={
                room?.max_players
              }
              onChange={(
                event,
              ) =>
                handleChangeMaxPlayers(
                  Number(
                    event
                      .target
                      .value,
                  ),
                )
              }
            >
              <option value={3}>
                3
              </option>

              <option value={4}>
                4
              </option>

              <option value={5}>
                5
              </option>

              <option value={6}>
                6
              </option>

              <option value={7}>
                7
              </option>

              <option value={8}>
                8
              </option>
            </select>
          </div>

          <div className="room-settings">
            <h3>
              TEMPO
              <br />
              DA PARTIDA
            </h3>

            <select
              disabled={!isHost}
              value={
                room?.match_duration
              }
              onChange={(
                event,
              ) =>
                handleChangeMatchDuration(
                  Number(
                    event
                      .target
                      .value,
                  ),
                )
              }
            >
              <option value={0}>
                Infinito
              </option>

              <option value={60}>
                1 Hora
              </option>

              <option value={120}>
                2 Horas
              </option>

              <option value={180}>
                3 Horas
              </option>

              <option value={240}>
                4 Horas
              </option>

              <option value={300}>
                5 Horas
              </option>

              <option value={360}>
                6 Horas
              </option>
            </select>
          </div>

          <button
  className="room-start-button"
  disabled={!isHost}
  onClick={
    handleStartGame
  }
>
  INICIAR PARTIDA
</button>
        </div>
      </div>

      {showLeaveModal && (
        <div className="logout-modal-overlay">
          <div className="logout-modal">
            <FaDoorOpen className="logout-icon" />

            <h3>
              Deseja sair da sala?
            </h3>

            <p>
              Você será removido da
              partida.
            </p>

            <div className="logout-actions">
              <button
                className="confirm"
                onClick={
                  handleLeaveRoom
                }
              >
                Sim
              </button>

              <button
                className="cancel"
                onClick={() =>
                  setShowLeaveModal(
                    false,
                  )
                }
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}