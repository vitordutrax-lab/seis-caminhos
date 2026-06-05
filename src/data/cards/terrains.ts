import type {
  Card,
} from '../../types/card'

export const terrains: Card[] =
  [
    // =========================
    // TERRENO DE ÁGUA
    // =========================

    {
      id: 'terreno-de-agua',

      name:
        'Terreno de Água',

      slug:
        'terreno-de-agua',

      type: 'terrain',

      sourcePile:
        'terrains',

      power: 0,

      copies: 3,

      destroyable: false,

      tradeable: false,

      terrainBonusElement:
        'water',

      terrainPenaltyElement:
        'fire',

      terrainBonusPower: 3,

      terrainPenaltyPower: -2,

      persistentUntilNextRotation:
        true,

      description:
        'Personagens e monstros do elemento Água recebem +3 de poder.',

      effectText:
        'Personagens do elemento Fogo recebem -2 de poder.',

      effects: [
        {
          type:
            'terrain_element_bonus',

          target:
            'terrain',

          amount: 3,

          duration:
            'permanent',
        },

        {
          type:
            'terrain_element_penalty',

          target:
            'terrain',

          amount: 2,

          duration:
            'permanent',
        },
      ],

      tags: [
        'terrain',
        'water',
      ],

      image:
        '/cards/terrains/terreno-de-agua.webp',

      art:
        '/arts/terrains/terreno-de-agua-art.webp',
    },

    // =========================
    // TERRENO DE AR
    // =========================

    {
      id: 'terreno-de-ar',

      name:
        'Terreno de Ar',

      slug:
        'terreno-de-ar',

      type: 'terrain',

      sourcePile:
        'terrains',

      power: 0,

      copies: 3,

      destroyable: false,

      tradeable: false,

      terrainBonusElement:
        'air',

      terrainPenaltyElement:
        'earth',

      terrainBonusPower: 3,

      terrainPenaltyPower: -2,

      persistentUntilNextRotation:
        true,

      description:
        'Personagens e monstros do elemento Ar recebem +3 de poder.',

      effectText:
        'Personagens do elemento Terra recebem -2 de poder.',

      effects: [
        {
          type:
            'terrain_element_bonus',

          target:
            'terrain',

          amount: 3,

          duration:
            'permanent',
        },

        {
          type:
            'terrain_element_penalty',

          target:
            'terrain',

          amount: 2,

          duration:
            'permanent',
        },
      ],

      tags: [
        'terrain',
        'air',
      ],

      image:
        '/cards/terrains/terreno-de-ar.webp',

      art:
        '/arts/terrains/terreno-de-ar-art.webp',
    },

    // =========================
    // TERRENO DE ESCURIDÃO
    // =========================

    {
      id: 'terreno-de-escuridao',

      name:
        'Terreno de Escuridão',

      slug:
        'terreno-de-escuridao',

      type: 'terrain',

      sourcePile:
        'terrains',

      power: 0,

      copies: 3,

      destroyable: false,

      tradeable: false,

      terrainBonusElement:
        'darkness',

      terrainPenaltyElement:
        'light',

      terrainBonusPower: 3,

      terrainPenaltyPower: -2,

      persistentUntilNextRotation:
        true,

      description:
        'Personagens e monstros do elemento Escuridão recebem +3 de poder.',

      effectText:
        'Personagens do elemento Luz recebem -2 de poder.',

      effects: [
        {
          type:
            'terrain_element_bonus',

          target:
            'terrain',

          amount: 3,

          duration:
            'permanent',
        },

        {
          type:
            'terrain_element_penalty',

          target:
            'terrain',

          amount: 2,

          duration:
            'permanent',
        },
      ],

      tags: [
        'terrain',
        'darkness',
      ],

      image:
        '/cards/terrains/terreno-de-escuridao.webp',

      art:
        '/arts/terrains/terreno-de-escuridao-art.webp',
    },

    // =========================
    // TERRENO DE FOGO
    // =========================

    {
      id: 'terreno-de-fogo',

      name:
        'Terreno de Fogo',

      slug:
        'terreno-de-fogo',

      type: 'terrain',

      sourcePile:
        'terrains',

      power: 0,

      copies: 3,

      destroyable: false,

      tradeable: false,

      terrainBonusElement:
        'fire',

      terrainPenaltyElement:
        'air',

      terrainBonusPower: 3,

      terrainPenaltyPower: -2,

      persistentUntilNextRotation:
        true,

      description:
        'Personagens e monstros do elemento Fogo recebem +3 de poder.',

      effectText:
        'Personagens do elemento Ar recebem -2 de poder.',

      effects: [
        {
          type:
            'terrain_element_bonus',

          target:
            'terrain',

          amount: 3,

          duration:
            'permanent',
        },

        {
          type:
            'terrain_element_penalty',

          target:
            'terrain',

          amount: 2,

          duration:
            'permanent',
        },
      ],

      tags: [
        'terrain',
        'fire',
      ],

      image:
        '/cards/terrains/terreno-de-fogo.webp',

      art:
        '/arts/terrains/terreno-de-fogo-art.webp',
    },

    // =========================
    // TERRENO DE LUZ
    // =========================

    {
      id: 'terreno-de-luz',

      name:
        'Terreno de Luz',

      slug:
        'terreno-de-luz',

      type: 'terrain',

      sourcePile:
        'terrains',

      power: 0,

      copies: 3,

      destroyable: false,

      tradeable: false,

      terrainBonusElement:
        'light',

      terrainPenaltyElement:
        'darkness',

      terrainBonusPower: 3,

      terrainPenaltyPower: -2,

      persistentUntilNextRotation:
        true,

      description:
        'Personagens e monstros do elemento Luz recebem +3 de poder.',

      effectText:
        'Personagens do elemento Escuridão recebem -2 de poder.',

      effects: [
        {
          type:
            'terrain_element_bonus',

          target:
            'terrain',

          amount: 3,

          duration:
            'permanent',
        },

        {
          type:
            'terrain_element_penalty',

          target:
            'terrain',

          amount: 2,

          duration:
            'permanent',
        },
      ],

      tags: [
        'terrain',
        'light',
      ],

      image:
        '/cards/terrains/terreno-de-luz.webp',

      art:
        '/arts/terrains/terreno-de-luz-art.webp',
    },

    // =========================
    // TERRENO DE TERRA
    // =========================

    {
      id: 'terreno-de-terra',

      name:
        'Terreno de Terra',

      slug:
        'terreno-de-terra',

      type: 'terrain',

      sourcePile:
        'terrains',

      power: 0,

      copies: 3,

      destroyable: false,

      tradeable: false,

      terrainBonusElement:
        'earth',

      terrainPenaltyElement:
        'water',

      terrainBonusPower: 3,

      terrainPenaltyPower: -2,

      persistentUntilNextRotation:
        true,

      description:
        'Personagens e monstros do elemento Terra recebem +3 de poder.',

      effectText:
        'Personagens do elemento Água recebem -2 de poder.',

      effects: [
        {
          type:
            'terrain_element_bonus',

          target:
            'terrain',

          amount: 3,

          duration:
            'permanent',
        },

        {
          type:
            'terrain_element_penalty',

          target:
            'terrain',

          amount: 2,

          duration:
            'permanent',
        },
      ],

      tags: [
        'terrain',
        'earth',
      ],

      image:
        '/cards/terrains/terreno-de-terra.webp',

      art:
        '/arts/terrains/terreno-de-terra-art.webp',
    },

    // =========================
    // ACAMPAMENTO DOS HERÓIS
    // =========================

    {
      id: 'acampamento-dos-herois',

      name:
        'Acampamento dos Heróis',

      slug:
        'acampamento-dos-herois',

      type: 'terrain',

      sourcePile:
        'terrains',

      power: 0,

      copies: 2,

      destroyable: false,

      tradeable: false,

      persistentUntilNextRotation:
        true,

      description:
        'Antes da batalha, personagens podem escolher receber 1 baú ao invés de batalhar.',

      effectText:
        'Não é necessário comprar carta de monstro.',

      effects: [
        {
          type:
            'skip_battle_gain_chest',

          target:
            'player',

          amount: 1,

          duration:
            'instant',
        },
      ],

      tags: [
        'terrain',
        'camp',
      ],

      image:
        '/cards/terrains/acampamento-dos-herois.webp',

      art:
        '/arts/terrains/acampamento-dos-herois-art.webp',
    },
  ]