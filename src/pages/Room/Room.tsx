import {
  useCallback,
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

  last_seen: string

  profiles: {
    nickname: string

    avatar: string
  }
}

interface RemainingPlayer {
  id: string

  user_id: string

  profiles: {
    nickname: string
  }[]
}

interface Message {
  id: string

  message: string

  created_at: string

  is_system: boolean

  profiles: {
    nickname: string

    avatar: string
  }
}

interface RoomData {
  id: string

  max_players: number

  match_duration: number

  in_game?: boolean
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

  const [startingGame, setStartingGame] =
    useState(false)

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

  const loadPlayers =
    useCallback(
      async (
        currentRoomId: string,
      ) => {
        const {
          data: roomPlayers,
        } = await supabase
          .from(
            'room_players',
          )
          .select(`
            id,
            user_id,
            is_host,
            is_ready,
            last_seen,
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

        if (roomPlayers) {
          setPlayers(
            roomPlayers as unknown as Player[],
          )
        }
      },
      [],
    )

  const loadMessages =
    useCallback(
      async (
        currentRoomId: string,
      ) => {
        const {
          data: roomMessages,
        } = await supabase
          .from(
            'room_messages',
          )
          .select(`
            id,
            message,
            created_at,
            is_system,
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
      },
      [],
    )

  const loadRoom =
    useCallback(async () => {
      const {
        data: { user },
      } =
        await supabase.auth.getUser()

      if (!user) {
        navigate(
          '/conectar',
        )

        return
      }

      setCurrentUserId(
        user.id,
      )

      const {
        data: roomData,
      } = await supabase
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

      setRoom({
        id: roomData.id,

        max_players:
          roomData.max_players,

        match_duration:
          roomData.match_duration,

        in_game:
          roomData.in_game,
      })

      setRoomId(roomData.id)

      await supabase
  .from('profiles')
  .update({
    current_room_id:
      roomData.id,
  })
  .eq(
    'id',
    user.id,
  )

      await loadPlayers(
        roomData.id,
      )

      await loadMessages(
        roomData.id,
      )

      setLoading(false)
    }, [
      code,
      navigate,
      loadPlayers,
      loadMessages,
    ])

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

const {
  data: profile,
} = await supabase
  .from('profiles')
  .select('nickname')
  .eq(
    'id',
    currentUserId,
  )
  .single()

await supabase
  .from('room_messages')
  .insert({
    room_id: roomId,

    user_id:
      currentUserId,

    is_system: true,

    message: `${
      profile?.nickname
        ?? 'Jogador'
    } saiu da sala.`,
  })

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
    .from(
      'room_messages',
    )
    .delete()
    .eq(
      'room_id',
      roomId,
    )

  await supabase
    .from('profiles')
    .update({
      current_room_id: null,
    })
    .eq(
      'current_room_id',
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
    remainingPlayers[0] as unknown as RemainingPlayer

  await supabase
    .from('room_players')
    .update({
      is_host: true,
    })
    .eq(
      'id',
      newHost.id,
    )

  const {
    data: hostProfile,
  } = await supabase
    .from('profiles')
    .select('nickname')
    .eq(
      'id',
      newHost.user_id,
    )
    .single()

  await supabase
    .from(
      'room_messages',
    )
    .insert({
      room_id: roomId,

      user_id:
        newHost.user_id,

        is_system: true,

      message: `O novo líder é ${
        hostProfile?.nickname
          ?? 'Desconhecido'
      }`,
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
  }

  async function handleStartGame() {
    if (!isHost)
      return

    if (
      players.length < 3
    ) {
      alert(
        'A sala precisa ter no mínimo 3 jogadores.',
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

    setStartingGame(true)

    await supabase
      .from('rooms')
      .update({
        in_game: true,
      })
      .eq('id', roomId)
  }

  useEffect(() => {
    if (!code) return

    const initialize =
      async () => {
        await Promise.resolve()

        await loadRoom()
      }

    void initialize()
  }, [code, loadRoom])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView(
      {
        behavior: 'smooth',
      },
    )
  }, [messages])

  useEffect(() => {
    if (!roomId) return

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

    const roomChannel =
      supabase.channel(
        `room-data-${roomId}`,
      )

    roomChannel.on(
      'postgres_changes',
      {
        event: '*',

        schema: 'public',

        table: 'rooms',
      },
      async () => {
        const {
          data: updatedRoom,
        } = await supabase
          .from('rooms')
          .select('*')
          .eq('id', roomId)
          .single()

        if (updatedRoom) {
          setRoom({
            id: updatedRoom.id,

            max_players:
              updatedRoom.max_players,

            match_duration:
              updatedRoom.match_duration,

            in_game:
              updatedRoom.in_game,
          })

          if (
            updatedRoom.in_game
          ) {
            navigate(
              `/partida/${code}`,
            )
          }
        }
      },
    )

    roomChannel.subscribe()

    return () => {
      supabase.removeChannel(
        playersChannel,
      )

      supabase.removeChannel(
        messagesChannel,
      )

      supabase.removeChannel(
        roomChannel,
      )
    }
  }, [
    roomId,
    code,
    navigate,
    loadPlayers,
    loadMessages,
  ])

useEffect(() => {
  if (
    !roomId ||
    !currentUserId
  )
    return

  console.log(
    'Heartbeat iniciado',
  )

  const interval =
    setInterval(
      async () => {
        console.log(
          'Heartbeat enviado',
        )

        const {
          error,
        } = await supabase
          .from(
            'room_players',
          )
          .update({
            last_seen:
              new Date().toISOString(),
          })
          .eq(
            'room_id',
            roomId,
          )
          .eq(
            'user_id',
            currentUserId,
          )

        if (error) {
          console.error(
            'Erro heartbeat:',
            error,
          )
        }
      },
      4000,
    )

  return () => {
    clearInterval(
      interval,
    )
  }
}, [
  roomId,
  currentUserId,
])

useEffect(() => {

  const currentPlayer =
    players.find(
      (player) =>
        player.user_id ===
        currentUserId,
    )

  if (
    !currentPlayer?.is_host
  )
    return

  if (!roomId)
    return

  const cleanupInterval =
    setInterval(
      async () => {
        const timeout =
          new Date(
            Date.now() -
              30000,
          ).toISOString()

        console.log(
          'Timeout:',
          timeout,
        )

        const {
          data:
            disconnectedPlayers,
        } = await supabase
          .from(
            'room_players',
          )
          .select('*')
          .eq(
            'room_id',
            roomId,
          )
          .lt(
            'last_seen',
            timeout,
          )

        console.log(
          'Offline encontrados:',
          disconnectedPlayers,
        )

        if (
          disconnectedPlayers &&
          disconnectedPlayers.length >
            0
        ) {
          console.log(
            'Desconectados:',
            disconnectedPlayers,
          )

          for (const player of disconnectedPlayers) {
            await supabase
              .from(
                'profiles',
              )
              .update({
                current_room_id:
                  null,
              })
              .eq(
                'id',
                player.user_id,
              )

            await supabase
              .from(
                'room_players',
              )
              .delete()
              .eq(
                'id',
                player.id,
              )
          }

          const {
            data:
              remainingPlayers,
          } = await supabase
            .from(
              'room_players',
            )
            .select('*')
            .eq(
              'room_id',
              roomId,
            )

          if (
            !remainingPlayers ||
            remainingPlayers.length ===
              0
          ) {
            await supabase
              .from(
                'room_messages',
              )
              .delete()
              .eq(
                'room_id',
                roomId,
              )

            await supabase
              .from(
                'profiles',
              )
              .update({
                current_room_id:
                  null,
              })
              .eq(
                'current_room_id',
                roomId,
              )

            await supabase
              .from('rooms')
              .delete()
              .eq(
                'id',
                roomId,
              )

            console.log(
              'Sala deletada:',
              roomId,
            )

            return
          }

          else {
            const hostStillExists =
              remainingPlayers.some(
                (
                  player,
                ) =>
                  player.is_host,
              )

            if (
              !hostStillExists
            ) {
              const newHost =
                remainingPlayers[0]

              await supabase
                .from(
                  'room_players',
                )
                .update({
                  is_host: true,
                })
                .eq(
                  'id',
                  newHost.id,
                )

              const {
                data:
                  hostProfile,
              } = await supabase
                .from(
                  'profiles',
                )
                .select(
                  'nickname',
                )
                .eq(
                  'id',
                  newHost.user_id,
                )
                .single()

              await supabase
                .from(
                  'room_messages',
                )
                .insert({
                  room_id:
                    roomId,

                  user_id:
                    newHost.user_id,

                  message: `O novo líder da sala é ${hostProfile?.nickname}.`,
                })
            }
          }
        }
      },
      4000,
    )

  return () => {
    clearInterval(
      cleanupInterval,
    )
  }
}, [
  roomId,
  players,
  currentUserId,
])

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
    <DashboardLayout
      title={`SALA • ${code}`}
      hideSidebar
    >
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

                  <div className="room-player-info">

  <span>
    {
      player
        .profiles
        ?.nickname
    }
  </span>

  <small
    className={
      player.is_ready
        ? 'status-ready'
        : 'status-waiting'
    }
  >
    {player.is_ready
      ? 'PRONTO'
      : 'AGUARDANDO'}
  </small>

</div>

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
              {messages.map((msg) => {

  if (msg.is_system) {
    return (
      <div
        key={msg.id}
        className="room-system-message"
      >
        {msg.message}
      </div>
    )
  }

  return (
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
  )
})}

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
            disabled={
              !isHost ||
              startingGame
            }
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