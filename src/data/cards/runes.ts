import type {
  Card,
} from '../../types/card'

export const runes: Card[] =
  [
    // =========================
    // FORJADOR
    // =========================

    {
      id: 'forjador',

      name:
        'Forjador',

      slug:
        'forjador',

      type: 'blacksmith',

      sourcePile:
        'monsters',

      power: 0,

      copies: 1,

      destroyable: false,

      tradeable: false,

      permanent:
        true,

      description:
        'Ao encontrar o Forjador, ele entra automaticamente no jogo.',

      passive:
        'O jogador que revelou o Forjador não precisa pagar tributo para forjar.',

      effectText:
        'Descubra runas e forje itens utilizando o dado.',

      effects: [
        {
          type:
            'unlock_forge',

          target:
            'player',

          duration:
            'permanent',

          description:
            'Libera o sistema de forja para todos os jogadores.',
        },

        {
          type:
            'forge_item',

          target:
            'item',

          duration:
            'instant',

          description:
            'Permite forjar uma runa em um item.',
        },
      ],

      forgeRules: {
        tributeCards: 1,

        ownerFreeForge:
          true,

        diceResults: {
          brokenRune: [
            1,
            2,
          ],

          failedForge: [
            3,
            4,
          ],

          successForge: [
            5,
            6,
          ],
        },
      },

      tags: [
        'blacksmith',
        'forge',
        'rune',
        'npc',
      ],

      image:
        '/cards/monsters/npc/forjador.webp',

      icon:
        '/icons/monsters/npc/forjador-icon.webp',
    },

    // =========================
    // RUNA DE ATAQUE
    // =========================

    {
      id: 'runa-de-ataque',

      name:
        'Runa de Ataque',

      slug:
        'runa-de-ataque',

      type: 'rune',

      sourcePile:
        'treasures',

      power: 0,

      copies: 10,

      destroyable: true,

      tradeable: true,

      runeType:
        'attack',

      forgeableOn:
        'attack',

      effectText:
        '+2 de poder para o item de ataque forjado.',

      description:
        'Cada item só pode receber uma runa.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'item',

          duration:
            'permanent',

          description:
            'O item recebe +2 de poder.',
        },
      ],

      tags: [
        'rune',
        'attack',
        'forge',
      ],

      image:
        '/cards/runes/runa-de-ataque.webp',

      icon:
        '/icons/runes/runa-de-ataque-icon.webp',
    },

    // =========================
    // RUNA DE DEFESA
    // =========================

    {
      id: 'runa-de-defesa',

      name:
        'Runa de Defesa',

      slug:
        'runa-de-defesa',

      type: 'rune',

      sourcePile:
        'treasures',

      power: 0,

      copies: 10,

      destroyable: true,

      tradeable: true,

      runeType:
        'defense',

      forgeableOn:
        'defense',

      effectText:
        '+2 de poder para o item de defesa forjado.',

      description:
        'Cada item só pode receber uma runa.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'item',

          duration:
            'permanent',

          description:
            'O item recebe +2 de poder.',
        },
      ],

      tags: [
        'rune',
        'defense',
        'forge',
      ],

      image:
        '/cards/runes/runa-de-defesa.webp',

      icon:
        '/icons/runes/runa-de-defesa-icon.webp',
    },
  ]