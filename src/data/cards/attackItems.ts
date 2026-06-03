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
        '/icons/items/attack/bows/raiz-profana-icon.webp',

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
        '/icons/items/attack/bows/rasga-almas-icon.webp',

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
        '/icons/items/attack/bows/aurora-regia-icon.webp',

      tags: [
        'bow',
        'elf',
        'weapon',
      ],
    },

    // =========================
// ESPADAS
// =========================

{
  id: 'zenite-dourado',

  name: 'Zênite Dourado',

  slug: 'zenite-dourado',

  type: 'item',

  subtype: 'attack',

  category: 'sword',

  slot: 'weapon',

  power: 4,

  hands: 2,

  requiredLevel: 6,

  passive:
    '+2 de poder para Humanos.',

  copies: 1,

  image:
    '/cards/items/attack/swords/zenite-dourado.webp',

  icon:
    '/icons/items/attack/swords/zenite-dourado-icon.webp',

  tags: [
    'sword',
    'human',
    'weapon',
  ],
},

{
  id: 'corte-celeste',

  name: 'Corte Celeste',

  slug: 'corte-celeste',

  type: 'item',

  subtype: 'attack',

  category: 'sword',

  slot: 'weapon',

  power: 4,

  hands: 2,

  requiredLevel: 6,

  passive:
    '+2 de poder para Semideuses.',

  copies: 1,

  image:
    '/cards/items/attack/swords/corte-celeste.webp',

  icon:
    '/icons/items/attack/swords/corte-celeste-icon.webp',

  tags: [
    'sword',
    'semideus',
    'weapon',
  ],
},

{
  id: 'ruptura-carmesim',

  name: 'Ruptura Carmesim',

  slug: 'ruptura-carmesim',

  type: 'item',

  subtype: 'attack',

  category: 'sword',

  slot: 'weapon',

  power: 4,

  hands: 2,

  requiredLevel: 2,

  copies: 1,

  image:
    '/cards/items/attack/swords/ruptura-carmesim.webp',

  icon:
    '/icons/items/attack/swords/ruptura-carmesim-icon.webp',

  tags: [
    'sword',
    'weapon',
  ],
},

{
  id: 'suserana-da-tormenta',

  name: 'Suserana da Tormenta',

  slug: 'suserana-da-tormenta',

  type: 'item',

  subtype: 'attack',

  category: 'sword',

  slot: 'weapon',

  power: 2,

  hands: 1,

  requiredLevel: 4,

  passive:
    '+2 de poder para Humanos.',

  copies: 1,

  image:
    '/cards/items/attack/swords/suserana-da-tormenta.webp',

  icon:
    '/icons/items/attack/swords/suserana-da-tormenta-icon.webp',

  tags: [
    'sword',
    'human',
    'weapon',
  ],
},

{
  id: 'lamina-do-alvorecer',

  name: 'Lâmina do Alvorecer',

  slug: 'lamina-do-alvorecer',

  type: 'item',

  subtype: 'attack',

  category: 'sword',

  slot: 'weapon',

  power: 2,

  hands: 1,

  requiredLevel: 4,

  passive:
    '+2 de poder para Semideuses.',

  copies: 1,

  image:
    '/cards/items/attack/swords/lamina-do-alvorecer.webp',

  icon:
    '/icons/items/attack/swords/lamina-do-alvorecer-icon.webp',

  tags: [
    'sword',
    'semideus',
    'weapon',
  ],
},

// =========================
// FOICES
// =========================

{
  id: 'veu-do-entardecer',

  name: 'Véu do Entardecer',

  slug: 'veu-do-entardecer',

  type: 'item',

  subtype: 'attack',

  category: 'scythe',

  slot: 'weapon',

  power: 5,

  hands: 2,

  requiredLevel: 6,

  passive:
    '+2 de poder para Meio-demônios.',

  copies: 1,

  image:
    '/cards/items/attack/scythes/veu-do-entardecer.webp',

  icon:
    '/icons/items/attack/scythes/veu-do-entardecer-icon.webp',

  tags: [
    'scythe',
    'meio-demonio',
    'weapon',
  ],
},

{
  id: 'sede-de-sangue',

  name: 'Sede de Sangue',

  slug: 'sede-de-sangue',

  type: 'item',

  subtype: 'attack',

  category: 'scythe',

  slot: 'weapon',

  power: 2,

  hands: 2,

  requiredLevel: 1,

  passive:
    'No início da batalha rola-se o dado e o valor é somado ao poder da arma até o final da batalha.',

  copies: 1,

  image:
    '/cards/items/attack/scythes/sede-de-sangue.webp',

  icon:
    '/icons/items/attack/scythes/sede-de-sangue-icon.webp',

  tags: [
    'scythe',
    'dice',
    'weapon',
  ],
},

{
  id: 'ruptura-escarlate',

  name: 'Ruptura Escarlate',

  slug: 'ruptura-escarlate',

  type: 'item',

  subtype: 'attack',

  category: 'scythe',

  slot: 'weapon',

  power: 3,

  hands: 2,

  requiredLevel: 4,

  passive:
    '+2 de poder para Meio-demônios.',

  copies: 1,

  image:
    '/cards/items/attack/scythes/ruptura-escarlate.webp',

  icon:
    '/icons/items/attack/scythes/ruptura-escarlate-icon.webp',

  tags: [
    'scythe',
    'meio-demonio',
    'weapon',
  ],
},

