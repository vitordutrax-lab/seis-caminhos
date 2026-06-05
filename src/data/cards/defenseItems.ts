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

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'armor',

      slot:
        'body',

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'bardo',
      ],

      restrictedClasses: [
        'ladino',
      ],

      passive:
        'Bardos recebem +2 de poder.',

      restriction:
        'Ladinos não podem utilizar.',

      effectText:
        'Concede +2 de poder para Bardos.',

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
        'defense',
        'armor',
        'bard',
      ],

      image:
        '/cards/items/defense/armors/carapaca-de-basalto.webp',

      icon:
        '/icons/items/defense/carapaca-de-basalto-icon.webp',
    },

    {
      id: 'aegis-dourada',

      name:
        'Aégis Dourada',

      slug:
        'aegis-dourada',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'armor',

      slot:
        'body',

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'guardiao',
      ],

      restrictedClasses: [
        'mago',
      ],

      passive:
        'Guardiões recebem +2 de poder.',

      restriction:
        'Magos não podem utilizar.',

      effectText:
        'Concede +2 de poder para Guardiões.',

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
        'defense',
        'armor',
        'guardian',
      ],

      image:
        '/cards/items/defense/armors/aegis-dourada.webp',

      icon:
        '/icons/items/defense/aegis-dourada-icon.webp',
    },

    {
      id: 'bastiao-sanguinario',

      name:
        'Bastião Sanguinário',

      slug:
        'bastiao-sanguinario',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'armor',

      slot:
        'body',

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'guerreiro',
      ],

      restrictedClasses: [
        'vidente',
      ],

      passive:
        'Guerreiros recebem +2 de poder.',

      restriction:
        'Videntes não podem utilizar.',

      effectText:
        'Concede +2 de poder para Guerreiros.',

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
        'defense',
        'armor',
        'warrior',
      ],

      image:
        '/cards/items/defense/armors/bastiao-sanguinario.webp',

      icon:
        '/icons/items/defense/bastiao-sanguinario-icon.webp',
    },

    {
      id: 'sangrespinhos',

      name:
        'Sangrespinhos',

      slug:
        'sangrespinhos',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'armor',

      slot:
        'body',

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'ladino',
      ],

      restrictedClasses: [
        'bardo',
      ],

      passive:
        'Ladinos recebem +2 de poder.',

      restriction:
        'Bardos não podem utilizar.',

      effectText:
        'Concede +2 de poder para Ladinos.',

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
        'defense',
        'armor',
        'rogue',
      ],

      image:
        '/cards/items/defense/armors/sangrespinhos.webp',

      icon:
        '/icons/items/defense/sangrespinhos-icon.webp',
    },

    {
      id: 'vestes-profana',

      name:
        'Vestes Profana',

      slug:
        'vestes-profana',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'armor',

      slot:
        'body',

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'mago',
      ],

      restrictedClasses: [
        'guardiao',
      ],

      passive:
        'Magos recebem +2 de poder.',

      restriction:
        'Guardiões não podem utilizar.',

      effectText:
        'Concede +2 de poder para Magos.',

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
        'defense',
        'armor',
        'mage',
      ],

      image:
        '/cards/items/defense/armors/vestes-profana.webp',

      icon:
        '/icons/items/defense/vestes-profana-icon.webp',
    },

    {
      id: 'couraca-de-cristal',

      name:
        'Couraça de Cristal',

      slug:
        'couraca-de-cristal',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'armor',

      slot:
        'body',

      power: 4,

      requiredLevel: 6,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'vidente',
      ],

      restrictedClasses: [
        'guerreiro',
      ],

      passive:
        'Videntes recebem +2 de poder.',

      restriction:
        'Guerreiros não podem utilizar.',

      effectText:
        'Concede +2 de poder para Videntes.',

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
        'defense',
        'armor',
        'oracle',
      ],

      image:
        '/cards/items/defense/armors/couraca-de-cristal.webp',

      icon:
        '/icons/items/defense/couraca-de-cristal-icon.webp',
    },

    {
      id: 'peitoral-de-ferro',

      name:
        'Peitoral de Ferro',

      slug:
        'peitoral-de-ferro',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'armor',

      slot:
        'body',

      power: 2,

      requiredLevel: 2,

      copies: 1,

      destroyable: true,

      tradeable: true,

      tags: [
        'item',
        'defense',
        'armor',
      ],

      image:
        '/cards/items/defense/armors/peitoral-de-ferro.webp',

      icon:
        '/icons/items/defense/peitoral-de-ferro-icon.webp',
    },

    {
      id: 'peitoral-de-aco-sombrio',

      name:
        'Peitoral de Aço Sombrio',

      slug:
        'peitoral-de-aco-sombrio',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'armor',

      slot:
        'body',

      power: 3,

      requiredLevel: 3,

      copies: 1,

      destroyable: true,

      tradeable: true,

      tags: [
        'item',
        'defense',
        'armor',
      ],

      image:
        '/cards/items/defense/armors/peitoral-de-aco-sombrio.webp',

      icon:
        '/icons/items/defense/peitoral-de-aco-sombrio-icon.webp',
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

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'boots',

      slot:
        'feet',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'anao',
        'gigante',
      ],

      passive:
        'Anões e Gigantes recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Anões e Gigantes.',

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
        'defense',
        'boots',
        'dwarf',
        'giant',
      ],

      image:
        '/cards/items/defense/boots/passos-ardentes.webp',

      icon:
        '/icons/items/defense/passos-ardentes-icon.webp',
    },

    {
      id: 'calcados-azurinas',

      name:
        'Calçados Azurinas',

      slug:
        'calcados-azurinas',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'boots',

      slot:
        'feet',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'elfo',
        'humano',
      ],

      passive:
        'Elfos e Humanos recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Elfos e Humanos.',

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
        'defense',
        'boots',
        'elf',
        'human',
      ],

      image:
        '/cards/items/defense/boots/calcados-azurinas.webp',

      icon:
        '/icons/items/defense/calcados-azurinas-icon.webp',
    },

    {
      id: 'sapatos-da-realeza',

      name:
        'Sapatos da Realeza',

      slug:
        'sapatos-da-realeza',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'boots',

      slot:
        'feet',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'meio-demonio',
        'semideus',
      ],

      passive:
        'Meio-demônios e Semideuses recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Meio-demônios e Semideuses.',

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
        'defense',
        'boots',
        'demon',
        'demigod',
      ],

      image:
        '/cards/items/defense/boots/sapatos-da-realeza.webp',

      icon:
        '/icons/items/defense/sapatos-da-realeza-icon.webp',
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

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'shield',

      slot:
        'shield',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'guardiao',
        'guerreiro',
      ],

      passive:
        'Guardiões e Guerreiros recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Guardiões e Guerreiros.',

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
        'defense',
        'shield',
        'guardian',
        'warrior',
      ],

      image:
        '/cards/items/defense/shields/protecao.webp',

      icon:
        '/icons/items/defense/protecao-icon.webp',
    },

    {
      id: 'brasao-negro',

      name:
        'Brasão Negro',

      slug:
        'brasao-negro',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'shield',

      slot:
        'shield',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'bardo',
        'ladino',
      ],

      passive:
        'Bardos e Ladinos recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Bardos e Ladinos.',

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
        'defense',
        'shield',
        'bard',
        'rogue',
      ],

      image:
        '/cards/items/defense/shields/brasao-negro.webp',

      icon:
        '/icons/items/defense/brasao-negro-icon.webp',
    },

    {
      id: 'egide-magica',

      name:
        'Égide Mágica',

      slug:
        'egide-magica',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'shield',

      slot:
        'shield',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'mago',
        'vidente',
      ],

      passive:
        'Magos e Videntes recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Magos e Videntes.',

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
        'defense',
        'shield',
        'mage',
        'oracle',
      ],

      image:
        '/cards/items/defense/shields/egide-magica.webp',

      icon:
        '/icons/items/defense/egide-magica-icon.webp',
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

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'gloves',

      slot:
        'hands',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'anao',
        'gigante',
      ],

      passive:
        'Anões e Gigantes recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Anões e Gigantes.',

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
        'defense',
        'gloves',
        'dwarf',
        'giant',
      ],

      image:
        '/cards/items/defense/gloves/maos-ardentes.webp',

      icon:
        '/icons/items/defense/maos-ardentes-icon.webp',
    },

    {
      id: 'punhos-azurinas',

      name:
        'Punhos Azurinas',

      slug:
        'punhos-azurinas',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'gloves',

      slot:
        'hands',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'elfo',
        'humano',
      ],

      passive:
        'Elfos e Humanos recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Elfos e Humanos.',

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
        'defense',
        'gloves',
        'elf',
        'human',
      ],

      image:
        '/cards/items/defense/gloves/punhos-azurinas.webp',

      icon:
        '/icons/items/defense/punhos-azurinas-icon.webp',
    },

    {
      id: 'manopolas-da-realeza',

      name:
        'Manopolas da Realeza',

      slug:
        'manopolas-da-realeza',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'gloves',

      slot:
        'hands',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusRaces: [
        'meio-demonio',
        'semideus',
      ],

      passive:
        'Meio-demônios e Semideuses recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Meio-demônios e Semideuses.',

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
        'defense',
        'gloves',
        'demon',
        'demigod',
      ],

      image:
        '/cards/items/defense/gloves/manopolas-da-realeza.webp',

      icon:
        '/icons/items/defense/manopolas-da-realeza-icon.webp',
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

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'helmet',

      slot:
        'head',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'guardiao',
        'guerreiro',
      ],

      passive:
        'Guardiões e Guerreiros recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Guardiões e Guerreiros.',

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
        'defense',
        'helmet',
        'guardian',
        'warrior',
      ],

      image:
        '/cards/items/defense/helmets/capelo-da-guerra.webp',

      icon:
        '/icons/items/defense/capelo-da-guerra-icon.webp',
    },

    {
      id: 'capacete-dourado',

      name:
        'Capacete Dourado',

      slug:
        'capacete-dourado',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'helmet',

      slot:
        'head',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'bardo',
        'ladino',
      ],

      passive:
        'Bardos e Ladinos recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Bardos e Ladinos.',

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
        'defense',
        'helmet',
        'bard',
        'rogue',
      ],

      image:
        '/cards/items/defense/helmets/capacete-dourado.webp',

      icon:
        '/icons/items/defense/capacete-dourado-icon.webp',
    },

    {
      id: 'elmo-encantado',

      name:
        'Elmo Encantado',

      slug:
        'elmo-encantado',

      type: 'item',

      sourcePile:
        'treasures',

      subtype:
        'defense',

      category:
        'helmet',

      slot:
        'head',

      power: 2,

      requiredLevel: 4,

      copies: 1,

      destroyable: true,

      tradeable: true,

      bonusClasses: [
        'mago',
        'vidente',
      ],

      passive:
        'Magos e Videntes recebem +2 de poder.',

      effectText:
        'Concede +2 de poder para Magos e Videntes.',

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
        'defense',
        'helmet',
        'mage',
        'oracle',
      ],

      image:
        '/cards/items/defense/helmets/elmo-encantado.webp',

      icon:
        '/icons/items/defense/elmo-encantado-icon.webp',
    },

  ]