import {
  useEffect,
  useState,
} from 'react'

import {
  useParams,
} from 'react-router-dom'

import './Game.css'

import {
  supabase,
} from '../../services/supabase'

import {
  GameBottom,
} from '../../components/Game/GameBottom'

import {
  GamePlayers,
} from '../../components/Game/GamePlayers'

import {
  GameChat,
} from '../../components/Game/GameChat'

import {
  GameTerrain,
} from '../../components/Game/RightPanel/GameTerrain'

import {
  GameLog,
} from '../../components/Game/RightPanel/GameLog'

import {
  GameTable,
} from '../../components/Game/GameTable'

type TerrainElement =
  | 'fire'
  | 'water'
  | 'earth'
  | 'air'
  | 'light'
  | 'darkness'
  | 'heroes'

type GameState = {
  room_id: string

  current_player_turn: string

  current_terrain: string

  turn_number: number

  phase: string
}  

type GamePlayer = {
  id: string

  room_id: string

  user_id: string

  nickname: string

  avatar: string

  position: number

  level: number

  power: number

  race: string

  class: string

  is_dead: boolean

  disconnected: boolean
}

type PlayerData = {
  nickname: string

  avatar: string

  level: number

  power: number

  race: string

  class: string
}

type TerrainData = {
  name: string

  element: TerrainElement

  bonus: string

  penalty: string

  image: string
}

