export function generateRoomCode() {
  const characters =
    'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

  let code = ''

  for (let i = 0; i < 6; i++) {
    code +=
      characters[
        Math.floor(
          Math.random() *
            characters.length,
        )
      ]
  }

  return code
}