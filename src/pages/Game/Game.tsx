import {
  useEffect,
  useState,
} from 'react'

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
  const [
    currentPlayer,
    setCurrentPlayer,
  ] = useState<PlayerData | null>(
    null,
  )

  const currentTerrain: TerrainData =
    {
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
    }

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

      setCurrentPlayer({
        nickname:
          profile.nickname,

        avatar:
          profile.avatar,

        level: 1,

        power: 0,

        race: 'SEM RAÇA',

        class: 'SEM CLASSE',
      })
    }

    loadPlayer()
  }, [])

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

      <GameTable>

        <GamePlayers />

        <GameBottom
          player={currentPlayer}
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