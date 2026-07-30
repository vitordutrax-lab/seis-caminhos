import {
  useState,
} from 'react'

import './TopBar.css'

type TopBarProps = {
  timer?: string

  onLeaveRoom?: () => void

  onNextStep?: () => void
}

export function TopBar({
  timer = '02:00',
  onLeaveRoom,
  onNextStep,
}: TopBarProps) {
  const [
    showLeaveModal,
    setShowLeaveModal,
  ] = useState(false)

  return (
    <>
      <div className="top-bar">

        <button
          className="leave-room-button"
          onClick={() =>
            setShowLeaveModal(
              true,
            )
          }
        >
          🚪 SAIR DA SALA
        </button>

        <div className="top-bar-right">

          <span className="turn-timer">
            ⏳ {timer}
          </span>

          <button
            className="next-step-button"
            onClick={onNextStep}
          >
            PRÓXIMA ETAPA
          </button>

        </div>

      </div>

      {showLeaveModal && (
        <div className="leave-room-modal">

          <div className="leave-room-box">

            <h2>
              SAIR DA SALA
            </h2>

            <p>
              Deseja realmente sair da sala?
            </p>

            <div className="leave-room-actions">

  <button
    className="leave-room-confirm"
    onClick={() => {
      setShowLeaveModal(false)

      onLeaveRoom?.()
    }}
  >
    SIM
  </button>

  <button
    className="leave-room-cancel"
    onClick={() =>
      setShowLeaveModal(false)
    }
  >
    NÃO
  </button>

</div>

          </div>

        </div>
      )}
    </>
  )
}