export type CardType =
  | 'race'
  | 'class'
  | 'monster'
  | 'spell'
  | 'curse'
  | 'accessory'
  | 'rune'
  | 'terrain'
  | 'expedition'
  | 'item'

export type ElementType =
  | 'fire'
  | 'water'
  | 'air'
  | 'earth'
  | 'light'
  | 'darkness'

export type Card = {
  id: string

  name: string
  slug: string

  type: CardType

  subtype?: string

  element?: ElementType[]

  power?: number

  level?: number

  description?: string

  effect?: string

  image: string

  icon?: string
}