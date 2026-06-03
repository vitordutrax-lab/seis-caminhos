import type {
  Card,
} from '../../types/card'

export const classes: Card[] =
  [
    // =========================
    // BARDO
    // =========================

    {
      id: 'bardo',

      name: 'Bardo',

      slug: 'bardo',

      type: 'class',

      sourcePile:
        'treasures',

      power: 1,

      copies: 2,

      destroyable: true,

      tradeable: true,

      passive:
        'Recebe +1 de poder.',

      active:
        'Canção da Vitória: recebe 1 baú adicional em todas as vitórias em batalhas que participar.',

      effectText:
        'Recebe 1 baú adicional ao vencer batalhas.',

      effects: [
        {
          type:
            'gain_power',

          amount: 1,

          target:
            'self',

          duration:
            'permanent',

          description:
            'Recebe +1 de poder.',
        },
      ],

      tags: [
        'class',
        'bard',
        'chests',
      ],

      image:
        '/cards/classes/bardo.webp',

      icon:
        '/icons/classes/bardo-icon.webp',
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

      type: 'class',

      sourcePile:
        'treasures',

      power: 1,

      copies: 2,

      destroyable: true,

      tradeable: true,

      passive:
        'Recebe +1 de poder.',

      active:
        'Proteção Valiosa: recebe 1 nível ao ajudar em batalhas vencidas.',

      effectText:
        'Recebe 1 nível ao ajudar em batalhas vencidas.',

      effects: [
        {
          type:
            'gain_power',

          amount: 1,

          target:
            'self',

          duration:
            'permanent',

          description:
            'Recebe +1 de poder.',
        },

        {
          type:
            'gain_levels',

          amount: 1,

          target:
            'self',

          duration:
            'instant',

          description:
            'Recebe 1 nível ao ajudar em batalhas vencidas.',
        },
      ],

      tags: [
        'class',
        'guardian',
        'levels',
      ],

      image:
        '/cards/classes/guardiao.webp',

      icon:
        '/icons/classes/guardiao-icon.webp',
    },

    // =========================
    // GUERREIRO
    // =========================

    {
      id: 'guerreiro',

      name:
        'Guerreiro',

      slug:
        'guerreiro',

      type: 'class',

      sourcePile:
        'treasures',

      power: 2,

      copies: 2,

      destroyable: true,

      tradeable: true,

      stackable: true,

      passive:
        'Recebe +2 de poder base.',

      active:
        'Fúria: recebe +1 de poder para cada monstro derrotado, acumulando até +6. Ao fugir ou perder uma batalha, perde todos os acúmulos.',

      effectText:
        'Acumula +1 de poder por monstro derrotado até +6.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',

          description:
            'Recebe +2 de poder base.',
        },
      ],

      tags: [
        'class',
        'warrior',
        'stack',
        'power',
      ],

      image:
        '/cards/classes/guerreiro.webp',

      icon:
        '/icons/classes/guerreiro-icon.webp',
    },

    // =========================
    // LADINO
    // =========================

    {
      id: 'ladino',

      name:
        'Ladino',

      slug:
        'ladino',

      type: 'class',

      sourcePile:
        'treasures',

      power: 1,

      copies: 2,

      destroyable: true,

      tradeable: true,

      passive:
        'Recebe +1 de poder.',

      active:
        'Mãos Ligeiras: no turno pode descartar uma carta e rolar o dado; com 4+ pode roubar um item ou acessório em jogo uma vez por turno.',

      effectText:
        'Pode roubar um item ou acessório em jogo.',

      effects: [
        {
          type:
            'gain_power',

          amount: 1,

          target:
            'self',

          duration:
            'permanent',

          description:
            'Recebe +1 de poder.',
        },
      ],

      tags: [
        'class',
        'rogue',
        'steal',
        'dice',
      ],

      image:
        '/cards/classes/ladino.webp',

      icon:
        '/icons/classes/ladino-icon.webp',
    },

    // =========================
    // MAGO
    // =========================

    {
      id: 'mago',

      name: 'Mago',

      slug: 'mago',

      type: 'class',

      sourcePile:
        'treasures',

      power: 1,

      copies: 2,

      destroyable: true,

      tradeable: true,

      passive:
        'Recebe +1 de poder.',

      active:
        'Ruptura Arcana: no turno pode descartar uma carta e rolar o dado; com 4+ pode destruir um acessório, maldição ou runa uma vez por turno.',

      effectText:
        'Pode destruir acessórios, maldições ou runas.',

      effects: [
        {
          type:
            'gain_power',

          amount: 1,

          target:
            'self',

          duration:
            'permanent',

          description:
            'Recebe +1 de poder.',
        },

        {
          type:
            'destroy_card',

          target:
            'item',

          duration:
            'instant',

          description:
            'Pode destruir acessórios, maldições ou runas.',
        },
      ],

      tags: [
        'class',
        'mage',
        'destroy',
        'magic',
      ],

      image:
        '/cards/classes/mago.webp',

      icon:
        '/icons/classes/mago-icon.webp',
    },

    // =========================
    // VIDENTE
    // =========================

    {
      id: 'vidente',

      name:
        'Vidente',

      slug:
        'vidente',

      type: 'class',

      sourcePile:
        'treasures',

      power: 1,

      copies: 2,

      destroyable: true,

      tradeable: true,

      stackable: true,

      passive:
        'Recebe +1 de poder.',

      active:
        'Profecia: durante batalhas que estiver participando, recebe +1 de poder para cada magia utilizada até o final da batalha, acumulando até +6.',

      effectText:
        'Recebe +1 de poder para cada magia utilizada na batalha.',

      effects: [
        {
          type:
            'gain_power',

          amount: 1,

          target:
            'self',

          duration:
            'permanent',

          description:
            'Recebe +1 de poder.',
        },
      ],

      tags: [
        'class',
        'oracle',
        'magic',
        'stack',
      ],

      image:
        '/cards/classes/vidente.webp',

      icon:
        '/icons/classes/vidente-icon.webp',
    },
  ]