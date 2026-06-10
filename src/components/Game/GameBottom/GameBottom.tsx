import './GameBottom.css'

type GameBottomProps = {
  player: {
    nickname: string

    avatar: string

    level: number

    power: number

    race: string

    class: string
  }
}

export function GameBottom({
  player,
}: GameBottomProps) {
  const handCards = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ]

  return (
    <div className="game-bottom">

      {/* PLAYER */}

      <div className="bottom-section bottom-player">

        <img
          className="bottom-avatar"
          src={player.avatar}
          alt=""
        />

        <div className="bottom-player-info">

          <span className="bottom-name">
            {player.nickname}
          </span>

          <span>
            NÍVEL {player.level}
          </span>

          <span>
            PODER {player.power}
          </span>

          <span>
            {player.race}
          </span>

          <span>
            {player.class}
          </span>

        </div>

      </div>

      {/* DIVISOR */}

      <div className="bottom-divider" />

      {/* INVENTÁRIO */}

      <div className="bottom-section bottom-inventory">

        <div className="inventory-grid">

          <div className="inventory-slot helmet">
            ELMO
          </div>

          <div className="inventory-middle">

            <div className="inventory-slot weapon-left">
              ARMA
            </div>

            <div className="inventory-slot armor">
              ARMADURA
            </div>

            <div className="inventory-slot weapon-right">
              ARMA
            </div>

          </div>

          <div className="inventory-bottom">

            <div className="inventory-slot gloves-left">
              LUVA
            </div>

            <div className="inventory-slot boots">
              BOTAS
            </div>

          </div>

        </div>

      </div>

      {/* DIVISOR */}

      <div className="bottom-divider inventory-divider" />

      {/* DIREITA */}

      <div className="bottom-section bottom-right">

        {/* CARTAS */}

        <div className="bottom-cards">

          {Array.from({
            length: Math.ceil(
              handCards.length / 5,
            ),
          }).map((_, rowIndex) => {

            const rowCards =
              handCards.slice(
                rowIndex * 5,
                rowIndex * 5 + 5,
              )

            return (
              <div
                key={rowIndex}
                className="cards-row"
              >
                {rowCards.map((card) => (
                  <div
                    key={card}
                    className="bottom-card"
                  >
                    CARTA
                  </div>
                ))}
              </div>
            )
          })}

        </div>

        {/* DIVISOR */}

        <div className="right-divider" />

        {/* ACESSÓRIOS/MALDIÇÕES */}

        <div className="bottom-extra">

          {/* ACESSÓRIOS */}

          <div className="extra-group">

            <span className="extra-title">
              ACESSÓRIOS
            </span>

            <div className="extra-row">

              <div className="extra-slot" />
              <div className="extra-slot" />
              <div className="extra-slot" />
              <div className="extra-slot" />
              <div className="extra-slot" />

            </div>

          </div>

          {/* MALDIÇÕES */}

          <div className="extra-group">

            <span className="extra-title">
              MALDIÇÕES
            </span>

            <div className="extra-row">

              <div className="extra-slot curse" />
              <div className="extra-slot curse" />
              <div className="extra-slot curse" />
              <div className="extra-slot curse" />
              <div className="extra-slot curse" />

            </div>

          </div>

        </div>

      </div>

    </div>
  )
}