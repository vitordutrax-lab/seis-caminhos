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

      name:
        'Raiz Profana',

      slug:
        'raiz-profana',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'bow',

      slot:
        'weapon',

      hands: 2,

      power: 5,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'elfo',
      ],

      passive:
        'Elfos recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Elfos.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'bow',
        'elf',
      ],

      image:
        '/cards/items/attack/bows/raiz-profana.webp',

      icon:
        '/icons/items/attack/bows/raiz-profana-icon.webp',
    },

    {
      id: 'rasga-almas',

      name:
        'Rasga-Almas',

      slug:
        'rasga-almas',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'bow',

      slot:
        'weapon',

      hands: 2,

      power: 4,

      requiredLevel: 2,

      copies: 1,

      destroyable: true,

      tradeable: true,

      tags: [
        'item',
        'attack',
        'bow',
      ],

      image:
        '/cards/items/attack/bows/rasga-almas.webp',

      icon:
        '/icons/items/attack/bows/rasga-almas-icon.webp',
    },

    {
      id: 'aurora-regia',

      name:
        'Aurora Régia',

      slug:
        'aurora-regia',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'bow',

      slot:
        'weapon',

      hands: 2,

      power: 3,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'elfo',
      ],

      passive:
        'Elfos recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Elfos.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'bow',
        'elf',
      ],

      image:
        '/cards/items/attack/bows/aurora-regia.webp',

      icon:
        '/icons/items/attack/bows/aurora-regia-icon.webp',
    },

    // =========================
    // ESPADAS
    // =========================

    {
      id: 'zenite-dourado',

      name:
        'Zênite Dourado',

      slug:
        'zenite-dourado',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'sword',

      slot:
        'weapon',

      hands: 2,

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'humano',
      ],

      passive:
        'Humanos recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Humanos.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'sword',
        'human',
      ],

      image:
        '/cards/items/attack/swords/zenite-dourado.webp',

      icon:
        '/icons/items/attack/swords/zenite-dourado-icon.webp',
    },

    {
      id: 'corte-celeste',

      name:
        'Corte Celeste',

      slug:
        'corte-celeste',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'sword',

      slot:
        'weapon',

      hands: 2,

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'semideus',
      ],

      passive:
        'Semideuses recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Semideuses.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'sword',
        'demigod',
      ],

      image:
        '/cards/items/attack/swords/corte-celeste.webp',

      icon:
        '/icons/items/attack/swords/corte-celeste-icon.webp',
    },

    {
      id: 'ruptura-carmesim',

      name:
        'Ruptura Carmesim',

      slug:
        'ruptura-carmesim',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'sword',

      slot:
        'weapon',

      hands: 2,

      power: 4,

      requiredLevel: 2,

      copies: 1,

      destroyable: true,

      tradeable: true,

      tags: [
        'item',
        'attack',
        'sword',
      ],

      image:
        '/cards/items/attack/swords/ruptura-carmesim.webp',

      icon:
        '/icons/items/attack/swords/ruptura-carmesim-icon.webp',
    },

    {
      id: 'suserana-da-tormenta',

      name:
        'Suserana da Tormenta',

      slug:
        'suserana-da-tormenta',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'sword',

      slot:
        'weapon',

      hands: 1,

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'humano',
      ],

      passive:
        'Humanos recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Humanos.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'sword',
        'human',
      ],

      image:
        '/cards/items/attack/swords/suserana-da-tormenta.webp',

      icon:
        '/icons/items/attack/swords/suserana-da-tormenta-icon.webp',
    },

    {
      id: 'lamina-do-alvorecer',

      name:
        'Lâmina do Alvorecer',

      slug:
        'lamina-do-alvorecer',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'sword',

      slot:
        'weapon',

      hands: 1,

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'semideus',
      ],

      passive:
        'Semideuses recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Semideuses.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'sword',
        'demigod',
      ],

      image:
        '/cards/items/attack/swords/lamina-do-alvorecer.webp',

      icon:
        '/icons/items/attack/swords/lamina-do-alvorecer-icon.webp',
    },

    // =========================
    // FOICES
    // =========================

    {
      id: 'veu-do-entardecer',

      name:
        'Véu do Entardecer',

      slug:
        'veu-do-entardecer',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'scythe',

      slot:
        'weapon',

      hands: 2,

      power: 5,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'meio-demonio',
      ],

      passive:
        'Meio-demônios recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Meio-demônios.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'scythe',
        'demon',
      ],

      image:
        '/cards/items/attack/scythes/veu-do-entardecer.webp',

      icon:
        '/icons/items/attack/scythes/veu-do-entardecer-icon.webp',
    },

    {
      id: 'sede-de-sangue',

      name:
        'Sede de Sangue',

      slug:
        'sede-de-sangue',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'scythe',

      slot:
        'weapon',

      hands: 2,

      power: 2,

      requiredLevel: 1,

      copies: 1,

      destroyable: true,

      tradeable: true,

      active:
        'No início da batalha role o dado e some o valor ao poder da arma até o fim da batalha.',

      effectText:
        'Recebe poder adicional baseado no dado.',

      effects: [
        {
          type:
            'temporary_power',

          target:
            'self',

          duration:
            'battle',

          description:
            'Recebe poder adicional baseado no dado.',
        },
      ],

      tags: [
        'item',
        'attack',
        'scythe',
        'dice',
      ],

      image:
        '/cards/items/attack/scythes/sede-de-sangue.webp',

      icon:
        '/icons/items/attack/scythes/sede-de-sangue-icon.webp',
    },

    {
      id: 'ruptura-escarlate',

      name:
        'Ruptura Escarlate',

      slug:
        'ruptura-escarlate',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'scythe',

      slot:
        'weapon',

      hands: 2,

      power: 3,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'meio-demonio',
      ],

      passive:
        'Meio-demônios recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Meio-demônios.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'scythe',
        'demon',
      ],

      image:
        '/cards/items/attack/scythes/ruptura-escarlate.webp',

      icon:
        '/icons/items/attack/scythes/ruptura-escarlate-icon.webp',
    },

    // =========================
    // MACHADOS
    // =========================

    {
      id: 'coracao-de-magma',

      name:
        'Coração de Magma',

      slug:
        'coracao-de-magma',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'axe',

      slot:
        'weapon',

      hands: 2,

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'anao',
      ],

      passive:
        'Anões recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Anões.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'axe',
        'dwarf',
      ],

      image:
        '/cards/items/attack/axes/coracao-de-magma.webp',

      icon:
        '/icons/items/attack/axes/coracao-de-magma-icon.webp',
    },

    {
      id: 'astrocolosso',

      name:
        'Astrocolosso',

      slug:
        'astrocolosso',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'axe',

      slot:
        'weapon',

      hands: 2,

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'gigante',
      ],

      passive:
        'Gigantes recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Gigantes.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'axe',
        'giant',
      ],

      image:
        '/cards/items/attack/axes/astrocolosso.webp',

      icon:
        '/icons/items/attack/axes/astrocolosso-icon.webp',
    },

    {
      id: 'rasga-cripta',

      name:
        'Rasga-Cripta',

      slug:
        'rasga-cripta',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'axe',

      slot:
        'weapon',

      hands: 2,

      power: 4,

      requiredLevel: 2,

      copies: 1,

      destroyable: true,

      tradeable: true,

      tags: [
        'item',
        'attack',
        'axe',
      ],

      image:
        '/cards/items/attack/axes/rasga-cripta.webp',

      icon:
        '/icons/items/attack/axes/rasga-cripta-icon.webp',
    },

    {
      id: 'racha-rocha',

      name:
        'Racha-Rocha',

      slug:
        'racha-rocha',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'axe',

      slot:
        'weapon',

      hands: 1,

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'anao',
      ],

      passive:
        'Anões recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Anões.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'axe',
        'dwarf',
      ],

      image:
        '/cards/items/attack/axes/racha-rocha.webp',

      icon:
        '/icons/items/attack/axes/racha-rocha-icon.webp',
    },

    {
      id: 'cortecolosso',

      name:
        'Cortecolosso',

      slug:
        'cortecolosso',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'axe',

      slot:
        'weapon',

      hands: 1,

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'gigante',
      ],

      passive:
        'Gigantes recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Gigantes.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',
        },
      ],

      tags: [
        'item',
        'attack',
        'axe',
        'giant',
      ],

      image:
        '/cards/items/attack/axes/cortecolosso.webp',

      icon:
        '/icons/items/attack/axes/cortecolosso-icon.webp',
    },

    // =========================
    // OUTROS ITENS
    // =========================

    {
      id: 'punhal-curvo',

      name:
        'Punhal Curvo',

      slug:
        'punhal-curvo',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'dagger',

      slot:
        'weapon',

      hands: 1,

      power: 1,

      requiredLevel: 1,

      copies: 1,

      destroyable: true,

      tradeable: true,

      tags: [
        'item',
        'attack',
        'dagger',
      ],

      image:
        '/cards/items/attack/daggers/punhal-curvo.webp',

      icon:
        '/icons/items/attack/daggers/punhal-curvo-icon.webp',
    },

    {
      id: 'punhal-do-assassino',

      name:
        'Punhal do Assassino',

      slug:
        'punhal-do-assassino',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'dagger',

      slot:
        'weapon',

      hands: 1,

      power: 1,

      requiredLevel: 1,

      copies: 1,

      destroyable: true,

      tradeable: true,

      tags: [
        'item',
        'attack',
        'dagger',
      ],

      image:
        '/cards/items/attack/daggers/punhal-do-assassino.webp',

      icon:
        '/icons/items/attack/daggers/punhal-do-assassino-icon.webp',
    },

    {
      id: 'besta-de-madeira',

      name:
        'Besta de Madeira',

      slug:
        'besta-de-madeira',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'crossbow',

      slot:
        'weapon',

      hands: 1,

      power: 1,

      requiredLevel: 1,

      copies: 1,

      destroyable: true,

      tradeable: true,

      tags: [
        'item',
        'attack',
        'crossbow',
      ],

      image:
        '/cards/items/attack/bows/besta-de-madeira.webp',

      icon:
        '/icons/items/attack/bows/besta-de-madeira-icon.webp',
    },

    {
      id: 'sentenca-de-pedra',

      name:
        'Sentença de Pedra',

      slug:
        'sentenca-de-pedra',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'attack',

      category:
        'club',

      slot:
        'weapon',

      hands: 1,

      power: 1,

      requiredLevel: 1,

      copies: 1,

      destroyable: true,

      tradeable: true,

      tags: [
        'item',
        'attack',
        'club',
      ],

      image:
        '/cards/items/attack/clubs/sentenca-de-pedra.webp',

      icon:
        '/icons/items/attack/clubs/sentenca-de-pedra-icon.webp',
    },

  ]