import type {
  Card,
} from '../../types/card'

export const races: Card[] =
  [
    // =========================
    // ANÃO
    // =========================

    {
      id: 'anao',

      name: 'Anão',

      slug: 'anao',

      type: 'race',

      sourcePile:
        'treasures',

      elements: ['fire'],

      power: 0,

      copies: 2,

      destroyable: false,

      tradeable: true,

      passive:
        'Rei da Forja: concede +1 de poder às runas equipadas.',

      active:
        'Durante batalhas pode descartar uma carta da mão para rolar o dado novamente até 2 vezes por batalha.',

      effectText:
        'Recebe +1 de poder para cada runa equipada.',

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
            'Recebe +1 de poder para cada runa equipada.',
        },

        {
          type:
            'reroll_dice',

          target:
            'self',

          amount: 2,

          duration:
            'battle',

          description:
            'Pode rerrolar o dado até 2 vezes por batalha.',
        },
      ],

      tags: [
        'race',
        'fire',
        'forge',
        'runes',
        'dice',
      ],

      image:
        '/cards/races/anao.webp',

      icon:
        '/icons/races/anao-icon.webp',
    },

    // =========================
    // ELFO
    // =========================

    {
      id: 'elfo',

      name: 'Elfo',

      slug: 'elfo',

      type: 'race',

      sourcePile:
        'treasures',

      elements: ['air'],

      power: 0,

      copies: 2,

      destroyable: false,

      tradeable: true,

      passive:
        'Agilidade Élfica: concede +1 em todos os dados.',

      active:
        'Durante batalhas pode descartar 3 cartas para fugir da batalha.',

      effectText:
        'Recebe +1 em todas as rolagens de dado.',

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
            'Recebe +1 em todas as rolagens de dado.',
        },

        {
          type:
            'force_escape',

          target:
            'self',

          duration:
            'battle',

          description:
            'Pode fugir automaticamente da batalha descartando 3 cartas.',
        },
      ],

      tags: [
        'race',
        'air',
        'dice',
        'escape',
      ],

      image:
        '/cards/races/elfo.webp',

      icon:
        '/icons/races/elfo-icon.webp',
    },

    // =========================
    // GIGANTE
    // =========================

    {
      id: 'gigante',

      name: 'Gigante',

      slug: 'gigante',

      type: 'race',

      sourcePile:
        'treasures',

      elements: ['earth'],

      power: 3,

      copies: 2,

      destroyable: false,

      tradeable: true,

      passive:
        'Força Gigante: concede +3 de poder.',

      active:
        'Durante batalhas pode descartar uma carta para ganhar +2 de poder uma vez por batalha.',

      effects: [
        {
          type:
            'gain_power',

          amount: 3,

          target:
            'self',

          duration:
            'permanent',

          description:
            'Recebe +3 de poder.',
        },

        {
          type:
            'temporary_power',

          amount: 2,

          target:
            'self',

          duration:
            'battle',

          description:
            'Pode receber +2 de poder uma vez por batalha.',
        },
      ],

      tags: [
        'race',
        'earth',
        'power',
      ],

      image:
        '/cards/races/gigante.webp',

      icon:
        '/icons/races/gigante-icon.webp',
    },

    // =========================
    // HUMANO
    // =========================

    {
      id: 'humano',

      name: 'Humano',

      slug: 'humano',

      type: 'race',

      sourcePile:
        'treasures',

      elements: ['water'],

      power: 0,

      copies: 2,

      destroyable: false,

      tradeable: true,

      passive:
        'Adaptação Humana: permite possuir uma classe adicional.',

      active:
        'No turno pode descartar uma carta para comprar 2 baús uma vez por turno.',

      ruleModifiers: [
        {
          type:
            'allow_extra_class',

          description:
            'Permite possuir uma classe adicional.',
        },
      ],

      effects: [
        {
          type:
            'draw_cards',

          amount: 2,

          target:
            'self',

          duration:
            'instant',

          description:
            'Compra 2 baús.',
        },
      ],

      tags: [
        'race',
        'water',
        'draw',
        'class',
      ],

      image:
        '/cards/races/humano.webp',

      icon:
        '/icons/races/humano-icon.webp',
    },

    // =========================
    // MEIO-DEMÔNIO
    // =========================

    {
      id: 'meio-demonio',

      name:
        'Meio-demônio',

      slug:
        'meio-demonio',

      type: 'race',

      sourcePile:
        'treasures',

      elements: ['darkness'],

      power: 0,

      copies: 2,

      destroyable: false,

      tradeable: true,

      passive:
        'Domínio Sombrio: permite carregar 2 baús adicionais na mão.',

      active:
        'Durante batalhas pode descartar 2 cartas para bloquear uma magia uma vez por batalha.',

      ruleModifiers: [
        {
          type:
            'increase_hand_limit',

          amount: 2,

          description:
            'Permite carregar 2 baús adicionais na mão.',
        },
      ],

      effects: [
        {
          type:
            'counter_spell',

          target:
            'battle',

          duration:
            'battle',

          description:
            'Pode bloquear uma magia descartando 2 cartas.',
        },
      ],

      tags: [
        'race',
        'darkness',
        'counter',
        'hand',
      ],

      image:
        '/cards/races/meio-demonio.webp',

      icon:
        '/icons/races/meio-demonio-icon.webp',
    },

    // =========================
    // SEMIDEUS
    // =========================

    {
      id: 'semideus',

      name: 'Semideus',

      slug: 'semideus',

      type: 'race',

      sourcePile:
        'treasures',

      elements: ['light'],

      power: 1,

      copies: 2,

      destroyable: false,

      tradeable: true,

      passive:
        'Ascensão Divina: concede +1 de poder a cada 2 níveis e +1 de poder adicional.',

      active:
        'Durante batalhas pode descartar uma carta para ganhar +1 de poder até 3 vezes por batalha.',

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
            'Recebe +1 de poder base.',
        },

        {
          type:
            'temporary_power',

          amount: 1,

          target:
            'self',

          duration:
            'battle',

          description:
            'Pode receber +1 de poder até 3 vezes por batalha.',
        },
      ],

      tags: [
        'race',
        'light',
        'power',
        'scaling',
      ],

      image:
        '/cards/races/semideus.webp',

      icon:
        '/icons/races/semideus-icon.webp',
    },
  ]