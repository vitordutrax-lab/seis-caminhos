import './CardModal.css'

interface Props {
  image: string | null

  onClose: () => void
}

export function CardModal({
  image,
  onClose,
}: Props) {
  if (!image) {
    return null
  }

  return (
    <div
      className="card-modal"
      onClick={onClose}
    >
      <img
        src={image}
        className="card-modal-image"
      />
    </div>
  )
}