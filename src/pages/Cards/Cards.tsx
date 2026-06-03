import {
  useState,
} from 'react'

import './Cards.css'

import { cards } from '../../data/cards'

import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout'

import { CardSection } from '../../components/cards/CardSection/CardSection'

import { CardModal } from '../../components/cards/CardModal/CardModal'

function Cards() {
  const [
    selectedCard,
    setSelectedCard,
  ] = useState<
    string | null
  >(null)

  const races =
    cards.filter(
      (card) =>
        card.type ===
        'race',
    )

  const classes =
    cards.filter(
      (card) =>
        card.type ===
        'class',
    )

  const bows =
    cards.filter(
      (card) =>
        card.category ===
        'bow',
    )

  return (
    <DashboardLayout
      title="Cartas"
    >
      <div className="cards-page">
        <div className="cards-content">

          <CardSection
            title="Raças"
            cards={races}
            onCardClick={
              setSelectedCard
            }
          />

          <CardSection
            title="Classes"
            cards={classes}
            onCardClick={
              setSelectedCard
            }
          />

          <CardSection
            title="Itens de Ataque"
            sections={[
              {
                title: 'Arcos',

                cards: bows,
              },
            ]}
            onCardClick={
              setSelectedCard
            }
          />

        </div>
      </div>

      <CardModal
        image={selectedCard}
        onClose={() =>
          setSelectedCard(
            null,
          )
        }
      />
    </DashboardLayout>
  )
}

export default Cards