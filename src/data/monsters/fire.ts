import type {
  MonsterCard,
} from '../../types/card'

export const fireMonsters:
  MonsterCard[] = [
    // =========================
    // VERME VULCÂNICO
    // =========================

    {
      id: 'verme-vulcanico',

      name:
        'Verme Vulcânico',

      slug:
        'verme-vulcanico',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'fire',

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
        'Não concede nível para personagens que possuem nível 8 ou superior.',

      tags: [
        'monster',
        'fire',
      ],

      image:
        '/cards/monsters/fire/verme-vulcanico.webp',

      icon:
        '/icons/monsters/fire/verme-vulcanico-icon.webp',
    },

    // =========================
    // GUERREIRO EM CHAMAS
    // =========================

    {
      id: 'guerreiro-em-chamas',

      name:
        'Guerreiro em Chamas',

      slug:
        'guerreiro-em-chamas',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'fire',

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
        'fire',
      ],

      image:
        '/cards/monsters/fire/guerreiro-em-chamas.webp',

      icon:
        '/icons/monsters/fire/guerreiro-em-chamas-icon.webp',
    },

    // =========================
    // ARQUEIRO DO FOGO
    // =========================

    {
      id: 'arqueiro-do-fogo',

      name:
        'Arqueiro do Fogo',

      slug:
        'arqueiro-do-fogo',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'fire',

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
        destroyItem: true,

        loseLevels: 2,
      },

      bonusAgainstRaces: [
        'elf',
      ],

      description:
        'Recebe +2 de poder contra Elfos.',

      effectText:
        'Descarte um item de defesa que está em jogo ou perca 2 níveis.',

      tags: [
        'monster',
        'fire',
      ],

      image:
        '/cards/monsters/fire/arqueiro-do-fogo.webp',

      icon:
        '/icons/monsters/fire/arqueiro-do-fogo-icon.webp',
    },

    // =========================
    // GOLEM INFERNAL
    // =========================

    {
      id: 'golem-infernal',

      name:
        'Golem Infernal',

      slug:
        'golem-infernal',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'fire',

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
        'fire',
      ],

      image:
        '/cards/monsters/fire/golem-infernal.webp',

      icon:
        '/icons/monsters/fire/golem-infernal-icon.webp',
    },

    // =========================
    // ABERRAÇÃO EM CHAMAS
    // =========================

    {
      id: 'aberracao-em-chamas',

      name:
        'Aberração em Chamas',

      slug:
        'aberracao-em-chamas',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'fire',

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

      cannotSummon:
        true,

      minimumLevelToFight: 4,

      description:
        'Obrigado a batalhar. Personagens de nível 4 ou inferior não são obrigados. Impossível invocar.',

      tags: [
        'monster',
        'fire',
      ],

      image:
        '/cards/monsters/fire/aberracao-em-chamas.webp',

      icon:
        '/icons/monsters/fire/aberracao-em-chamas-icon.webp',
    },

    // =========================
    // IMPERATRIZ DO FOGO
    // =========================

    {
      id: 'imperatriz-do-fogo',

      name:
        'Imperatriz do Fogo',

      slug:
        'imperatriz-do-fogo',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'fire',

      power: 28,

      level: 28,

      copies: 1,

      destroyable: true,

      tradeable: false,

      rewards: {
        chests: 5,

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
        'fire',
      ],

      image:
        '/cards/monsters/fire/imperatriz-do-fogo.webp',

      icon:
        '/icons/monsters/fire/imperatriz-do-fogo-icon.webp',
    },
  ]