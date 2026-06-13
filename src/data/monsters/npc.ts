import type {
  NpcCard,
} from '../../types/card'

export const npcMonsters:
  NpcCard[] = [
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
]