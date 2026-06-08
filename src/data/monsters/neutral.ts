import type {
  MonsterCard,
} from '../../types/card'

export const neutralMonsters:
  MonsterCard[] = [
    // =========================
    // DUENDE
    // =========================

    {
      id: 'duende',

      name:
        'Duende',

      slug:
        'duende',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'neutral',

      power: 2,

      level: 2,

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

      minimumLevelToFight: 6,

      description:
        'Não concede nível para personagens que possuem nível 6 ou superior.',

      tags: [
        'monster',
        'neutral',
      ],

      image:
        '/cards/monsters/neutral/duende.webp',

      icon:
        '/icons/monsters/neutral/duende-icon.webp',
    },

    // =========================
    // OGRO PEQUENO
    // =========================

    {
      id: 'ogro-pequeno',

      name:
        'Ogro Pequeno',

      slug:
        'ogro-pequeno',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'neutral',

      power: 3,

      level: 3,

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

      minimumLevelToFight: 6,

      description:
        'Não concede nível para personagens que possuem nível 6 ou superior.',

      tags: [
        'monster',
        'neutral',
      ],

      image:
        '/cards/monsters/neutral/ogro-pequeno.webp',

      icon:
        '/icons/monsters/neutral/ogro-pequeno-icon.webp',
    },

    // =========================
    // ESQUELETO
    // =========================

    {
      id: 'esqueleto',

      name:
        'Esqueleto',

      slug:
        'esqueleto',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'neutral',

      power: 4,

      level: 4,

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

      minimumLevelToFight: 6,

      description:
        'Não concede nível para personagens que possuem nível 6 ou superior.',

      tags: [
        'monster',
        'neutral',
      ],

      image:
        '/cards/monsters/neutral/esqueleto.webp',

      icon:
        '/icons/monsters/neutral/esqueleto-icon.webp',
    },

    // =========================
    // CICLOPE
    // =========================

    {
      id: 'ciclope',

      name:
        'Ciclope',

      slug:
        'ciclope',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'neutral',

      power: 11,

      level: 11,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 2,

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

      description:
        'Obrigado a batalhar.',

      tags: [
        'monster',
        'neutral',
      ],

      image:
        '/cards/monsters/neutral/ciclope.webp',

      icon:
        '/icons/monsters/neutral/ciclope-icon.webp',
    },

    // =========================
    // TITÃ
    // =========================

    {
      id: 'aberracao',

      name:
        'Aberração',

      slug:
        'aberracao',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'neutral',

      power: 12,

      level: 12,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 2,

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

      description:
        'Obrigado a batalhar.',

      tags: [
        'monster',
        'neutral',
      ],

      image:
        '/cards/monsters/neutral/aberracao.webp',

      icon:
        '/icons/monsters/neutral/aberracao-icon.webp',
    },

    // =========================
    // ESQUELETO ARQUEIRO
    // =========================

    {
      id: 'esqueleto-arqueiro',

      name:
        'Esqueleto Arqueiro',

      slug:
        'esqueleto-arqueiro',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'neutral',

      power: 13,

      level: 13,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 2,

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

      description:
        'Obrigado a batalhar.',

      tags: [
        'monster',
        'neutral',
      ],

      image:
        '/cards/monsters/neutral/esqueleto-arqueiro.webp',

      icon:
        '/icons/monsters/neutral/esqueleto-arqueiro-icon.webp',
    },
  ]