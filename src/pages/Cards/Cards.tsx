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

  const [
    search,
    setSearch,
  ] = useState('')

  // =========================
  // FILTRO GLOBAL
  // =========================

  const filterCards = <
    T extends {
      name: string
    },
  >(
    cardList: T[],
  ) => {
    return cardList.filter(
      (card) =>
        card.name
          .toLowerCase()
          .includes(
            search.toLowerCase(),
          ),
    )
  }

  // =========================
  // RAÇAS
  // =========================

  const races =
    filterCards(
      cards.filter(
        (card) =>
          card.type ===
          'race',
      ),
    )

  // =========================
  // CLASSES
  // =========================

  const classes =
    filterCards(
      cards.filter(
        (card) =>
          card.type ===
          'class',
      ),
    )

  // =========================
  // ITENS DE ATAQUE
  // =========================

  const attackSections = [
    {
      title: 'Arcos',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
              'bow',
          ),
        ),
    },

    {
      title: 'Espadas',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
              'sword',
          ),
        ),
    },

    {
      title: 'Foices',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
              'scythe',
          ),
        ),
    },

    {
      title:
        'Machados',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
              'axe',
          ),
        ),
    },

    {
      title:
        'Outros Itens',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
                'dagger' ||
              card.category ===
                'crossbow' ||
              card.category ===
                'club',
          ),
        ),
    },
  ].filter(
    (section) =>
      section.cards
        .length > 0,
  )

  // =========================
  // ITENS DE DEFESA
  // =========================

  const defenseSections = [
    {
      title:
        'Armaduras',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
              'armor',
          ),
        ),
    },

    {
      title:
        'Elmos',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
              'helmet',
          ),
        ),
    },

    {
      title:
        'Escudos',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
              'shield',
          ),
        ),
    },

    {
      title:
        'Luvas',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
              'gloves',
          ),
        ),
    },

    {
      title:
        'Botas',

      cards:
        filterCards(
          cards.filter(
            (card) =>
              card.category ===
              'boots',
          ),
        ),
    },
  ].filter(
    (section) =>
      section.cards
        .length > 0,
  )

  // =========================
  // OUTRAS CARTAS
  // =========================

  const accessories =
    filterCards(
      cards.filter(
        (card) =>
          card.type ===
          'accessory',
      ),
    )

  const curses =
    filterCards(
      cards.filter(
        (card) =>
          card.type ===
          'curse',
      ),
    )

  const spells =
    filterCards(
      cards.filter(
        (card) =>
          card.type ===
          'spell',
      ),
    )

  const forgeCards =
    filterCards(
      cards.filter(
        (card) =>
          card.type ===
            'rune' ||
          card.type ===
            'blacksmith',
      ),
    )

  const terrains =
    filterCards(
      cards.filter(
        (card) =>
          card.type ===
          'terrain',
      ),
    )

  const expeditions =
    filterCards(
      cards.filter(
        (card) =>
          card.type ===
          'expedition',
      ),
    )

  // =========================
  // MONSTROS
  // =========================

  const monsterSections = [
    {
      title:
        'Neutros',

      cards:
        filterCards(
          monsters.filter(
            (monster) =>
              monster.monsterFamily ===
              'neutral',
          ),
        ),
    },

    {
      title:
        'Água',

      cards:
        filterCards(
          monsters.filter(
            (monster) =>
              monster.element ===
                'water' &&
              monster.monsterFamily ===
                'elemental',
          ),
        ),
    },

    {
      title:
        'Ar',

      cards:
        filterCards(
          monsters.filter(
            (monster) =>
              monster.element ===
                'air' &&
              monster.monsterFamily ===
                'elemental',
          ),
        ),
    },

    {
      title:
        'Escuridão',

      cards:
        filterCards(
          monsters.filter(
            (monster) =>
              monster.element ===
                'darkness' &&
              monster.monsterFamily ===
                'elemental',
          ),
        ),
    },

    {
      title:
        'Fogo',

      cards:
        filterCards(
          monsters.filter(
            (monster) =>
              monster.element ===
                'fire' &&
              monster.monsterFamily ===
                'elemental',
          ),
        ),
    },

    {
      title:
        'Luz',

      cards:
        filterCards(
          monsters.filter(
            (monster) =>
              monster.element ===
                'light' &&
              monster.monsterFamily ===
                'elemental',
          ),
        ),
    },

    {
      title:
        'Terra',

      cards:
        filterCards(
          monsters.filter(
            (monster) =>
              monster.element ===
                'earth' &&
              monster.monsterFamily ===
                'elemental',
          ),
        ),
    },

    {
      title:
        'Híbridos',

      cards:
        filterCards(
          monsters.filter(
            (monster) =>
              monster.monsterFamily ===
              'hybrid',
          ),
        ),
    },
  ].filter(
    (section) =>
      section.cards
        .length > 0,
  )

  return (
    <DashboardLayout
      title="Cartas"
    >
      <div className="cards-page">
        <div className="cards-content">

          <div className="cards-search">
            <input
              type="text"
              placeholder="Pesquisar carta..."
              value={search}
              onChange={(
                event,
              ) =>
                setSearch(
                  event.target.value,
                )
              }
            />
          </div>

          {races.length >
            0 && (
            <CardSection
              title="Raças"
              cards={races}
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {classes.length >
            0 && (
            <CardSection
              title="Classes"
              cards={classes}
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {attackSections
            .length > 0 && (
            <CardSection
              title="Itens de Ataque"
              sections={
                attackSections
              }
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {defenseSections
            .length > 0 && (
            <CardSection
              title="Itens de Defesa"
              sections={
                defenseSections
              }
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {accessories
            .length > 0 && (
            <CardSection
              title="Acessórios"
              cards={
                accessories
              }
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {curses.length >
            0 && (
            <CardSection
              title="Maldições"
              cards={curses}
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {spells.length >
            0 && (
            <CardSection
              title="Magias"
              cards={spells}
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {monsterSections
            .length > 0 && (
            <CardSection
              title="Monstros"
              sections={
                monsterSections
              }
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {forgeCards
            .length > 0 && (
            <CardSection
              title="Runas & Forjador"
              cards={
                forgeCards
              }
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {terrains.length >
            0 && (
            <CardSection
              title="Terrenos"
              cards={terrains}
              onCardClick={
                setSelectedCard
              }
            />
          )}

          {expeditions
            .length > 0 && (
            <CardSection
              title="Expedições"
              cards={
                expeditions
              }
              onCardClick={
                setSelectedCard
              }
            />
          )}

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