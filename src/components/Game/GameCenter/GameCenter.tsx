import './GameCenter.css'

export function GameCenter() {
  return (
    <div className="game-center">

      <div className="game-deck monsters">

        <span>
          MONSTROS
        </span>

        <strong>
          60
        </strong>

      </div>

      <div className="game-deck chests">

        <span>
          BAÚS
        </span>

        <strong>
          120
        </strong>

      </div>

      <div className="game-deck terrains">

        <span>
          TERRENOS
        </span>

        <strong>
          20
        </strong>

      </div>

    </div>
  )
}