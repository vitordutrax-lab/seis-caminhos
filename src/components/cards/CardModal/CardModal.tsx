import {
  useEffect,
} from 'react'

import './CardModal.css'

interface Props {
  image: string | null

  onClose: () => void
}

export function CardModal({
  image,
  onClose,
}: Props) {

  // =========================
  // FECHAR COM ESC
  // =========================

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key === 'Escape'
      ) {
        onClose()
      }
    }

    window.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [onClose])

  if (!image) {
    return null
  }

  return (
    <div
      className="card-modal"
      onClick={onClose}
    >

      <button
        className="card-modal-close"
        onClick={onClose}
      >
        ✕
      </button>

      <img
        src={image}
        className="card-modal-image"
        onClick={(
          event,
        ) =>
          event.stopPropagation()
        }
      />

    </div>
  )
}