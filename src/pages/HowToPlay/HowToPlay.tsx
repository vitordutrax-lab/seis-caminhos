import './HowToPlay.css'

import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout'

export function HowToPlay() {
  return (
    <DashboardLayout title="Como Jogar">

      <div className="howtoplay-page">

        {/* =========================
            INTRODUÇÃO
        ========================= */}

        <section className="howtoplay-section">

          <h3>
            O que é Seis Caminhos?
          </h3>

          <p>
            Seis Caminhos é um RPG de cartas estratégico onde os jogadores enfrentam monstros, utilizam magias, evoluem seus personagens e competem para alcançar o nível máximo antes dos outros participantes.
          </p>

        </section>

        {/* =========================
            OBJETIVO
        ========================= */}

        <section className="howtoplay-section">

          <h3>
            Objetivo do Jogo
          </h3>

          <p>
            O objetivo é alcançar o nível máximo antes dos outros jogadores através de batalhas, expedições, equipamentos e estratégias.
          </p>

        </section>

        {/* =========================
            TURNOS
        ========================= */}

        <section className="howtoplay-section">

          <h3>
            Como Funcionam os Turnos
          </h3>

          <ul>

            <li>
              Revele um terreno.
            </li>

            <li>
              Equipe cartas e utilize habilidades.
            </li>

            <li>
              Compre ou enfrente monstros.
            </li>

            <li>
              Utilize magias durante batalhas.
            </li>

            <li>
              Receba recompensas ao vencer.
            </li>

          </ul>

        </section>

        {/* =========================
            BATALHAS
        ========================= */}

        <section className="howtoplay-section">

          <h3>
            Batalhas
          </h3>

          <p>
            Durante as batalhas, outros jogadores podem ajudar monstros ou jogadores utilizando magias e habilidades. Estratégia e negociação fazem parte do jogo.
          </p>

        </section>

        {/* =========================
            EXPEDIÇÕES
        ========================= */}

        <section className="howtoplay-section">

          <h3>
            Expedições
          </h3>

          <p>
            Expedições são desafios cooperativos extremamente perigosos que exigem múltiplos jogadores e oferecem grandes recompensas.
          </p>

        </section>

      </div>

    </DashboardLayout>
  )
}