import './GameTerrain.css'

type GameTerrainProps = {
  terrain: {
  name: string

  element: string

  bonus: string

  penalty: string

  image: string
}
}

export function GameTerrain({
  terrain,
}: GameTerrainProps) {
  return (
    <div
  className={`
    game-terrain
    terrain-${terrain.element}
  `}
>
      {/* HEADER */}

      <div className="terrain-header">

        <span>
          TERRENO ATUAL
        </span>

      </div>

      {/* CONTEÚDO */}

      <div className="terrain-content">

        <img
          src={terrain.image}
          alt=""
          className="terrain-image"
        />

        <div className="terrain-info">

          <span className="terrain-name">
            {terrain.name}
          </span>

          <span className="terrain-bonus">
            {terrain.bonus}
          </span>

          <span className="terrain-penalty">
            {terrain.penalty}
          </span>

        </div>

      </div>

    </div>
  )
}