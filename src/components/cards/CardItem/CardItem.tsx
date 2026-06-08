import {
  memo,
  useState,
} from 'react'

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

function CardItemComponent({
  card,
  onClick,
}: Props) {

  const [
    transform,
    setTransform,
  ] = useState('')

  const handleMouseMove = (
    event: React.MouseEvent<
      HTMLDivElement
    >,
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect()

    const x =
      event.clientX -
      rect.left

    const y =
      event.clientY -
      rect.top

    const rotateY =
      (
        (
          x /
          rect.width
        ) -
        0.5
      ) * 10

    const rotateX =
      (
        (
          y /
          rect.height
        ) -
        0.5
      ) * -10

    setTransform(`
      perspective(900px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
      scale(1.04)
    `)
  }

  const resetTransform =
    () => {
      setTransform('')
    }

  return (
    <div
      className="card-item"

      style={{
        transform,
      }}

      onMouseMove={
        handleMouseMove
      }

      onMouseLeave={
        resetTransform
      }

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

        loading="lazy"

        decoding="async"

        draggable={false}
      />
    </div>
  )
}

export const CardItem =
  memo(
    CardItemComponent,
  )