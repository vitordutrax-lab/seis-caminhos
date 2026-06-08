import type {
  MonsterCard,
} from '../../types/card'

export const airMonsters:
  MonsterCard[] = [
    // =========================
    // FANTASMA
    // =========================

    {
      id: 'fantasma',

      name:
        'Fantasma',

      slug:
        'fantasma',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'air',

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
        'air',
      ],

      image:
        '/cards/monsters/air/fantasma.webp',

      icon:
        '/icons/monsters/air/fantasma-icon.webp',
    },

    // =========================
    // GOLEM BRANCO
    // =========================

    {
      id: 'golem-branco',

      name:
        'Golem Branco',

      slug:
        'golem-branco',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'air',

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
        'air',
      ],

      image:
        '/cards/monsters/air/golem-branco.webp',

      icon:
        '/icons/monsters/air/golem-branco-icon.webp',
    },

    // =========================
    // DEFENSOR ALADO
    // =========================

    {
      id: 'defensor-alado',

      name:
        'Defensor Alado',

      slug:
        'defensor-alado',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'air',

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
        destroyItem: true,

        loseLevels: 2,
      },

      bonusAgainstRaces: [
        'giant',
      ],

      description:
        'Recebe +2 de poder contra Gigantes.',

      effectText:
        'Descarte um item de ataque que está em jogo ou perca 2 níveis.',

      tags: [
        'monster',
        'air',
      ],

      image:
        '/cards/monsters/air/defensor-alado.webp',

      icon:
        '/icons/monsters/air/defensor-alado-icon.webp',
    },

    // =========================
    // ESPÍRITO DO AR
    // =========================

    {
      id: 'espirito-do-ar',

      name:
        'Espírito do Ar',

      slug:
        'espirito-do-ar',

      type: 'monster',

      sourcePile:
        'monsters',


      monsterFamily:
        'elemental',

      element:
        'air',

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
        'air',
      ],

      image:
        '/cards/monsters/air/espirito-do-ar.webp',

      icon:
        '/icons/monsters/air/espirito-do-ar-icon.webp',
    },

    // =========================
    // GUARDIÃO
    // =========================

    {
      id: 'guardiao',

      name:
        'Guardião',

      slug:
        'guardiao',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'air',

      power: 24,

      level: 24,

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
        'air',
      ],

      image:
        '/cards/monsters/air/guardiao.webp',

      icon:
        '/icons/monsters/air/guardiao-icon.webp',
    },

    // =========================
    // PROTETOR DOS CÉUS
    // =========================

    {
      id: 'protetor-dos-ceus',

      name:
        'Protetor dos Céus',

      slug:
        'protetor-dos-ceus',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'air',

      power: 27,

      level: 27,

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

      cannotSummon:
        true,

      minimumLevelToFight: 6,

      description:
        'Obrigado a batalhar. Personagens de nível 6 ou inferior não são obrigados. Impossível invocar.',

      effectText:
        'Derrota resulta em morte.',

      tags: [
        'monster',
        'air',
        'late-game',
      ],

      image:
        '/cards/monsters/air/protetor-dos-ceus.webp',

      icon:
        '/icons/monsters/air/protetor-dos-ceus-icon.webp',
    },
  ]