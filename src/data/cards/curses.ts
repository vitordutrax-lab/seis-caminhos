import type {
  Card,
} from '../../types/card'

export const curses: Card[] =
  [
    // =========================
    // CRISTAL DE AMETISTA
    // =========================

    {
      id: 'cristal-de-ametista',

      name:
        'Cristal de Ametista',

      slug:
        'cristal-de-ametista',

      type: 'curse',

      sourcePile:
        'treasures',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      targetType:
        'player',

      description:
        'O acessório do personagem tem seu efeito cancelado.',

      effectText:
        'Anula os efeitos do acessório equipado.',

      effects: [
        {
          type:
            'disable_accessory',

          target:
            'player',

          duration:
            'permanent',

          description:
            'O acessório equipado perde seus efeitos.',
        },
      ],

      tags: [
        'curse',
        'accessory',
        'disable',
      ],

      image:
        '/cards/curses/cristal-de-ametista.webp',

      icon:
        '/icons/curses/cristal-de-ametista-icon.webp',
    },

    // =========================
    // CRISTAL DE ESMERALDA
    // =========================

    {
      id: 'cristal-de-esmeralda',

      name:
        'Cristal de Esmeralda',

      slug:
        'cristal-de-esmeralda',

      type: 'curse',

      sourcePile:
        'treasures',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      targetType:
        'player',

      description:
        'Concede -3 de poder ao personagem.',

      effectText:
        'O personagem perde 3 de poder.',

      effects: [
        {
          type:
            'lose_power',

          amount: 3,

          target:
            'player',

          duration:
            'permanent',

          description:
            'O personagem perde 3 de poder.',
        },
      ],

      tags: [
        'curse',
        'power',
        'debuff',
      ],

      image:
        '/cards/curses/cristal-de-esmeralda.webp',

      icon:
        '/icons/curses/cristal-de-esmeralda-icon.webp',
    },

    // =========================
    // CRISTAL DE ONIX
    // =========================

    {
      id: 'cristal-de-onix',

      name:
        'Cristal de Onix',

      slug:
        'cristal-de-onix',

      type: 'curse',

      sourcePile:
        'treasures',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      targetType:
        'player',

      description:
        'O personagem não pode utilizar magias até participar de uma batalha.',

      effectText:
        'Bloqueia o uso de magias.',

      effects: [
        {
          type:
            'disable_spells',

          target:
            'player',

          duration:
            'until_battle',

          description:
            'O personagem não pode utilizar magias.',
        },
      ],

      tags: [
        'curse',
        'magic',
        'disable',
      ],

      image:
        '/cards/curses/cristal-de-onix.webp',

      icon:
        '/icons/curses/cristal-de-onix-icon.webp',
    },

    // =========================
    // CRISTAL DE SAFIRA
    // =========================

    {
      id: 'cristal-de-safira',

      name:
        'Cristal de Safira',

      slug:
        'cristal-de-safira',

      type: 'curse',

      sourcePile:
        'treasures',

      power: 0,

      copies: 1,

      destroyable: true,

      tradeable: true,

      targetType:
        'player',

      description:
        'Concede -5 de poder ao personagem.',

      effectText:
        'O personagem perde 5 de poder.',

      effects: [
        {
          type:
            'lose_power',

          amount: 5,

          target:
            'player',

          duration:
            'permanent',

          description:
            'O personagem perde 5 de poder.',
        },
      ],

      tags: [
        'curse',
        'power',
        'debuff',
      ],

      image:
        '/cards/curses/cristal-de-safira.webp',

      icon:
        '/icons/curses/cristal-de-safira-icon.webp',
    },

    // =========================
    // CRISTAL DE TOPÁZIO
    // =========================

    {
      id: 'cristal-de-topazio',

      name:
        'Cristal de Topázio',

      slug:
        'cristal-de-topazio',

      type: 'curse',

      sourcePile:
        'treasures',

      power: 0,

      copies: 3,

      destroyable: true,

      tradeable: true,

      targetType:
        'item',

      description:
        'O item equipado tem seu poder e efeitos anulados.',

      effectText:
        'Anula os efeitos do item equipado.',

      effects: [
        {
          type:
            'disable_item',

          target:
            'item',

          duration:
            'permanent',

          description:
            'O item equipado perde seus efeitos.',
        },
      ],

      tags: [
        'curse',
        'item',
        'disable',
      ],

      image:
        '/cards/curses/cristal-de-topazio.webp',

      icon:
        '/icons/curses/cristal-de-topazio-icon.webp',
    },
  ]