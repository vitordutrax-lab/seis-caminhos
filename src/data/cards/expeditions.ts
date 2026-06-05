import type {
  Card,
} from '../../types/card'

export const expeditions: Card[] =
  [
    // =========================
    // MINA ABANDONADA
    // =========================

    {
      id: 'mina-abandonada',

      name:
        'Mina Abandonada',

      slug:
        'mina-abandonada',

      type: 'expedition',

      sourcePile:
        'treasures',

      power: 0,

      copies: 1,

      destroyable: false,

      tradeable: false,

      minimumPlayers: 2,

      maximumPlayers: 3,

      minimumTotalLevel: 15,

      expeditionMonsters: 3,

      rewards: {
        chests: 11,

        levels: 5,
      },

      punishment: {
        loseLevels: 3,
      },

      description:
        'Os participantes ficam fora do jogo até o turno retornar ao líder da expedição.',

      effectText:
        'Ignora recompensas, punições e fugas dos monstros.',

      effects: [
        {
          type:
            'lock_players',

          target:
            'players',

          duration:
            'until_next_turn',
        },

        {
          type:
            'gain_levels',

          amount: 5,

          target:
            'players',

          duration:
            'instant',
        },

        {
          type:
            'draw_cards',

          amount: 11,

          target:
            'players',

          duration:
            'instant',
        },

        {
          type:
            'lose_levels',

          amount: 3,

          target:
            'players',

          duration:
            'instant',
        },
      ],

      tags: [
        'expedition',
        'cooperative',
      ],

      image:
        '/cards/expeditions/mina-abandonada.webp',

      icon:
        '/icons/expeditions/mina-abandonada-icon.webp',
    },

    // =========================
    // TEMPLO PERDIDO
    // =========================

    {
      id: 'templo-perdido',

      name:
        'Templo Perdido',

      slug:
        'templo-perdido',

      type: 'expedition',

      sourcePile:
        'treasures',

      power: 0,

      copies: 1,

      destroyable: false,

      tradeable: false,

      minimumPlayers: 2,

      maximumPlayers: 4,

      minimumTotalLevel: 20,

      expeditionMonsters: 4,

      rewards: {
        chests: 16,

        levels: 7,
      },

      punishment: {
        loseLevels: 4,

        discardCards: 2,
      },

      description:
        'Os participantes ficam fora do jogo até o turno retornar ao líder da expedição.',

      effectText:
        'Ignora recompensas, punições e fugas dos monstros.',

      effects: [
        {
          type:
            'lock_players',

          target:
            'players',

          duration:
            'until_next_turn',
        },

        {
          type:
            'gain_levels',

          amount: 7,

          target:
            'players',

          duration:
            'instant',
        },

        {
          type:
            'draw_cards',

          amount: 16,

          target:
            'players',

          duration:
            'instant',
        },

        {
          type:
            'lose_levels',

          amount: 4,

          target:
            'players',

          duration:
            'instant',
        },

        {
          type:
            'discard_cards',

          amount: 2,

          target:
            'players',

          duration:
            'instant',
        },
      ],

      tags: [
        'expedition',
        'cooperative',
      ],

      image:
        '/cards/expeditions/templo-perdido.webp',

      icon:
        '/icons/expeditions/templo-perdido-icon.webp',
    },

    // =========================
    // COVIL DO DRAGÃO
    // =========================

    {
      id: 'covil-do-dragao',

      name:
        'Covil do Dragão',

      slug:
        'covil-do-dragao',

      type: 'expedition',

      sourcePile:
        'treasures',

      power: 0,

      copies: 1,

      destroyable: false,

      tradeable: false,

      minimumPlayers: 3,

      maximumPlayers: 4,

      minimumTotalLevel: 25,

      expeditionMonsters: 5,

      rewards: {
        chests: 21,

        levels: 9,
      },

      punishment: {
        loseLevels: 5,

        discardEntireHand: true,
      },

      description:
        'Os participantes ficam fora do jogo até o turno retornar ao líder da expedição.',

      effectText:
        'Ignora recompensas, punições e fugas dos monstros.',

      effects: [
        {
          type:
            'lock_players',

          target:
            'players',

          duration:
            'until_next_turn',
        },

        {
          type:
            'gain_levels',

          amount: 9,

          target:
            'players',

          duration:
            'instant',
        },

        {
          type:
            'draw_cards',

          amount: 21,

          target:
            'players',

          duration:
            'instant',
        },

        {
          type:
            'lose_levels',

          amount: 5,

          target:
            'players',

          duration:
            'instant',
        },

        {
          type:
            'discard_all_hand_cards',

          target:
            'players',

          duration:
            'instant',
        },
      ],

      tags: [
        'expedition',
        'cooperative',
        'hard',
      ],

      image:
        '/cards/expeditions/covil-do-dragao.webp',

      icon:
        '/icons/expeditions/covil-do-dragao-icon.webp',
    },
  ]