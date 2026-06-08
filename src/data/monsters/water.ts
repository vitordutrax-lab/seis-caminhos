import type {
  MonsterCard,
} from '../../types/card'

export const waterMonsters:
  MonsterCard[] = [
    // =========================
    // GOSMA
    // =========================

    {
      id: 'gosma',

      name:
        'Gosma',

      slug:
        'gosma',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'water',

      power: 5,

      level: 5,

      copies: 2,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 1,

        levels: 1,
      },

      escape: {
        dice: 3,
      },

      punishment: {
        loseLevels: 1,
      },

      ignoredByLowLevelPlayers:
        true,

      minimumLevelToFight: 8,

      description:
        'Não concede nível para personagens de nível 8 ou superior.',

      tags: [
        'monster',
        'water',
      ],

      image:
        '/cards/monsters/water/gosma.webp',

      icon:
        '/icons/monsters/water/gosma-icon.webp',
    },

    // =========================
    // LOBO DO MAR
    // =========================

    {
      id: 'lobo-do-mar',

      name:
        'Lobo do Mar',

      slug:
        'lobo-do-mar',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'water',

      power: 9,

      level: 9,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 2,

        levels: 1,
      },

      escape: {
        dice: 4,
      },

      punishment: {
        loseLevels: 1,
      },

      ignoredByLowLevelPlayers:
        true,

      minimumLevelToFight: 10,

      description:
        'Não concede nível para personagens que possuem nível 10 ou superior.',

      tags: [
        'monster',
        'water',
      ],

      image:
        '/cards/monsters/water/lobo-do-mar.webp',

      icon:
        '/icons/monsters/water/lobo-do-mar-icon.webp',
    },

    // =========================
    // PEIXE MUTANTE
    // =========================

    {
      id: 'peixe-mutante',

      name:
        'Peixe Mutante',

      slug:
        'peixe-mutante',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'water',

      power: 16,

      level: 16,

      copies: 2,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 3,

        levels: 1,
      },

      escape: {
        dice: 4,
      },

      punishment: {
        destroyAccessory: true,

        loseLevels: 2,
      },

      bonusAgainstRaces: [
        'dwarf',
      ],

      description:
        'Recebe +2 de poder contra Anões.',

      effectText:
        'Descarte um acessório que está em jogo ou perca 2 níveis.',

      tags: [
        'monster',
        'water',
      ],

      image:
        '/cards/monsters/water/peixe-mutante.webp',

      icon:
        '/icons/monsters/water/peixe-mutante-icon.webp',
    },

    // =========================
    // CONGELADO
    // =========================

    {
      id: 'congelado',

      name:
        'Congelado',

      slug:
        'congelado',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'water',

      power: 19,

      level: 19,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 3,

        levels: 1,
      },

      escape: {
        dice: 5,
      },

      punishment: {
        loseLevels: 2,
      },

      forcedBattle:
        true,

      grantsExtraLevelOnVictory:
        true,

      description:
        'Obrigado a batalhar. Se for derrotado sozinho, concede 1 nível adicional.',

      tags: [
        'monster',
        'water',
      ],

      image:
        '/cards/monsters/water/congelado.webp',

      icon:
        '/icons/monsters/water/congelado-icon.webp',
    },

    // =========================
    // GOLEM DE GELO
    // =========================

    {
      id: 'golem-de-gelo',

      name:
        'Golem de Gelo',

      slug:
        'golem-de-gelo',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'water',

      power: 25,

      level: 25,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 4,

        levels: 2,
      },

      escape: {
        dice: 5,
      },

      punishment: {
        loseLevels: 3,
      },

      forcedBattle:
        true,

      cannotDuplicate:
        true,

      minimumLevelToFight: 4,

      description:
        'Obrigado a batalhar. Personagens de nível 4 ou inferior não são obrigados. Impossível duplicar.',

      tags: [
        'monster',
        'water',
      ],

      image:
        '/cards/monsters/water/golem-de-gelo.webp',

      icon:
        '/icons/monsters/water/golem-de-gelo-icon.webp',
    },

    // =========================
    // SERPENTE DE GELO
    // =========================

    {
      id: 'serpente-de-gelo',

      name:
        'Serpente de Gelo',

      slug:
        'serpente-de-gelo',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'water',

      power: 28,

      level: 28,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 6,

        levels: 2,
      },

      escape: {
        dice: 6,
      },

      punishment: {
        death: true,
      },

      forcedBattle:
        true,

      cannotSummon:
        true,

      minimumLevelToFight: 6,

      description:
        'Obrigado a batalhar. Personagens de nível 6 ou inferior não são obrigados. Impossível invocar.',

      effectText:
        'Derrota resulta em morte.',

      tags: [
        'monster',
        'water',
      ],

      image:
        '/cards/monsters/water/serpente-de-gelo.webp',

      icon:
        '/icons/monsters/water/serpente-de-gelo-icon.webp',
    },
  ]