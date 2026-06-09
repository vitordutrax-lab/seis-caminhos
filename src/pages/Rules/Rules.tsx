import './Rules.css'

import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout'

export function Rules() {
  return (
    <DashboardLayout title="Regras">

      <div className="rules-page">

        {/* =========================
            INTRODUÇÃO
        ========================= */}

        <section className="rules-section">

          <h3>
            Estrutura da Partida
          </h3>

          <p>
            Cada jogador controla um personagem composto por raça, classes, equipamentos, magias e níveis. O objetivo do jogo é alcançar o nível máximo antes dos outros jogadores.
          </p>

        </section>

        {/* =========================
            TURNOS
        ========================= */}

        <section className="rules-section">

          <h3>
            Ordem dos Turnos
          </h3>

          <ul>

            <li>
              O primeiro jogador é definido através de rolagem de dado.
            </li>

            <li>
              O terreno é revelado no início da rodada.
            </li>

            <li>
              Jogadores podem reorganizar equipamentos antes das batalhas.
            </li>

            <li>
              Magias podem ser utilizadas durante batalhas.
            </li>

          </ul>

        </section>

        {/* =========================
            BATALHAS
        ========================= */}

        <section className="rules-section">

          <h3>
            Batalhas
          </h3>

          <p>
            Outros jogadores podem ajudar ou atrapalhar batalhas utilizando magias e habilidades. Apenas um ajudante pode participar diretamente ao lado do dono da batalha.
          </p>

        </section>

        {/* =========================
            EXPEDIÇÕES
        ========================= */}

        <section className="rules-section">

          <h3>
            Expedições
          </h3>

          <p>
            Expedições são batalhas cooperativas onde múltiplos jogadores enfrentam monstros consecutivos para receber grandes recompensas.
          </p>

        </section>

        {/* =========================
            FORJA
        ========================= */}

        <section className="rules-section">

          <h3>
            Sistema de Forja
          </h3>

          <p>
            O Forjador permite adicionar runas em equipamentos através de rolagens de dado. Falhas podem destruir runas ou impedir a melhoria do item.
          </p>

        </section>

        {/* =========================
            MORTE
        ========================= */}

        <section className="rules-section">

          <h3>
            Morte
          </h3>

          <p>
            Ao morrer, o jogador retorna ao nível 1 mantendo apenas sua raça inicial.
          </p>

        </section>

      </div>

    </DashboardLayout>
  )
}