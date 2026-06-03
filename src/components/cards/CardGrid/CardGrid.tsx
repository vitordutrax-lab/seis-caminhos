import './CardGrid.css'

import type {
  Card,
} from '../../../types/card'

import { CardItem } from '../CardItem/CardItem'

interface Props {
  cards: Card[]

  onCardClick: (
    image: string,
  ) => void
}

export function CardGrid({
  cards,
  onCardClick,
}: Props) {
  return (
    <div className="cards-grid">
      {cards.map(
        (card) => (
          <CardItem
            key={card.id}
            card={card}
            onClick={
              onCardClick
            }
          />
        ),
      )}
    </div>
  )
}