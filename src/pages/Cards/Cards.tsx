import {
  useState,
} from 'react'

import './Cards.css'

import { cards } from '../../data/cards'

import { DashboardLayout } from '../../layouts/DashboardLayout/DashboardLayout'

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
        card.type === 'race',
    )

  const classes =
    cards.filter(
      (card) =>
        card.type === 'class',
    )

  const spells =
    cards.filter(
      (card) =>
        card.type === 'spell',
    )

  return (
    <DashboardLayout
      title="Estilo das Cartas"
    >
      <div className="cards-page">
        <div className="cards-content">
          <section className="cards-section">
            <h2 className="section-title">
              Raças
            </h2>

            <div className="cards-grid">
              {races.map(
                (card) => (
                  <div
                    key={
                      card.id
                    }
                    className="card-item"
                    onClick={() =>
                      setSelectedCard(
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
                ),
              )}
            </div>
          </section>

          <section className="cards-section">
            <h2 className="section-title">
              Classes
            </h2>

            <div className="cards-grid">
              {classes.map(
                (card) => (
                  <div
                    key={
                      card.id
                    }
                    className="card-item"
                    onClick={() =>
                      setSelectedCard(
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
                ),
              )}
            </div>
          </section>

          <section className="cards-section">
            <h2 className="section-title">
              Magias
            </h2>

            <div className="cards-grid">
              {spells.map(
                (card) => (
                  <div
                    key={
                      card.id
                    }
                    className="card-item"
                    onClick={() =>
                      setSelectedCard(
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
                ),
              )}
            </div>
          </section>
        </div>
      </div>

      {selectedCard && (
        <div
          className="card-modal"
          onClick={() =>
            setSelectedCard(
              null,
            )
          }
        >
          <img
            src={
              selectedCard
            }
            className="card-modal-image"
          />
        </div>
      )}
    </DashboardLayout>
  )
}

export default Cards