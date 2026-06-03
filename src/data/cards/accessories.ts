import type {
  Card,
} from '../../types/card'

export const accessories: Card[] =
  [
    {
      id: 'anel-do-vazio',

      name:
        'Anel do Vazio',

      slug:
        'anel-do-vazio',

      type: 'accessory',

      power: 2,

      passive:
        'Concede +1 de poder adicional para cada magia na mão.',

      copies: 1,

      image:
        '/cards/accessories/anel-do-vazio.webp',

      icon:
        '/icons/accessories/anel-do-vazio-icon.webp',

      tags: [
        'magic',
        'power',
      ],
    },

    {
      id: 'coroa-do-imperador',

      name:
        'Coroa do Imperador',

      slug:
        'coroa-do-imperador',

      type: 'accessory',

      power: 3,

      passive:
        'Concede +1 de poder para cada 2 níveis.',

      copies: 1,

      image:
        '/cards/accessories/coroa-do-imperador.webp',

      icon:
        '/icons/accessories/coroa-do-imperador-icon.webp',

      tags: [
        'levels',
        'scaling',
      ],
    },

    {
      id: 'medalhao-profano',

      name:
        'Medalhão Profano',

      slug:
        'medalhao-profano',

      type: 'accessory',

      power: 2,

      passive:
        'Concede +2 de poder durante batalhas contra monstros de Luz.',

      copies: 1,

      image:
        '/cards/accessories/medalhao-profano.webp',

      icon:
        '/icons/accessories/medalhao-profano-icon.webp',

      tags: [
        'light',
        'combat',
      ],
    },

    {
      id: 'olho-da-tempestade',

      name:
        'Olho da Tempestade',

      slug:
        'olho-da-tempestade',

      type: 'accessory',

      power: 2,

      passive:
        'Concede +1 em fugas.',

      copies: 1,

      image:
        '/cards/accessories/olho-da-tempestade.webp',

      icon:
        '/icons/accessories/olho-da-tempestade-icon.webp',

      tags: [
        'escape',
        'dice',
      ],
    },

    {
      id: 'reliquia-sagrada',

      name:
        'Relíquia Sagrada',

      slug:
        'reliquia-sagrada',

      type: 'accessory',

      power: 2,

      passive:
        'Concede +2 de poder durante batalhas contra monstros de Escuridão.',

      copies: 1,

      image:
        '/cards/accessories/reliquia-sagrada.webp',

      icon:
        '/icons/accessories/reliquia-sagrada-icon.webp',

      tags: [
        'darkness',
        'combat',
      ],
    },
  ]