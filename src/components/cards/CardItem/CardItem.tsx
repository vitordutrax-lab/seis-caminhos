import './CardItem.css'

import type {
  Card,
} from '../../../types/card'

interface Props {
  card: Card

  onClick: (
    image: string,
  ) => void
}

export function CardItem({
  card,
  onClick,
}: Props) {
  return (
    <div
      className="card-item"
      onClick={() =>
        onClick(
          card.image,
        )
      }
    >
      <p className="card-name">
        {card.name}
      </p>

      <img
        src={card.image}
        alt={card.name}
        className="card-image"
      />
    </div>
  )
}