import './GamePlayers.css'

export function GamePlayers() {
  const players = [
    {
      id: 1,

      nickname: 'KAEL',

      level: 4,

      cards: 5,

      avatar:
        '/avatars/default.webp',

      position:
        'top-left',
    },

    {
      id: 2,

      nickname: 'LUNA',

      level: 7,

      cards: 3,

      avatar:
        '/avatars/default.webp',

      position:
        'top-center',
    },

    {
      id: 3,

      nickname: 'REX',

      level: 2,

      cards: 6,

      avatar:
        '/avatars/default.webp',

      position:
        'top-right',
    },

    {
      id: 4,

      nickname: 'ZEUS',

      level: 8,

      cards: 2,

      avatar:
        '/avatars/default.webp',

      position:
        'left',
    },

    {
      id: 5,

      nickname: 'NYX',

      level: 5,

      cards: 4,

      avatar:
        '/avatars/default.webp',

      position:
        'right',
    },
  ]

  return (
    <>
      {players.map((player) => (
        <div
          key={player.id}
          className={`
            game-player
            ${player.position}
          `}
        >

          <img
            src={player.avatar}
            alt=""
            className="game-player-avatar"
          />

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