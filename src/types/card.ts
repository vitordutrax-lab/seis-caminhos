export type CardType =
  | 'race'
  | 'class'
  | 'item'
  | 'accessory'
  | 'curse'
  | 'spell'
  | 'rune'
  | 'monster'
  | 'terrain'
  | 'expedition'
  | 'blacksmith'

export type ElementType =
  | 'fire'
  | 'water'
  | 'earth'
  | 'air'
  | 'light'
  | 'darkness'

export type ItemSubtype =
  | 'attack'
  | 'defense'

export type ItemCategory =
  | 'bow'
  | 'sword'
  | 'axe'
  | 'scythe'
  | 'dagger'
  | 'club'
  | 'crossbow'
  | 'armor'
  | 'helmet'
  | 'shield'
  | 'boots'
  | 'gloves'

export type ItemSlot =
  | 'weapon'
  | 'body'
  | 'head'
  | 'shield'
  | 'hands'
  | 'feet'
  | 'accessory'

export interface MonsterRewards {
  levels: number

  chests: number
}

export interface MonsterEscape {
  dice: number
}

export interface Card {
  id: string

  name: string

  slug: string

  type: CardType

  subtype?: ItemSubtype

  category?: ItemCategory

  slot?: ItemSlot

  element?: ElementType

  elements?: ElementType[]

  power: number

  level?: number

  requiredLevel?: number

  hands?: 1 | 2

  copies: number

  passive?: string

  active?: string

  description?: string

  restriction?: string

  punishment?: string

  rewards?: MonsterRewards

  escape?: MonsterEscape

  image: string

  icon?: string

  art?: string

  tags?: string[]
}