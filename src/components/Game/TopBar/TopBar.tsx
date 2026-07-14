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
  return (
    <div className="top-bar">

      <button
        className="leave-room-button"
        onClick={onLeaveRoom}
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
  )
}