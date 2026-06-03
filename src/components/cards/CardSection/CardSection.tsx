import './CardSection.css'

import type {
  Card,
} from '../../../types/card'

import { CardGrid } from '../CardGrid/CardGrid'

interface Props {
  title: string

  cards?: Card[]

  sections?: {
    title: string

    cards: Card[]
  }[]

  onCardClick: (
    image: string,
  ) => void
}

export function CardSection({
  title,
  cards,
  sections,
  onCardClick,
}: Props) {
  return (
    <section className="cards-section">
      <h2 className="section-title">
        {title}
      </h2>

      {cards && (
        <CardGrid
          cards={cards}
          onCardClick={
            onCardClick
          }
        />
      )}

      {sections?.map(
        (section) => (
          <div
            key={
              section.title
            }
          >
            <h3 className="subsection-title">
              {
                section.title
              }
            </h3>

            <CardGrid
              cards={
                section.cards
              }
              onCardClick={
                onCardClick
              }
            />
          </div>
        ),
      )}
    </section>
  )
}