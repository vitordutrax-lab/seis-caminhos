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

type PlayerData = {
  nickname: string

  avatar:string

  level: number

  power: number

  race: string

  class: string
}

export function Game() {
  const [
    currentPlayer,
    setCurrentPlayer,
  ] = useState<PlayerData | null>(
    null,
  )

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
        .select('nickname, avatar')
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
const currentTerrain = {
  name: 'TERRENO DE FOGO',

  element: 'fire',

  bonus:
    '+3 poder para Fogo',

  penalty:
    '-2 poder para Ar',

  image:
    '/terrains/fire.webp',
}

  return (
    <div className="game-screen">

      <div className="game-table">

        <GamePlayers />

        <GameBottom
          player={currentPlayer}
        />
        <GameChat />
        <GameTerrain
  terrain={currentTerrain}
/>
<GameLog />
      </div>

    </div>
  )
}