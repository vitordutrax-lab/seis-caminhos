import type {
  Card,
} from '../../types/card'

export const defenseItems: Card[] =
  [
    // =========================
    // ARMADURAS
    // =========================

    {
      id: 'carapaca-de-basalto',

      name:
        'Carapaça de Basalto',

      slug:
        'carapaca-de-basalto',

      type: 'item',

      subtype: 'defense',

      category: 'armor',

      slot: 'body',

      power: 4,

      requiredLevel: 6,

      passive:
        '+2 de poder para Bardos.',

      restriction:
        'Ladinos não podem utilizar.',

      copies: 1,

      image:
        '/cards/items/defense/armors/carapaca-de-basalto.webp',

      icon:
        '/icons/items/defense/carapaca-de-basalto-icon.webp',

      tags: [
        'armor',
        'bardo',
      ],
    },

    {
      id: 'aegis-dourada',

      name:
        'Aégis Dourada',

      slug:
        'aegis-dourada',

      type: 'item',

      subtype: 'defense',

      category: 'armor',

      slot: 'body',

      power: 4,

      requiredLevel: 6,

      passive:
        '+2 de poder para Guardiões.',

      restriction:
        'Magos não podem utilizar.',

      copies: 1,

      image:
        '/cards/items/defense/armors/aegis-dourada.webp',

      icon:
        '/icons/items/defense/aegis-dourada-icon.webp',

      tags: [
        'armor',
        'guardiao',
      ],
    },

    {
      id: 'bastiao-sanguinario',

      name:
        'Bastião Sanguinário',

      slug:
        'bastiao-sanguinario',

      type: 'item',

      subtype: 'defense',

      category: 'armor',

      slot: 'body',

      power: 4,

      requiredLevel: 6,

      passive:
        '+2 de poder para Guerreiros.',

      restriction:
        'Videntes não podem utilizar.',

      copies: 1,

      image:
        '/cards/items/defense/armors/bastiao-sanguinario.webp',

      icon:
        '/icons/items/defense/bastiao-sanguinario-icon.webp',

      tags: [
        'armor',
        'guerreiro',
      ],
    },

    {
      id: 'sangrespinhos',

      name:
        'Sangrespinhos',

      slug:
        'sangrespinhos',

      type: 'item',

      subtype: 'defense',

      category: 'armor',

      slot: 'body',

      power: 4,

      requiredLevel: 6,

      passive:
        '+2 de poder para Ladinos.',

      restriction:
        'Bardos não podem utilizar.',

      copies: 1,

      image:
        '/cards/items/defense/armors/sangrespinhos.webp',

      icon:
        '/icons/items/defense/sangrespinhos-icon.webp',

      tags: [
        'armor',
        'ladino',
      ],
    },

    {
      id: 'vestes-profana',

      name:
        'Vestes Profana',

      slug:
        'vestes-profana',

      type: 'item',

      subtype: 'defense',

      category: 'armor',

      slot: 'body',

      power: 4,

      requiredLevel: 6,

      passive:
        '+2 de poder para Magos.',

      restriction:
        'Guardiões não podem utilizar.',

      copies: 1,

      image:
        '/cards/items/defense/armors/vestes-profana.webp',

      icon:
        '/icons/items/defense/vestes-profana-icon.webp',

      tags: [
        'armor',
        'mago',
      ],
    },

    {
      id: 'couraca-de-cristal',

      name:
        'Couraça de Cristal',

      slug:
        'couraca-de-cristal',

      type: 'item',

      subtype: 'defense',

      category: 'armor',

      slot: 'body',

      power: 4,

      requiredLevel: 6,

      passive:
        '+2 de poder para Videntes.',

      restriction:
        'Guerreiros não podem utilizar.',

      copies: 1,

      image:
        '/cards/items/defense/armors/couraca-de-cristal.webp',

      icon:
        '/icons/items/defense/couraca-de-cristal-icon.webp',

      tags: [
        'armor',
        'vidente',
      ],
    },

    {
      id: 'peitoral-de-ferro',

      name:
        'Peitoral de Ferro',

      slug:
        'peitoral-de-ferro',

      type: 'item',

      subtype: 'defense',

      category: 'armor',

      slot: 'body',

      power: 2,

      requiredLevel: 2,

      copies: 1,

      image:
        '/cards/items/defense/armors/peitoral-de-ferro.webp',

      icon:
        '/icons/items/defense/peitoral-de-ferro-icon.webp',

      tags: [
        'armor',
      ],
    },

    {
      id: 'peitoral-de-aco-sombrio',

      name:
        'Peitoral de Aço Sombrio',

      slug:
        'peitoral-de-aco-sombrio',

      type: 'item',

      subtype: 'defense',

      category: 'armor',

      slot: 'body',

      power: 3,

      requiredLevel: 3,

      copies: 1,

      image:
        '/cards/items/defense/armors/peitoral-de-aco-sombrio.webp',

      icon:
        '/icons/items/defense/peitoral-de-aco-sombrio-icon.webp',

      tags: [
        'armor',
      ],
    },

    // =========================
// ELMOS
// =========================

{
  id: 'capelo-da-guerra',

  name:
    'Capelo da Guerra',

  slug:
    'capelo-da-guerra',

  type: 'item',

  subtype: 'defense',

  category: 'helmet',

  slot: 'head',

  power: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Guardiões e Guerreiros.',

  copies: 1,

  image:
    '/cards/items/defense/helmets/capelo-da-guerra.webp',

  icon:
    '/icons/items/defense/capelo-da-guerra-icon.webp',

  tags: [
    'helmet',
    'guardiao',
    'guerreiro',
  ],
},

{
  id: 'capacete-dourado',

  name:
    'Capacete Dourado',

  slug:
    'capacete-dourado',

  type: 'item',

  subtype: 'defense',

  category: 'helmet',

  slot: 'head',

  power: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Bardos e Ladinos.',

  copies: 1,

  image:
    '/cards/items/defense/helmets/capacete-dourado.webp',

  icon:
    '/icons/items/defense/capacete-dourado-icon.webp',

  tags: [
    'helmet',
    'bardo',
    'ladino',
  ],
},

{
  id: 'elmo-encantado',

  name:
    'Elmo Encantado',

  slug:
    'elmo-encantado',

  type: 'item',

  subtype: 'defense',

  category: 'helmet',

  slot: 'head',

  power: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Magos e Videntes.',

  copies: 1,

  image:
    '/cards/items/defense/helmets/elmo-encantado.webp',

  icon:
    '/icons/items/defense/elmo-encantado-icon.webp',

  tags: [
    'helmet',
    'mago',
    'vidente',
  ],
},

// =========================
// ESCUDOS
// =========================

{
  id: 'protecao',

  name:
    'Proteção',

  slug:
    'protecao',

  type: 'item',

  subtype: 'defense',

  category: 'shield',

  slot: 'shield',

  power: 2,

  hands: 1,

  requiredLevel: 4,

  passive:
    '+2 de poder para Guardiões e Guerreiros.',

  copies: 1,

  image:
    '/cards/items/defense/shields/protecao.webp',

  icon:
    '/icons/items/defense/protecao-icon.webp',

  tags: [
    'shield',
    'guardiao',
    'guerreiro',
  ],
},

{
  id: 'brasao-negro',

  name:
    'Brasão Negro',

  slug:
    'brasao-negro',

  type: 'item',

  subtype: 'defense',

  category: 'shield',

  slot: 'shield',

  power: 2,

  hands: 1,

  requiredLevel: 4,

  passive:
    '+2 de poder para Bardos e Ladinos.',

  copies: 1,

  image:
    '/cards/items/defense/shields/brasao-negro.webp',

  icon:
    '/icons/items/defense/brasao-negro-icon.webp',

  tags: [
    'shield',
    'bardo',
    'ladino',
  ],
},

{
  id: 'egide-magica',

  name:
    'Égide Mágica',

  slug:
    'egide-magica',

  type: 'item',

  subtype: 'defense',

  category: 'shield',

  slot: 'shield',

  power: 2,

  hands: 1,

  requiredLevel: 4,

  passive:
    '+2 de poder para Magos e Videntes.',

  copies: 1,

  image:
    '/cards/items/defense/shields/egide-magica.webp',

  icon:
    '/icons/items/defense/egide-magica-icon.webp',

  tags: [
    'shield',
    'mago',
    'vidente',
  ],
},

// =========================
// LUVAS
// =========================

{
  id: 'maos-ardentes',

  name:
    'Mãos Ardentes',

  slug:
    'maos-ardentes',

  type: 'item',

  subtype: 'defense',

  category: 'gloves',

  slot: 'hands',

  power: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Anões e Gigantes.',

  copies: 1,

  image:
    '/cards/items/defense/gloves/maos-ardentes.webp',

  icon:
    '/icons/items/defense/maos-ardentes-icon.webp',

  tags: [
    'gloves',
    'anao',
    'gigante',
  ],
},

{
  id: 'punhos-azurinas',

  name:
    'Punhos Azurinas',

  slug:
    'punhos-azurinas',

  type: 'item',

  subtype: 'defense',

  category: 'gloves',

  slot: 'hands',

  power: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Elfos e Humanos.',

  copies: 1,

  image:
    '/cards/items/defense/gloves/punhos-azurinas.webp',

  icon:
    '/icons/items/defense/punhos-azurinas-icon.webp',

  tags: [
    'gloves',
    'elfo',
    'humano',
  ],
},

{
  id: 'manopolas-da-realeza',

  name:
    'Manopolas da Realeza',

  slug:
    'manopolas-da-realeza',

  type: 'item',

  subtype: 'defense',

  category: 'gloves',

  slot: 'hands',

  power: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Meio-demônios e Semideuses.',

  copies: 1,

  image:
    '/cards/items/defense/gloves/manopolas-da-realeza.webp',

  icon:
    '/icons/items/defense/manopolas-da-realeza-icon.webp',

  tags: [
    'gloves',
    'meio-demonio',
    'semideus',
  ],
},

// =========================
// BOTAS
// =========================

{
  id: 'passos-ardentes',

  name:
    'Passos Ardentes',

  slug:
    'passos-ardentes',

  type: 'item',

  subtype: 'defense',

  category: 'boots',

  slot: 'feet',

  power: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Anões e Gigantes.',

  copies: 1,

  image:
    '/cards/items/defense/boots/passos-ardentes.webp',

  icon:
    '/icons/items/defense/passos-ardentes-icon.webp',

  tags: [
    'boots',
    'anao',
    'gigante',
  ],
},

{
  id: 'calcados-azurinas',

  name:
    'Calçados Azurinas',

  slug:
    'calcados-azurinas',

  type: 'item',

  subtype: 'defense',

  category: 'boots',

  slot: 'feet',

  power: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Elfos e Humanos.',

  copies: 1,

  image:
    '/cards/items/defense/boots/calcados-azurinas.webp',

  icon:
    '/icons/items/defense/calcados-azurinas-icon.webp',

  tags: [
    'boots',
    'elfo',
    'humano',
  ],
},

{
  id: 'sapatos-da-realeza',

  name:
    'Sapatos da Realeza',

  slug:
    'sapatos-da-realeza',

  type: 'item',

  subtype: 'defense',

  category: 'boots',

  slot: 'feet',

  power: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Meio-demônios e Semideuses.',

  copies: 1,

  image:
    '/cards/items/defense/boots/sapatos-da-realeza.webp',

  icon:
    '/icons/items/defense/sapatos-da-realeza-icon.webp',

  tags: [
    'boots',
    'meio-demonio',
    'semideus',
  ],
},
  ]