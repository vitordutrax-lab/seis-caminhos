import './GameTable.css'

type GameTableProps = {
  children: React.ReactNode
}

export function GameTable({
  children,
}: GameTableProps) {
  return (
    <div className="game-table">

      <div className="game-table-board" />

      {children}

    </div>
  )
}