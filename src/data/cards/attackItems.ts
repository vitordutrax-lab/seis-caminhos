import type {
  Card,
} from '../../types/card'

export const attackItems: Card[] =
  [
    // =========================
    // ARCOS
    // =========================

    {
      id: 'raiz-profana',

      name: 'Raiz Profana',

      slug: 'raiz-profana',

      type: 'item',

      subtype: 'attack',

      category: 'bow',

      slot: 'weapon',

      power: 5,

      hands: 2,

      requiredLevel: 6,

      passive:
        '+2 de poder para Elfos.',

      copies: 1,

      image:
        '/cards/items/attack/bows/raiz-profana.webp',

      icon:
        '/icons/items/2-hands-icon.webp',

      tags: [
        'bow',
        'elf',
        'weapon',
      ],
    },

    {
      id: 'rasga-almas',

      name: 'Rasga-Almas',

      slug: 'rasga-almas',

      type: 'item',

      subtype: 'attack',

      category: 'bow',

      slot: 'weapon',

      power: 4,

      hands: 2,

      requiredLevel: 2,

      copies: 1,

      image:
        '/cards/items/attack/bows/rasga-almas.webp',

      icon:
        '/icons/items/2-hands-icon.webp',

      tags: [
        'bow',
        'weapon',
      ],
    },

    {
      id: 'aurora-regia',

      name: 'Aurora Régia',

      slug: 'aurora-regia',

      type: 'item',

      subtype: 'attack',

      category: 'bow',

      slot: 'weapon',

      power: 3,

      hands: 2,

      requiredLevel: 4,

      passive:
        '+2 de poder para Elfos.',

      copies: 1,

      image:
        '/cards/items/attack/bows/aurora-regia.webp',

      icon:
        '/icons/items/2-hands-icon.webp',

      tags: [
        'bow',
        'elf',
        'weapon',
      ],
    },
  ]