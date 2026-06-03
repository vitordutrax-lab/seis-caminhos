import { races } from './races'

import { classes } from './classes'

import { attackItems } from './attackItems'

import { defenseItems } from './defenseItems'

import { accessories } from './accessories'

import { curses } from './curses'

import { spells } from './spells'

import { runes } from './runes'

import { terrains } from './terrains'

import { expeditions } from './expeditions'

import { monsters } from './monsters'

export const cards = [
  // =========================
  // RAÇAS
  // =========================

  ...races,

  // =========================
  // CLASSES
  // =========================

  ...classes,

  // =========================
  // ITENS DE ATAQUE
  // =========================

  ...attackItems,

  // =========================
  // ITENS DE DEFESA
  // =========================

  ...defenseItems,

  // =========================
  // ACESSÓRIOS
  // =========================

  ...accessories,

  // =========================
  // MALDIÇÕES
  // =========================

  ...curses,

  // =========================
  // MAGIAS
  // =========================

  ...spells,

  // =========================
  // RUNAS / FORJADOR
  // =========================

  ...runes,

  // =========================
  // TERRENOS
  // =========================

  ...terrains,

  // =========================
  // EXPEDIÇÕES
  // =========================

  ...expeditions,

  // =========================
  // MONSTROS
  // =========================

  ...monsters,
]