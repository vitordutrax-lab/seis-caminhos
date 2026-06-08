import type {
  MonsterCard,
} from '../../types/card'

export const darknessMonsters:
  MonsterCard[] = [
    // =========================
    // DEMÔNIO PEQUENO
    // =========================

    {
      id: 'servo-do-submundo',

      name:
        'Servo do Submundo',

      slug:
        'servo-do-submundo',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'darkness',

      power: 7,

      level: 7,

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
        'Não concede nível para personagens que possuem nível 8 ou superior.',

      tags: [
        'monster',
        'darkness',
      ],

      image:
        '/cards/monsters/darkness/servo-do-submundo.webp',

      icon:
        '/icons/monsters/darkness/servo-do-submundo-icon.webp',
    },

    // =========================
    // CRIATURA PROFANA
    // =========================

    {
      id: 'criatura-profana',

      name:
        'Criatura Profana',

      slug:
        'criatura-profana',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'darkness',

      power: 10,

      level: 10,

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
        'darkness',
      ],

      image:
        '/cards/monsters/darkness/criatura-profana.webp',

      icon:
        '/icons/monsters/darkness/criatura-profana-icon.webp',
    },

    // =========================
    // CARNIÇAL
    // =========================

    {
      id: 'carnical',

      name:
        'Carniçal',

      slug:
        'carnical',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'darkness',

      power: 15,

      level: 15,

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
        destroyItem: true,

        loseLevels: 2,
      },

      bonusAgainstRaces: [
        'demigod',
      ],

      description:
        'Recebe +2 de poder contra Semideuses.',

      effectText:
        'Descarte um item de ataque que está em jogo ou perca 2 níveis.',

      tags: [
        'monster',
        'darkness',
      ],

      image:
        '/cards/monsters/darkness/carnical.webp',

      icon:
        '/icons/monsters/darkness/carnical-icon.webp',
    },

    // =========================
    // KRAZ
    // =========================

    {
      id: 'kraz',

      name:
        'Kraz',

      slug:
        'kraz',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'darkness',

      power: 20,

      level: 20,

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
        'darkness',
      ],

      image:
        '/cards/monsters/darkness/kraz.webp',

      icon:
        '/icons/monsters/darkness/kraz-icon.webp',
    },

    // =========================
    // KRAZ'THAR
    // =========================

    {
      id: 'kraz-thar',

      name:
        "Kraz'Thar",

      slug:
        'kraz-thar',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'darkness',

      power: 23,

      level: 23,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 3,

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
        'darkness',
      ],

      image:
        '/cards/monsters/darkness/kraz-thar.webp',

      icon:
        '/icons/monsters/darkness/kraz-thar-icon.webp',
    },

    // =========================
    // IMPERADOR DO SUBMUNDO
    // =========================

    {
      id: 'imperador-do-submundo',

      name:
        'Imperador do Submundo',

      slug:
        'imperador-do-submundo',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'darkness',

      power: 29,

      level: 29,

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
        'darkness',
        'late-game',
      ],

      image:
        '/cards/monsters/darkness/imperador-do-submundo.webp',

      icon:
        '/icons/monsters/darkness/imperador-do-submundo-icon.webp',
    },
  ]