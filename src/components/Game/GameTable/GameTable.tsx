import './GameTable.css'

type GameTableProps = {
  children: React.ReactNode

  terrain:
    | 'fire'
    | 'water'
    | 'earth'
    | 'air'
    | 'light'
    | 'darkness'
    | 'heroes'
}

export function GameTable({
  children,
  terrain,
}: GameTableProps) {
  return (
    <div className="game-table">

      <div
        className={`
          game-table-board
          table-${terrain}
        `}
      />

      {children}

    </div>
  )
}