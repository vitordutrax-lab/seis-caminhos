import {
  useState,
} from 'react'

import './Cards.css'

import { cards } from '../../data/cards'

import { monsters } from '../../data/monsters'

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

  // =========================
  // MAGIAS
  // =========================

  const spells =
    cards.filter(
      (card) =>
        card.type ===
        'spell',
    )

  // =========================
  // MALDIÇÕES
  // =========================

  const curses =
    cards.filter(
      (card) =>
        card.type ===
        'curse',
    )

  // =========================
  // ACESSÓRIOS
  // =========================

  const accessories =
    cards.filter(
      (card) =>
        card.type ===
        'accessory',
    )

  // =========================
  // RUNAS & FORJADOR
  // =========================

  const forgeCards =
    cards.filter(
      (card) =>
        card.type ===
          'rune' ||
        card.type ===
          'blacksmith',
    )

  // =========================
  // TERRENOS
  // =========================

  const elementalTerrains =
    cards.filter(
      (card) =>
        card.type ===
          'terrain' &&
        card.element,
    )

  const heroCampTerrains =
    cards.filter(
      (card) =>
        card.type ===
          'terrain' &&
        !card.element,
    )

  // =========================
  // EXPEDIÇÕES
  // =========================

  const expeditions =
    cards.filter(
      (card) =>
        card.type ===
        'expedition',
    )

  // =========================
  // MONSTROS
  // =========================

  const neutralMonsters =
    monsters.filter(
      (monster) =>
        monster.monsterFamily ===
        'neutral',
    )

  const waterMonsters =
    monsters.filter(
      (monster) =>
        monster.element ===
          'water' &&
        monster.monsterFamily ===
          'elemental',
    )

  const airMonsters =
    monsters.filter(
      (monster) =>
        monster.element ===
          'air' &&
        monster.monsterFamily ===
          'elemental',
    )

  const darknessMonsters =
    monsters.filter(
      (monster) =>
        monster.element ===
          'darkness' &&
        monster.monsterFamily ===
          'elemental',
    )

  const fireMonsters =
    monsters.filter(
      (monster) =>
        monster.element ===
          'fire' &&
        monster.monsterFamily ===
          'elemental',
    )

  const lightMonsters =
    monsters.filter(
      (monster) =>
        monster.element ===
          'light' &&
        monster.monsterFamily ===
          'elemental',
    )

  const earthMonsters =
    monsters.filter(
      (monster) =>
        monster.element ===
          'earth' &&
        monster.monsterFamily ===
          'elemental',
    )

  const hybridMonsters =
    monsters.filter(
      (monster) =>
        monster.monsterFamily ===
        'hybrid',
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

          <CardSection
            title="Acessórios"
            cards={accessories}
            onCardClick={
              setSelectedCard
            }
          />

          <CardSection
            title="Maldições"
            cards={curses}
            onCardClick={
              setSelectedCard
            }
          />

          <CardSection
            title="Magias"
            cards={spells}
            onCardClick={
              setSelectedCard
            }
          />

          <CardSection
            title="Monstros"
            sections={[
              {
                title:
                  'Neutros',

                cards:
                  neutralMonsters,
              },

              {
                title:
                  'Água',

                cards:
                  waterMonsters,
              },

              {
                title:
                  'Ar',

                cards:
                  airMonsters,
              },

              {
                title:
                  'Escuridão',

                cards:
                  darknessMonsters,
              },

              {
                title:
                  'Fogo',

                cards:
                  fireMonsters,
              },

              {
                title:
                  'Luz',

                cards:
                  lightMonsters,
              },

              {
                title:
                  'Terra',

                cards:
                  earthMonsters,
              },

              {
                title:
                  'Híbridos',

                cards:
                  hybridMonsters,
              },
            ]}
            onCardClick={
              setSelectedCard
            }
          />

          <CardSection
            title="Runas & Forjador"
            cards={forgeCards}
            onCardClick={
              setSelectedCard
            }
          />

          <CardSection
      title="Terrenos"
     cards={[
        ...elementalTerrains,
       ...heroCampTerrains,
     ]}
     onCardClick={
        setSelectedCard
     }
    />

          <CardSection
            title="Expedições"
            cards={expeditions}
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