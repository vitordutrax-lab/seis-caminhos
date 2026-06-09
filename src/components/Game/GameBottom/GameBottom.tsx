import './GameBottom.css'

export function GameBottom() {
  return (
    <div className="game-bottom">

      {/* PERSONAGEM */}

      <div className="bottom-character">

        <div className="bottom-avatar" />

        <div className="bottom-character-info">

          <span className="bottom-name">
            DUTRAX
          </span>

          <span>
            NÍVEL 4
          </span>

          <span>
            PODER 18
          </span>

          <span>
            ELFO
          </span>

          <span>
            GUERREIRO
          </span>

        </div>

      </div>

      {/* EQUIPAMENTOS */}

      <div className="bottom-equipment">

        <div className="equipment-slot">
          ARMA
        </div>

        <div className="equipment-slot">
          ARMADURA
        </div>

        <div className="equipment-slot">
          BOTAS
        </div>

        <div className="equipment-slot">
          ACESSÓRIO
        </div>

      </div>

      {/* CARTAS */}

      <div className="bottom-cards">

        <div className="bottom-card">
          CARTA
        </div>

        <div className="bottom-card">
          CARTA
        </div>

        <div className="bottom-card">
          CARTA
        </div>

        <div className="bottom-card">
          CARTA
        </div>

        <div className="bottom-card">
          CARTA
        </div>

      </div>

    </div>
  )
}