import './GamePlayers.css'

export function GamePlayers() {
  return (
    <div className="game-players">

      {/* TOPO */}

      <div className="player-slot top active-turn">

        <div className="player-avatar" />

        <div className="player-info">

          <span className="player-name">
            PLAYER 2
          </span>

          <span className="player-details">
            6 CARTAS
          </span>

        </div>

      </div>

      {/* TOP RIGHT */}

      <div className="player-slot top-right">

        <div className="player-avatar" />

        <div className="player-info">

          <span className="player-name">
            PLAYER 3
          </span>

          <span className="player-details">
            4 CARTAS
          </span>

        </div>

      </div>

      {/* RIGHT */}

      <div className="player-slot right">

        <div className="player-avatar" />

        <div className="player-info">

          <span className="player-name">
            PLAYER 4
          </span>

          <span className="player-details">
            8 CARTAS
          </span>

        </div>

      </div>

      {/* LEFT */}

      <div className="player-slot left">

        <div className="player-avatar" />

        <div className="player-info">

          <span className="player-name">
            PLAYER 5
          </span>

          <span className="player-details">
            3 CARTAS
          </span>

        </div>

      </div>

    </div>
  )
}