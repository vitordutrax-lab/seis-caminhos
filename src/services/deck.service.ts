export function shuffleDeck(
  deck: string[],
) {
  const shuffled =
    [...deck]

  for (
    let i =
      shuffled.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() *
          (i + 1),
      )

    ;[
      shuffled[i],
      shuffled[j],
    ] = [
      shuffled[j],
      shuffled[i],
    ]
  }

  return shuffled
}
export function createDeck<
  T extends {
    id: string

    copies: number
  },
>(
  cards: T[],
) {
  return shuffleDeck(
    cards.flatMap(
      card =>
        Array(
          card.copies,
        ).fill(
          card.id,
        ),
    ),
  )
}