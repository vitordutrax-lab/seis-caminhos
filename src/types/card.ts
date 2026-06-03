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

export type SourcePile =
  | 'treasures'
  | 'monsters'
  | 'terrains'

export type ElementType =
  | 'fire'
  | 'water'
  | 'earth'
  | 'air'
  | 'light'
  | 'darkness'
  | 'neutral'

export type MonsterCategory =
  | 'elemental'
  | 'hybrid'
  | 'neutral'
  | 'boss'

export type SpellCategory =
  | 'buff'
  | 'control'
  | 'counter'
  | 'progression'
  | 'summon'
  | 'utility'

export type ItemSubtype =
  | 'attack'
  | 'defense'

export type ItemCategory =
  // =========================
  // ATTACK ITEMS
  // =========================

  | 'bow'
  | 'sword'
  | 'axe'
  | 'scythe'
  | 'dagger'
  | 'club'
  | 'crossbow'

  // =========================
  // DEFENSE ITEMS
  // =========================

  | 'armor'
  | 'helmet'
  | 'shield'
  | 'boots'
  | 'gloves'

  // =========================
  // SPELLS
  // =========================

  | SpellCategory

export type ItemSlot =
  | 'weapon'
  | 'body'
  | 'head'
  | 'shield'
  | 'hands'
  | 'feet'
  | 'accessory'

export type TargetType =
  | 'self'
  | 'player'
  | 'monster'
  | 'item'
  | 'battle'
  | 'global'

export type DurationType =
  | 'instant'
  | 'battle'
  | 'turn'
  | 'permanent'

export type EffectType =
  // =========================
  // POWER
  // =========================

  | 'gain_power'
  | 'lose_power'
  | 'temporary_power'
  | 'temporary_power_reduction'

  // =========================
  // SPELLS
  // =========================

  | 'counter_spell'
  | 'destroy_card'

  // =========================
  // MONSTERS
  // =========================

  | 'duplicate_monster'
  | 'summon_monster'
  | 'revive_last_monster'
  | 'remove_monster'

  // =========================
  // PLAYERS
  // =========================

  | 'force_help'
  | 'teleport_player'
  | 'swap_player'

  // =========================
  // DICE
  // =========================

  | 'reroll_dice'
  | 'double_dice'

  // =========================
  // LEVELS
  // =========================

  | 'gain_levels'
  | 'lose_levels'
  | 'steal_levels'

  // =========================
  // CARDS
  // =========================

  | 'draw_cards'
  | 'discard_cards'

  // =========================
  // RULES
  // =========================

  | 'increase_hand_limit'
  | 'allow_extra_class'
  | 'ignore_item_restrictions'

  // =========================
// BATTLE CONTROL
// =========================

| 'remove_player_from_battle'
| 'force_escape'
| 'force_help_player'
| 'swap_battle_player'
| 'remove_monster_from_battle'

// =========================
// STATUS
// =========================

| 'disable_spells'
| 'disable_item'
| 'disable_accessory'

// =========================
// RULE BREAKING
// =========================

| 'increase_hand_limit'
| 'ignore_item_restrictions'
| 'allow_extra_class'

export type RuleModifierType =
  | 'increase_hand_limit'
  | 'allow_extra_class'
  | 'ignore_item_restrictions'
  | 'allow_extra_race'
  | 'allow_extra_accessory'
  | 'allow_extra_equipment_slot'

export type PunishmentType =
  | 'death'
  | 'lose-levels'
  | 'discard-cards'
  | 'discard-items'
  | 'discard-hand'
  | 'lose-class'
  | 'lose-race'
  | 'lose-accessory'
  | 'lose-all-items'
  | 'other'

export interface CardEffect {
  type: EffectType

  target?: TargetType

  amount?: number

  duration?: DurationType

  description?: string
}

export interface RuleModifier {
  type: RuleModifierType

  amount?: number

  description?: string
}

export interface MonsterRewards {
  levels: number

  chests: number
}

export interface MonsterEscape {
  dice: number
}

export interface MonsterPunishment {
  type: PunishmentType

  levels?: number

  cards?: number

  description: string
}

export interface ExpeditionConfig {
  minPlayers: number

  maxPlayers: number

  requiredLevel: number

  monsters: number

  rewards: MonsterRewards

  punishment: MonsterPunishment
}

export interface Card {
  // =========================
  // IDENTIDADE
  // =========================

  id: string

  name: string

  slug: string

  type: CardType

  // =========================
  // ORGANIZAÇÃO
  // =========================

  sourcePile: SourcePile

  subtype?: ItemSubtype

  category?:
    | ItemCategory
    | MonsterCategory

  tags?: string[]

  // =========================
  // ELEMENTOS
  // =========================

  element?: ElementType

  elements?: ElementType[]

  // =========================
  // EQUIPAMENTO
  // =========================

  slot?: ItemSlot

  hands?: 1 | 2

  bonusClasses?: string[]

  bonusRaces?: string[]

  restrictedClasses?: string[]

  restrictedRaces?: string[]

  // =========================
  // PROGRESSÃO
  // =========================

  power: number

  level?: number

  requiredLevel?: number

  copies: number

  // =========================
  // COMPORTAMENTO
  // =========================

  stackable?: boolean

  destroyable?: boolean

  tradeable?: boolean

  targetType?: TargetType

  duration?: DurationType

  // =========================
  // TEXTO / LORE
  // =========================

passive?: string

active?: string

description?: string

effectText?: string

restriction?: string

lore?: string

  // =========================
  // ENGINE
  // =========================

  effects?: CardEffect[]

  ruleModifiers?: RuleModifier[]

  // =========================
  // MONSTROS
  // =========================

  rewards?: MonsterRewards

  escape?: MonsterEscape

  punishment?: MonsterPunishment

  // =========================
  // EXPEDIÇÕES
  // =========================

  expedition?: ExpeditionConfig

  ignoreMonsterRewards?: boolean

  ignoreMonsterEscape?: boolean

  ignoreMonsterPunishment?: boolean

  removesPlayerFromGame?: boolean

  // =========================
  // VISUAL
  // =========================

  image: string

  icon?: string

  art?: string
}