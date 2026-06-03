import type {
  Card,
} from '../../types/card'

export const classes: Card[] =
  [
    {
      id: 'bardo',

      name: 'Bardo',

      slug: 'bardo',

      type: 'class',

      power: 1,

      passive:
        'Canção da Vitória: recebe 1 baú adicional em todas as vitórias em batalhas que participar.',

      copies: 2,

      image:
        '/cards/classes/bardo.webp',

      icon:
        '/icons/classes/bardo-icon.webp',

      tags: [
        'support',
        'reward',
        'chests',
      ],
    },

    {
      id: 'guardiao',

      name: 'Guardião',

      slug: 'guardiao',

      type: 'class',

      power: 1,

      passive:
        'Proteção Valiosa: recebe 1 nível ao ajudar em batalhas vencidas.',

      copies: 2,

      image:
        '/cards/classes/guardiao.webp',

      icon:
        '/icons/classes/guardiao-icon.webp',

      tags: [
        'tank',
        'levels',
        'support',
      ],
    },

    {
      id: 'guerreiro',

      name: 'Guerreiro',

      slug: 'guerreiro',

      type: 'class',

      power: 2,

      passive:
        'Fúria: recebe +1 de poder para cada monstro derrotado, acumulando até +6.',

      restriction:
        'Ao fugir ou perder uma batalha, perde todos os acúmulos. Expedições não acumulam Fúria.',

      copies: 2,

      image:
        '/cards/classes/guerreiro.webp',

      icon:
        '/icons/classes/guerreiro-icon.webp',

      tags: [
        'combat',
        'damage',
        'scaling',
      ],
    },

    {
      id: 'ladino',

      name: 'Ladino',

      slug: 'ladino',

      type: 'class',

      power: 1,

      active:
        'No turno pode descartar uma carta da mão e rolar o dado. Com resultado 4+, rouba um item ou acessório em jogo uma vez por turno.',

      restriction:
        'Runas presentes no item roubado são descartadas.',

      copies: 2,

      image:
        '/cards/classes/ladino.webp',

      icon:
        '/icons/classes/ladino-icon.webp',

      tags: [
        'steal',
        'dice',
        'utility',
      ],
    },

    {
      id: 'mago',

      name: 'Mago',

      slug: 'mago',

      type: 'class',

      power: 1,

      active:
        'No turno pode descartar uma carta da mão e rolar o dado. Com resultado 4+, destrói um acessório, maldição ou runa uma vez por turno.',

      copies: 2,

      image:
        '/cards/classes/mago.webp',

      icon:
        '/icons/classes/mago-icon.webp',

      tags: [
        'magic',
        'destroy',
        'utility',
      ],
    },

    {
      id: 'vidente',

      name: 'Vidente',

      slug: 'vidente',

      type: 'class',

      power: 1,

      passive:
        'Profecia: durante batalhas recebe +1 de poder para cada magia utilizada, acumulando até +6.',

      restriction:
        'Os acúmulos são zerados ao final da batalha.',

      copies: 2,

      image:
        '/cards/classes/vidente.webp',

      icon:
        '/icons/classes/vidente-icon.webp',

      tags: [
        'magic',
        'scaling',
        'combat',
      ],
    },
  ]