export function Game() {
  const { code } =
    useParams()

  const [
    currentPlayer,
    setCurrentPlayer,
  ] = useState<PlayerData | null>(
    null,
  )

  const [
    roomId,
    setRoomId,
  ] = useState('')

const [
  currentUserId,
  setCurrentUserId,
] = useState('')  

const [
  gameState,
  setGameState,
] = useState<GameState | null>(
  null,
)

const [
  gamePlayers,
  setGamePlayers,
] = useState<GamePlayer[]>([])

const terrainDataMap:
  Record<
    TerrainElement,
    TerrainData
  > = {
    fire: {
      name:
        'TERRENO DE FOGO',
      element:
        'fire',
      bonus:
        '+3 poder para Fogo',
      penalty:
        '-2 poder para Ar',
      image:
        '/terrains/fire.webp',
    },

    water: {
      name:
        'TERRENO DE ÁGUA',
      element:
        'water',
      bonus:
        '+3 poder para Água',
      penalty:
        '-2 poder para Fogo',
      image:
        '/terrains/water.webp',
    },

    earth: {
      name:
        'TERRENO DE TERRA',
      element:
        'earth',
      bonus:
        '+3 poder para Terra',
      penalty:
        '-2 poder para Água',
      image:
        '/terrains/earth.webp',
    },

    air: {
      name:
        'TERRENO DE AR',
      element:
        'air',
      bonus:
        '+3 poder para Ar',
      penalty:
        '-2 poder para Terra',
      image:
        '/terrains/air.webp',
    },

    light: {
      name:
        'TERRENO DE LUZ',
      element:
        'light',
      bonus:
        '+3 poder para Luz',
      penalty:
        '-2 poder para Escuridão',
      image:
        '/terrains/light.webp',
    },

    darkness: {
      name:
        'TERRENO DE ESCURIDÃO',
      element:
        'darkness',
      bonus:
        '+3 poder para Escuridão',
      penalty:
        '-2 poder para Luz',
      image:
        '/terrains/darkness.webp',
    },

    heroes: {
      name:
        'ACAMPAMENTO DOS HERÓIS',
      element:
        'heroes',
      bonus:
        'Receba 1 baú',
      penalty:
        '-',
      image:
        '/terrains/heroes.webp',
    },
  }

 const currentTerrain =
  gameState
    ? terrainDataMap[
        gameState.current_terrain as TerrainElement
      ]
    : terrainDataMap.fire


  const terrainBackgrounds:
    Record<
      TerrainElement,
      string
    > = {
      fire:
        '/art/art-terrains/fogo-art.webp',

      water:
        '/art/art-terrains/agua-art.webp',

      earth:
        '/art/art-terrains/terra-art.webp',

      air:
        '/art/art-terrains/ar-art.webp',

      light:
        '/art/art-terrains/luz-art.webp',

      darkness:
        '/art/art-terrains/escuridao-art.webp',

      heroes:
        '/art/art-terrains/acampamento-dos-herois-art.webp',
    }

  useEffect(() => {
    async function loadPlayer() {
      const {
        data: { user },
      } =
        await supabase.auth.getUser()

      if (!user)
        return
      setCurrentUserId(
  user.id,
)

      const {
  data: room,
} = await supabase
  .from('rooms')
  .select('id')
  .eq('code', code)
  .single()

if (!room)
  return

setRoomId(room.id)

const {
  data: gameStateData,
} = await supabase
  .from('game_state')
  .select('*')
  .eq(
    'room_id',
    room.id,
  )
  .single()

setGameState(
  gameStateData,
)

const {
  data: gamePlayersData,
} = await supabase
  .from('game_players')
  .select('*')
  .eq(
    'room_id',
    room.id,
  )

setGamePlayers(
  gamePlayersData ?? [],
)

const {
  data: profile,
} = await supabase
  .from('profiles')
  .select(
    'nickname, avatar',
  )
  .eq('id', user.id)
  .single()

if (!profile)
  return

      const currentGamePlayer =
  gamePlayersData?.find(
    (
      player: GamePlayer,
    ) =>
      player.user_id ===
      user.id,
  )

if (
  !currentGamePlayer
)
  return

setCurrentPlayer({
  nickname:
    currentGamePlayer.nickname,

  avatar:
    currentGamePlayer.avatar,

  level:
    currentGamePlayer.level,

  power:
    currentGamePlayer.power,

  race:
    currentGamePlayer.race,

  class:
    currentGamePlayer.class,
})
    }

    loadPlayer()
  }, [code])


useEffect(() => {
  if (!roomId)
    return

  const channel =
    supabase.channel(
      `game-players-${roomId}`,
    )

  channel.on(
    'postgres_changes',
    {
      event: '*',

      schema: 'public',

      table:
        'game_players',
    },
    async () => {
      const {
        data,
      } = await supabase
        .from('game_players')
        .select('*')
        .eq(
          'room_id',
          roomId,
        )

      setGamePlayers(
        (data ??
          []) as GamePlayer[],
      )
    },
  )

  channel.subscribe()

  return () => {
    supabase.removeChannel(
      channel,
    )
  }
}, [roomId])

useEffect(() => {
  if (!roomId)
    return

  const channel =
    supabase.channel(
      `game-state-${roomId}`,
    )

  channel.on(
    'postgres_changes',
    {
      event: '*',

      schema: 'public',

      table:
        'game_state',
    },
    async () => {
      const {
        data,
      } = await supabase
        .from('game_state')
        .select('*')
        .eq(
          'room_id',
          roomId,
        )
        .single()

      if (data) {
        setGameState(
          data as GameState,
        )
      }
    },
  )

  channel.subscribe()

  return () => {
    supabase.removeChannel(
      channel,
    )
  }
}, [roomId])

useEffect(() => {
  if (
    !currentUserId ||
    !roomId
  ) {
    return
  }

  const interval = setInterval(
    async () => {
      const now =
        new Date().toISOString()

      await supabase
        .from('game_players')
        .update({
          last_seen: now,

          disconnected: false,
        })
        .eq(
          'user_id',
          currentUserId,
        )
        .eq(
          'room_id',
          roomId,
        )
    },
    30000,
  )

  return () => {
    clearInterval(interval)
  }
}, [
  currentUserId,
  roomId,
])

useEffect(() => {
  if (!roomId)
    return

  const interval = setInterval(
    async () => {
      const offlineLimit =
        new Date(
          Date.now() - 45000,
        ).toISOString()

      await supabase
        .from('game_players')
        .update({
          disconnected: true,
        })
        .eq(
          'room_id',
          roomId,
        )
        .lt(
          'last_seen',
          offlineLimit,
        )
    },
    30000,
  )

  return () => {
    clearInterval(interval)
  }
}, [roomId])

useEffect(() => {
  if (!roomId)
    return

  const interval = setInterval(
    async () => {
      const removeLimit =
        new Date(
          Date.now() - 300000,
        ).toISOString()

      const {
        data: offlinePlayers,
      } = await supabase
        .from('game_players')
        .select(
          'id, user_id',
        )
        .eq(
          'room_id',
          roomId,
        )
        .lt(
          'last_seen',
          removeLimit,
        )

      if (
        !offlinePlayers
      )
        return

      for (const player of offlinePlayers) {
  await supabase
    .from('game_players')
    .delete()
    .eq(
      'id',
      player.id,
    )

  await supabase
    .from('room_players')
    .delete()
    .eq(
      'user_id',
      player.user_id,
    )

  await supabase
    .from('profiles')
    .update({
      current_room_id:
        null,
    })
    .eq(
      'id',
      player.user_id,
    )
}
    },
    30000,
  )

  return () => {
    clearInterval(interval)
  }
}, [roomId])

const realtimeCurrentPlayer =
  gamePlayers.find(
    (
      player,
    ) =>
      player.user_id ===
      currentUserId,
  )

  if (!currentPlayer)
    return null

  return (
    <div
      className="game-screen"
      style={{
        backgroundImage:
          `url(${
            terrainBackgrounds[
              currentTerrain.element
            ]
          })`,
      }}
    >

      <GameTable
        terrain={
          currentTerrain.element
        }
      >

        <GamePlayers
  players={gamePlayers.filter(
    (
      player,
    ) =>
      player.user_id !==
      currentUserId,
  )}
  currentTurnPlayerId={
    gameState?.current_player_turn ??
    ''
  }
/>

        <GameBottom
  player={
    realtimeCurrentPlayer
      ? {
          nickname:
            realtimeCurrentPlayer.nickname,

          avatar:
            realtimeCurrentPlayer.avatar,

          level:
            realtimeCurrentPlayer.level,

          power:
            realtimeCurrentPlayer.power,

          race:
            realtimeCurrentPlayer.race,

          class:
            realtimeCurrentPlayer.class,
        }
      : currentPlayer
  }
/>

        <GameChat />

        <GameTerrain
          terrain={currentTerrain}
        />

        <GameLog />

      </GameTable>

    </div>
  )
}