import './GameLog.css'

export function GameLog() {
  const logs = [
    {
      type: 'battle',

      message:
        'DUTRAX derrotou Dragão Flamejante',
    },

    {
      type: 'dice',

      message:
        'Player2 rolou um dado: 6',
    },

    {
      type: 'magic',

      message:
        'Player3 usou Poção Média',
    },

    {
      type: 'terrain',

      message:
        'Novo terreno revelado',
    },
  ]

  return (
    <div className="game-log">

      {/* HEADER */}

      <div className="game-log-header">

        <span>
          LOG DA PARTIDA
        </span>

      </div>

      {/* MENSAGENS */}

      <div className="game-log-messages">

        {logs.map(
          (log, index) => (
            <div
              key={index}
              className={`
                game-log-message
                log-${log.type}
              `}
            >
              {log.message}
            </div>
          ),
        )}

      </div>

    </div>
  )
}