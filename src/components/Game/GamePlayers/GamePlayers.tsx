import './GamePlayers.css'

type PlayerStatus =
  | 'turn'
  | 'battle'
  | 'expedition'
  | 'dead'
  | 'helping'
  | 'normal'

export function GamePlayers() {
  const players: {
    id: number

    nickname: string

    level: number

    cards: number

    avatar: string

    status: PlayerStatus
  }[] = [
    {
      id: 1,

      nickname: 'KAEL',

      level: 4,

      cards: 5,

      avatar:
        '/avatars/default.webp',

      status: 'turn',
    },

    {
      id: 2,

      nickname: 'LUNA',

      level: 7,

      cards: 3,

      avatar:
        '/avatars/default.webp',

      status: 'battle',
    },

    {
      id: 3,

      nickname: 'REX',

      level: 2,

      cards: 6,

      avatar:
        '/avatars/default.webp',

      status: 'helping',
    },

    {
      id: 4,

      nickname: 'ZEUS',

      level: 8,

      cards: 2,

      avatar:
        '/avatars/default.webp',

      status: 'expedition',
    },

    {
      id: 5,

      nickname: 'NYX',

      level: 5,

      cards: 4,

      avatar:
        '/avatars/default.webp',

      status: 'dead',
    },
  ]

  const positions = [
    'top-left',

    'top-center-left',

    'top-center-right',

    'top-right',

    'left',

    'right',

    'bottom-left',

    'bottom-right',
  ]

  const statusIcons = {
    turn: '👑',

    battle: '⚔️',

    expedition: '⛺',

    dead: '☠',

    normal: '',

    helping: '🤝',
  }

  return (
    <>
      {players.map((
        player,
        index,
      ) => (
        <div
          key={player.id}
          className={`
            game-player
            ${positions[index]}
            player-${player.status}
          `}
        >

          <img
            src={player.avatar}
            alt=""
            className="game-player-avatar"
          />

          {player.status !==
            'normal' && (
            <div className="player-status-badge">

              {
                statusIcons[
                  player.status
                ]
              }

            </div>
          )}

          <div className="game-player-info">

            <span className="game-player-name">
              {player.nickname}
            </span>

            <span>
              NÍVEL {player.level}
            </span>

            <span>
              {player.cards} CARTAS
            </span>

          </div>

        </div>
      ))}
    </>
  )
}