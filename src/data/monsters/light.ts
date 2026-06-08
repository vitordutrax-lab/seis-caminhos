import type {
  MonsterCard,
} from '../../types/card'

export const lightMonsters:
  MonsterCard[] = [
    // =========================
    // LOBO ILUMINADO
    // =========================

    {
      id: 'lobo-iluminado',

      name:
        'Lobo Iluminado',

      slug:
        'lobo-iluminado',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'light',

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
        'light',
      ],

      image:
        '/cards/monsters/light/lobo-iluminado.webp',

      icon:
        '/icons/monsters/light/lobo-iluminado-icon.webp',
    },

    // =========================
    // COLOSSO
    // =========================

    {
      id: 'colosso',

      name:
        'Colosso',

      slug:
        'colosso',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'light',

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
        'light',
      ],

      image:
        '/cards/monsters/light/colosso.webp',

      icon:
        '/icons/monsters/light/colosso-icon.webp',
    },

    // =========================
    // GUARDIÃO DO TEMPLO
    // =========================

    {
      id: 'guardiao-do-templo',

      name:
        'Guardião do Templo',

      slug:
        'guardiao-do-templo',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'light',

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
        'half-demon',
      ],

      description:
        'Recebe +2 de poder contra Meio-demônios.',

      effectText:
        'Descarte um item de defesa que está em jogo ou perca 2 níveis.',

      tags: [
        'monster',
        'light',
      ],

      image:
        '/cards/monsters/light/guardiao-do-templo.webp',

      icon:
        '/icons/monsters/light/guardiao-do-templo-icon.webp',
    },

    // =========================
    // ARQUEIRO DO SOL
    // =========================

    {
      id: 'arqueiro-do-sol',

      name:
        'Arqueiro do Sol',

      slug:
        'arqueiro-do-sol',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'light',

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
        'light',
      ],

      image:
        '/cards/monsters/light/arqueiro-do-sol.webp',

      icon:
        '/icons/monsters/light/arqueiro-do-sol-icon.webp',
    },

    // =========================
    // ARAUTO DA LUZ
    // =========================

    {
      id: 'arauto-da-luz',

      name:
        'Arauto da Luz',

      slug:
        'arauto-da-luz',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'light',

      power: 23,

      level: 23,

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
        'light',
      ],

      image:
        '/cards/monsters/light/arauto-da-luz.webp',

      icon:
        '/icons/monsters/light/arauto-da-luz-icon.webp',
    },

    // =========================
    // EXECUTOR RADIANTE
    // =========================

    {
      id: 'executor-radiante',

      name:
        'Executor Radiante',

      slug:
        'executor-radiante',

      type: 'monster',

      sourcePile:
        'monsters',

      monsterFamily:
        'elemental',

      element:
        'light',

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

      cannotDuplicate:
        true,

      minimumLevelToFight: 6,

      description:
        'Obrigado a batalhar. Personagens de nível 6 ou inferior não são obrigados. Impossível duplicar.',

      effectText:
        'Derrota resulta em morte.',

      tags: [
        'monster',
        'light',
      ],

      image:
        '/cards/monsters/light/executor-radiante.webp',

      icon:
        '/icons/monsters/light/executor-radiante-icon.webp',
    },
  ]