import type {
  Card,
} from '../../types/card'

export const curses: Card[] =
  [
    {
      id: 'cristal-de-ametista',

      name:
        'Cristal de Ametista',

      slug:
        'cristal-de-ametista',

      type: 'curse',

      power: 0,

      description:
        'O acessório do personagem tem seu efeito cancelado.',

      restriction:
        'Apenas uma maldição por personagem.',

      copies: 2,

      image:
        '/cards/curses/cristal-de-ametista.webp',

      icon:
        '/icons/curses/cristal-de-ametista-icon.webp',

      tags: [
        'curse',
        'accessory',
        'disable',
      ],
    },

    {
      id: 'cristal-de-esmeralda',

      name:
        'Cristal de Esmeralda',

      slug:
        'cristal-de-esmeralda',

      type: 'curse',

      power: -3,

      description:
        'Concede -3 de poder ao personagem.',

      restriction:
        'Apenas uma maldição por personagem.',

      copies: 2,

      image:
        '/cards/curses/cristal-de-esmeralda.webp',

      icon:
        '/icons/curses/cristal-de-esmeralda-icon.webp',

      tags: [
        'curse',
        'debuff',
        'power',
      ],
    },

    {
      id: 'cristal-de-onix',

      name:
        'Cristal de Onix',

      slug:
        'cristal-de-onix',

      type: 'curse',

      power: 0,

      description:
        'O personagem não pode utilizar magias até participar de uma batalha.',

      restriction:
        'Apenas uma maldição por personagem.',

      copies: 2,

      image:
        '/cards/curses/cristal-de-onix.webp',

      icon:
        '/icons/curses/cristal-de-onix-icon.webp',

      tags: [
        'curse',
        'magic',
        'block',
      ],
    },

    {
      id: 'cristal-de-safira',

      name:
        'Cristal de Safira',

      slug:
        'cristal-de-safira',

      type: 'curse',

      power: -5,

      description:
        'Concede -5 de poder ao personagem.',

      restriction:
        'Apenas uma maldição por personagem.',

      copies: 1,

      image:
        '/cards/curses/cristal-de-safira.webp',

      icon:
        '/icons/curses/cristal-de-safira-icon.webp',

      tags: [
        'curse',
        'debuff',
        'power',
      ],
    },

    {
      id: 'cristal-de-topazio',

      name:
        'Cristal de Topázio',

      slug:
        'cristal-de-topazio',

      type: 'curse',

      power: 0,

      description:
        'O item equipado tem seu poder e efeitos anulados.',

      restriction:
        'Apenas uma maldição por personagem.',

      copies: 3,

      image:
        '/cards/curses/cristal-de-topazio.webp',

      icon:
        '/icons/curses/cristal-de-topazio-icon.webp',

      tags: [
        'curse',
        'item',
        'disable',
      ],
    },
  ]