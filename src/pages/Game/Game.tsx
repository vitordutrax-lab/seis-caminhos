import './Game.css'

import {
  GameBottom,
} from '../../components/Game/GameBottom'
import {
  GameCenter,
} from '../../components/Game/GameCenter'

export function Game() {
  return (
    <div className="game-screen">

      <div className="game-table">

        {/* PLAYERS */}

        <div className="game-players">

          <div className="player-slot top">

            <div className="player-avatar" />

            <div className="player-info">

              <span className="player-name">
                PLAYER 2
              </span>

              <span className="player-cards">
                6 BAÚS
              </span>

            </div>

          </div>

          <div className="player-slot top-right">

            <div className="player-avatar" />

            <div className="player-info">

              <span className="player-name">
                PLAYER 3
              </span>

              <span className="player-cards">
                4 BAÚS
              </span>

            </div>

          </div>

          <div className="player-slot right">

            <div className="player-avatar" />

            <div className="player-info">

              <span className="player-name">
                PLAYER 4
              </span>

              <span className="player-cards">
                8 BAÚS
              </span>

            </div>

          </div>

          <div className="player-slot left">

            <div className="player-avatar" />

            <div className="player-info">

              <span className="player-name">
                PLAYER 5
              </span>

              <span className="player-cards">
                3 BAÚS
              </span>

            </div>

          </div>

        </div>
        {/* CENTRO */}

        <GameCenter />

        {/* CHAT */}

        <div className="game-chat">
          CHAT
        </div>


        <div className="game-forge-side">

        <span>
            FORJADOR
         </span>

        </div>
        {/* LOG */}

        <div className="game-log">
          LOG
        </div>

        {/* HUD */}

        <GameBottom />

      </div>

    </div>
  )
}