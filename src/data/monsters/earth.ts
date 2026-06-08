import type {
  MonsterCard,
} from '../../types/card'

export const earthMonsters:
  MonsterCard[] = [
    // =========================
    // COGUMELO VENENOSO
    // =========================

    {
      id: 'cogumelo-venenoso',

      name:
        'Cogumelo Venenoso',

      slug:
        'cogumelo-venenoso',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'earth',

      power: 6,

      level: 6,

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
        'earth',
      ],

      image:
        '/cards/monsters/earth/cogumelo-venenoso.webp',

      icon:
        '/icons/monsters/earth/cogumelo-venenoso-icon.webp',
    },

    // =========================
    // OGRO
    // =========================

    {
      id: 'ogro',

      name:
        'Ogro',

      slug:
        'ogro',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'earth',

      power: 8,

      level: 8,

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
        'earth',
      ],

      image:
        '/cards/monsters/earth/ogro.webp',

      icon:
        '/icons/monsters/earth/ogro-icon.webp',
    },

    // =========================
    // GOLEM DA FLORESTA
    // =========================

    {
      id: 'golem-da-floresta',

      name:
        'Golem da Floresta',

      slug:
        'golem-da-floresta',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'earth',

      power: 17,

      level: 17,

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
        'human',
      ],

      description:
        'Recebe +2 de poder contra Humanos.',

      effectText:
        'Descarte um acessório que está em jogo ou perca 2 níveis.',

      tags: [
        'monster',
        'earth',
      ],

      image:
        '/cards/monsters/earth/golem-da-floresta.webp',

      icon:
        '/icons/monsters/earth/golem-da-floresta-icon.webp',
    },

    // =========================
    // OGRO VIOLENTO
    // =========================

    {
      id: 'ogro-violento',

      name:
        'Ogro Violento',

      slug:
        'ogro-violento',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'earth',

      power: 21,

      level: 21,

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
        'earth',
      ],

      image:
        '/cards/monsters/earth/ogro-violento.webp',

      icon:
        '/icons/monsters/earth/ogro-violento-icon.webp',
    },

    // =========================
    // OGRO LÍDER
    // =========================

    {
      id: 'ogro-lider',

      name:
        'Ogro Líder',

      slug:
        'ogro-lider',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'earth',

      power: 24,

      level: 24,

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

      cannotSummon:
        true,

      minimumLevelToFight: 4,

      description:
        'Obrigado a batalhar. Personagens de nível 4 ou inferior não são obrigados. Impossível invocar.',

      tags: [
        'monster',
        'earth',
      ],

      image:
        '/cards/monsters/earth/ogro-lider.webp',

      icon:
        '/icons/monsters/earth/ogro-lider-icon.webp',
    },

    // =========================
    // ÁRVORE ANCIÃ
    // =========================

    {
      id: 'arvore-ancia',

      name:
        'Árvore Anciã',

      slug:
        'arvore-ancia',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'earth',

      power: 27,

      level: 27,

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

      cannotDuplicate:
        true,

      minimumLevelToFight: 6,

      description:
        'Obrigado a batalhar. Personagens de nível 6 ou inferior não são obrigados. Impossível duplicar.',

      effectText:
        'Derrota resulta em morte.',

      tags: [
        'monster',
        'earth',
      ],

      image:
        '/cards/monsters/earth/arvore-ancia.webp',

      icon:
        '/icons/monsters/earth/arvore-ancia-icon.webp',
    },
  ]