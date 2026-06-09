import {
  useParams,
} from 'react-router-dom'

import {
  DashboardLayout,
} from '../../layouts/DashboardLayout/DashboardLayout'

import './Game.css'

export function Game() {

  const { code } =
    useParams()

  return (
    <DashboardLayout title="PARTIDA">

      <div className="game-container">

        <div className="game-top">
          PARTIDA: {code}
        </div>

        <div className="game-board">

          <div className="game-left">
            PLAYERS
          </div>

          <div className="game-center">
            TABULEIRO
          </div>

          <div className="game-right">
            CHAT / LOG
          </div>

        </div>

      </div>

    </DashboardLayout>
  )
}