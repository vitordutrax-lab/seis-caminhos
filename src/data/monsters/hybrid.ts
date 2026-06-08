import type {
  MonsterCard,
} from '../../types/card'

export const hybridMonsters:
  MonsterCard[] = [
    // =========================
    // ANJO CORROMPIDO
    // =========================

    {
      id: 'anjo-corrompido',

      name:
        'Anjo Corrompido',

      slug:
        'anjo-corrompido',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'hybrid',

      elements: [
        'darkness',
        'light',
      ],

      power: 31,

      level: 31,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 6,

        levels: 3,
      },

      escape: {
        dice: 6,
      },

      punishment: {
        death: true,
      },

      forcedBattle:
        true,

      cannotDuplicate:
        true,

      minimumLevelToFight: 6,

      description:
        'Obrigado a batalhar. Personagens de nível 6 ou inferior não são obrigados. Impossível duplicar.',

      effectText:
        'Derrota resulta em morte.',

      tags: [
        'monster',
        'hybrid',
        'darkness',
        'light',
        'late-game',
      ],

      image:
        '/cards/monsters/hybrid/anjo-corrompido.webp',

      icon:
        '/icons/monsters/hybrid/anjo-corrompido-icon.webp',
    },

    // =========================
    // DRAGÃO PRIMORDIAL
    // =========================

    {
      id: 'dragao-primordial',

      name:
        'Dragão Primordial',

      slug:
        'dragao-primordial',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'hybrid',

      elements: [
        'air',
        'water',
      ],

      power: 32,

      level: 32,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 7,

        levels: 3,
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
        'hybrid',
        'air',
        'water',
        'late-game',
      ],

      image:
        '/cards/monsters/hybrid/dragao-primordial.webp',

      icon:
        '/icons/monsters/hybrid/dragao-primordial-icon.webp',
    },

    // =========================
    // DEUS DA GUERRA
    // =========================

    {
      id: 'deus-da-guerra',

      name:
        'Deus da Guerra',

      slug:
        'deus-da-guerra',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'hybrid',

      elements: [
        'fire',
        'earth',
      ],

      power: 33,

      level: 33,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 8,

        levels: 3,
      },

      escape: {
        dice: 6,
      },

      punishment: {
        death: true,
      },

      forcedBattle:
        true,

      cannotDuplicate:
        true,

      minimumLevelToFight: 6,

      description:
        'Obrigado a batalhar. Personagens de nível 6 ou inferior não são obrigados. Impossível duplicar.',

      effectText:
        'Derrota resulta em morte.',

      tags: [
        'monster',
        'hybrid',
        'fire',
        'earth',
        'late-game',
      ],

      image:
        '/cards/monsters/hybrid/deus-da-guerra.webp',

      icon:
        '/icons/monsters/hybrid/deus-da-guerra-icon.webp',
    },
  ]