// =========================
// MACHADOS
// =========================

{
  id: 'coracao-de-magma',

  name: 'Coração de Magma',

  slug: 'coracao-de-magma',

  type: 'item',

  subtype: 'attack',

  category: 'axe',

  slot: 'weapon',

  power: 4,

  hands: 2,

  requiredLevel: 6,

  passive:
    '+2 de poder para Anões.',

  copies: 1,

  image:
    '/cards/items/attack/axes/coracao-de-magma.webp',

  icon:
    '/icons/items/attack/axes/coracao-de-magma-icon.web',

  tags: [
    'axe',
    'anao',
    'weapon',
  ],
},

{
  id: 'astrocolosso',

  name: 'Astrocolosso',

  slug: 'astrocolosso',

  type: 'item',

  subtype: 'attack',

  category: 'axe',

  slot: 'weapon',

  power: 4,

  hands: 2,

  requiredLevel: 6,

  passive:
    '+2 de poder para Gigantes.',

  copies: 1,

  image:
    '/cards/items/attack/axes/astrocolosso.webp',

  icon:
    '/icons/items/attack/axes/astrocolosso-icon.webp',

  tags: [
    'axe',
    'gigante',
    'weapon',
  ],
},

{
  id: 'rasga-cripta',

  name: 'Rasga-Cripta',

  slug: 'rasga-cripta',

  type: 'item',

  subtype: 'attack',

  category: 'axe',

  slot: 'weapon',

  power: 4,

  hands: 2,

  requiredLevel: 2,

  copies: 1,

  image:
    '/cards/items/attack/axes/rasga-cripta.webp',

  icon:
    '/icons/items/attack/axes/rasga-cripta-icon.webp',

  tags: [
    'axe',
    'weapon',
  ],
},

{
  id: 'racha-rocha',

  name: 'Racha-Rocha',

  slug: 'racha-rocha',

  type: 'item',

  subtype: 'attack',

  category: 'axe',

  slot: 'weapon',

  power: 2,

  hands: 1,

  requiredLevel: 4,

  passive:
    '+2 de poder para Anões.',

  copies: 1,

  image:
    '/cards/items/attack/axes/racha-rocha.webp',

  icon:
    '/icons/items/attack/axes/racha-rocha-icon.webp',

  tags: [
    'axe',
    'anao',
    'weapon',
  ],
},

{
  id: 'cortecolosso',

  name: 'Cortecolosso',

  slug: 'cortecolosso',

  type: 'item',

  subtype: 'attack',

  category: 'axe',

  slot: 'weapon',

  power: 2,

  hands: 1,

  requiredLevel: 4,

  passive:
    '+2 de poder para Gigantes.',

  copies: 1,

  image:
    '/cards/items/attack/axes/cortecolosso.webp',

  icon:
    '/icons/items/attack/axes/cortecolosso-icon.webp',

  tags: [
    'axe',
    'gigante',
    'weapon',
  ],
},

// =========================
// ARMAS BÁSICAS
// =========================

{
  id: 'punhal-curvo',

  name: 'Punhal Curvo',

  slug: 'punhal-curvo',

  type: 'item',

  subtype: 'attack',

  category: 'dagger',

  slot: 'weapon',

  power: 1,

  hands: 1,

  requiredLevel: 1,

  copies: 1,

  image:
    '/cards/items/attack/daggers/punhal-curvo.webp',

  icon:
    '/icons/items/attack/daggers/punhal-curvo-icon.webp',

  tags: [
    'dagger',
    'weapon',
  ],
},

{
  id: 'punhal-do-assassino',

  name: 'Punhal do Assassino',

  slug: 'punhal-do-assassino',

  type: 'item',

  subtype: 'attack',

  category: 'dagger',

  slot: 'weapon',

  power: 1,

  hands: 1,

  requiredLevel: 1,

  copies: 1,

  image:
    '/cards/items/attack/daggers/punhal-do-assassino.webp',

  icon:
    '/icons/items/attack/daggers/punhal-do-assassino-icon.webp',

  tags: [
    'dagger',
    'weapon',
  ],
},

{
  id: 'besta-de-madeira',

  name: 'Besta de Madeira',

  slug: 'besta-de-madeira',

  type: 'item',

  subtype: 'attack',

  category: 'crossbow',

  slot: 'weapon',

  power: 1,

  hands: 1,

  requiredLevel: 1,

  copies: 1,

  image:
    '/cards/items/attack/bows/besta-de-madeira.webp',

  icon:
    '/icons/items/attack/bows/besta-de-madeira-icon.webp',

  tags: [
    'crossbow',
    'weapon',
  ],
},

{
  id: 'sentenca-de-pedra',

  name: 'Sentença de Pedra',

  slug: 'sentenca-de-pedra',

  type: 'item',

  subtype: 'attack',

  category: 'club',

  slot: 'weapon',

  power: 1,

  hands: 1,

  requiredLevel: 1,

  copies: 1,

  image:
    '/cards/items/attack/clubs/sentenca-de-pedra.webp',

  icon:
    '/icons/items/attack/clubs/sentenca-de-pedra-icon.webp',

  tags: [
    'club',
    'weapon',
  ],
},
  ]