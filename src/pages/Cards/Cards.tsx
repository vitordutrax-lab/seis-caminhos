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

  // =========================
  // RAÇAS
  // =========================

  const races =
    cards.filter(
      (card) =>
        card.type ===
        'race',
    )

  // =========================
  // CLASSES
  // =========================

  const classes =
    cards.filter(
      (card) =>
        card.type ===
        'class',
    )

  // =========================
  // ITENS DE ATAQUE
  // =========================

  const bows =
    cards.filter(
      (card) =>
        card.category ===
        'bow',
    )

  const swords =
    cards.filter(
      (card) =>
        card.category ===
        'sword',
    )

  const scythes =
    cards.filter(
      (card) =>
        card.category ===
        'scythe',
    )

  const axes =
    cards.filter(
      (card) =>
        card.category ===
        'axe',
    )

  const daggers =
    cards.filter(
      (card) =>
        card.category ===
        'dagger',
    )

  const crossbows =
    cards.filter(
      (card) =>
        card.category ===
        'crossbow',
    )

  const clubs =
    cards.filter(
      (card) =>
        card.category ===
        'club',
    )

  // =========================
  // ITENS DE DEFESA
  // =========================

  const armors =
    cards.filter(
      (card) =>
        card.category ===
        'armor',
    )

  const helmets =
    cards.filter(
      (card) =>
        card.category ===
        'helmet',
    )

  const shields =
    cards.filter(
      (card) =>
        card.category ===
        'shield',
    )

  const gloves =
    cards.filter(
      (card) =>
        card.category ===
        'gloves',
    )

  const boots =
    cards.filter(
      (card) =>
        card.category ===
        'boots',
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

              {
                title: 'Espadas',

                cards: swords,
              },

              {
                title: 'Foices',

                cards: scythes,
              },

              {
                title: 'Machados',

                cards: axes,
              },

              {
                title:
                  'Outros Itens',

                cards: [
                  ...daggers,
                  ...crossbows,
                  ...clubs,
                ],
              },
            ]}
            onCardClick={
              setSelectedCard
            }
          />

          <CardSection
            title="Itens de Defesa"
            sections={[
              {
                title:
                  'Armaduras',

                cards: armors,
              },

              {
                title:
                  'Elmos',

                cards: helmets,
              },

              {
                title:
                  'Escudos',

                cards: shields,
              },

              {
                title:
                  'Luvas',

                cards: gloves,
              },

              {
                title:
                  'Botas',

                cards: boots,
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