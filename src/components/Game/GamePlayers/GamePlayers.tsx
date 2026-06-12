import './GamePlayers.css'


type GamePlayer = {
  id: string

  room_id: string

  user_id: string

  nickname: string

  avatar: string

  position: number

  level: number

  power: number

  race: string

  class: string

  is_dead: boolean

  disconnected: boolean
}

type Props = {
  players: GamePlayer[]

  currentTurnPlayerId: string
}

export function GamePlayers({
  players,

  currentTurnPlayerId,
}: Props) {
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

  return (
    <>
      {players
  .sort(
    (a, b) =>
      a.position -
      b.position,
  )
  .map(
    (
      player,
      index,
    ) => (
          <div
  key={player.id}
  className={`
    game-player
    ${positions[index]}
    player-normal
  `}
>
  <div className="player-status-badge">
  {player.user_id ===
    currentTurnPlayerId && '👑'}

  {player.is_dead &&
    '☠'}

  {player.disconnected &&
    '📶'}
</div>

  <div className="game-player-info">
              <span className="game-player-name">
                {player.nickname}
              </span>

              <span>
                NÍVEL {player.level}
              </span>

              <span>
                 PODER {player.power}
              </span>
            </div>
          </div>
        ),
      )}
    </>
  )
}