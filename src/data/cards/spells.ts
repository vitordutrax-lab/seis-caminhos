import type {
  Card,
} from '../../types/card'

export const spells: Card[] =
  [
    // =========================
    // BUFFS
    // =========================

    {
      id: 'pocao-pequena',

      name:
        'Poção Pequena',

      slug:
        'pocao-pequena',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'buff',

      power: 0,

      copies: 5,

      destroyable: true,

      tradeable: true,

      description:
        '+3 de poder para o personagem ou monstro escolhido.',

      effectText:
        'Concede +3 de poder.',

      effects: [
        {
          type:
            'gain_power',

          amount: 3,

          target:
            'player',

          duration:
            'battle',
        },

        {
          type:
            'gain_power',

          amount: 3,

          target:
            'monster',

          duration:
            'battle',
        },
      ],

      tags: [
        'spell',
        'buff',
      ],

      image:
        '/cards/spells/buffs/pocao-pequena.webp',

      icon:
        '/icons/spells/pocao-pequena-icon.webp',
    },

    {
      id: 'pocao-media',

      name:
        'Poção Média',

      slug:
        'pocao-media',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'buff',

      power: 0,

      copies: 4,

      destroyable: true,

      tradeable: true,

      description:
        '+5 de poder para o personagem ou monstro escolhido.',

      effectText:
        'Concede +5 de poder.',

      effects: [
        {
          type:
            'gain_power',

          amount: 5,

          target:
            'player',

          duration:
            'battle',
        },

        {
          type:
            'gain_power',

          amount: 5,

          target:
            'monster',

          duration:
            'battle',
        },
      ],

      tags: [
        'spell',
        'buff',
      ],

      image:
        '/cards/spells/buffs/pocao-media.webp',

      icon:
        '/icons/spells/pocao-media-icon.webp',
    },

    {
      id: 'pocao-grande',

      name:
        'Poção Grande',

      slug:
        'pocao-grande',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'buff',

      power: 0,

      copies: 3,

      destroyable: true,

      tradeable: true,

      description:
        '+8 de poder para o personagem ou monstro escolhido.',

      effectText:
        'Concede +8 de poder.',

      effects: [
        {
          type:
            'gain_power',

          amount: 8,

          target:
            'player',

          duration:
            'battle',
        },

        {
          type:
            'gain_power',

          amount: 8,

          target:
            'monster',

          duration:
            'battle',
        },
      ],

      tags: [
        'spell',
        'buff',
      ],

      image:
        '/cards/spells/buffs/pocao-grande.webp',

      icon:
        '/icons/spells/pocao-grande-icon.webp',
    },

    {
      id: 'moeda-da-sorte',

      name:
        'Moeda da Sorte',

      slug:
        'moeda-da-sorte',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'buff',

      power: 0,

      copies: 3,

      destroyable: true,

      tradeable: true,

      description:
        'Dobra o valor do dado.',

      effectText:
        'O próximo resultado do dado é dobrado.',

      effects: [
        {
          type:
            'double_dice',

          target:
            'player',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'dice',
      ],

      image:
        '/cards/spells/buffs/moeda-da-sorte.webp',

      icon:
        '/icons/spells/moeda-da-sorte-icon.webp',
    },

    // =========================
    // CONTROL
    // =========================

    {
      id: 'capa-da-invisibilidade',

      name:
        'Capa da Invisibilidade',

      slug:
        'capa-da-invisibilidade',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'control',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      description:
        'O utilizador foge da batalha atual com todos os baús dos monstros.',

      effectText:
        'Fuja da batalha com todas as recompensas.',

      effects: [
        {
          type:
            'escape_battle',

          target:
            'battle',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'escape',
      ],

      image:
        '/cards/spells/control/capa-da-invisibilidade.webp',

      icon:
        '/icons/spells/capa-da-invisibilidade-icon.webp',
    },

    {
      id: 'pacto-sagrado',

      name:
        'Pacto Sagrado',

      slug:
        'pacto-sagrado',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'control',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      description:
        'O personagem escolhido é obrigado a ajudar na batalha.',

      effectText:
        'Força um jogador a ajudar.',

      effects: [
        {
          type:
            'force_help',

          target:
            'player',

          duration:
            'battle',
        },
      ],

      tags: [
        'spell',
        'control',
      ],

      image:
        '/cards/spells/control/pacto-sagrado.webp',

      icon:
        '/icons/spells/pacto-sagrado-icon.webp',
    },

    {
      id: 'portal-encantado',

      name:
        'Portal Encantado',

      slug:
        'portal-encantado',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'control',

      power: 0,

      copies: 3,

      destroyable: true,

      tradeable: true,

      description:
        'Teleporta o personagem escolhido para fora da batalha atual.',

      effectText:
        'Remove um jogador da batalha.',

      effects: [
        {
          type:
            'teleport_player',

          target:
            'player',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'control',
      ],

      image:
        '/cards/spells/control/portal-encantado.webp',

      icon:
        '/icons/spells/portal-encantado-icon.webp',
    },

    {
      id: 'remocao',

      name:
        'Remoção',

      slug:
        'remocao',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'control',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      description:
        'O monstro escolhido é removido da batalha.',

      effectText:
        'Remove um monstro da batalha.',

      effects: [
        {
          type:
            'remove_monster',

          target:
            'monster',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'control',
      ],

      image:
        '/cards/spells/control/remocao.webp',

      icon:
        '/icons/spells/remocao-icon.webp',
    },

    {
      id: 'trocar-monstro',

      name:
        'Trocar Monstro',

      slug:
        'trocar-monstro',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'control',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      description:
        'Troca o monstro da batalha atual por um monstro escolhido.',

      effectText:
        'Substitui um monstro da batalha.',

      effects: [
        {
          type:
            'swap_monster',

          target:
            'monster',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'control',
      ],

      image:
        '/cards/spells/control/trocar-monstro.webp',

      icon:
        '/icons/spells/trocar-monstro-icon.webp',
    },

    {
      id: 'trocar-personagem',

      name:
        'Trocar Personagem',

      slug:
        'trocar-personagem',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'control',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      description:
        'Troca o personagem da batalha atual por outro personagem.',

      effectText:
        'Substitui um jogador da batalha.',

      effects: [
        {
          type:
            'swap_player',

          target:
            'player',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'control',
      ],

      image:
        '/cards/spells/control/trocar-personagem.webp',

      icon:
        '/icons/spells/trocar-personagem-icon.webp',
    },

    // =========================
    // COUNTER
    // =========================

    {
      id: 'protecao-arcana',

      name:
        'Proteção Arcana',

      slug:
        'protecao-arcana',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'counter',

      power: 0,

      copies: 5,

      destroyable: true,

      tradeable: true,

      description:
        'Bloqueia ou anula uma magia.',

      effectText:
        'Cancela uma magia jogada.',

      effects: [
        {
          type:
            'counter_spell',

          target:
            'spell',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'counter',
      ],

      image:
        '/cards/spells/counter/protecao-arcana.webp',

      icon:
        '/icons/spells/protecao-arcana-icon.webp',
    },

    // =========================
    // PROGRESSION
    // =========================

    {
      id: 'contrato-da-ganancia',

      name:
        'Contrato da Ganância',

      slug:
        'contrato-da-ganancia',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'progression',

      power: 0,

      copies: 3,

      destroyable: true,

      tradeable: true,

      description:
        'Troca 1 nível por 3 baús.',

      effectText:
        'Perca 1 nível e compre 3 baús.',

      effects: [
        {
          type:
            'lose_levels',

          amount: 1,

          target:
            'player',

          duration:
            'instant',
        },

        {
          type:
            'draw_cards',

          amount: 3,

          target:
            'player',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'progression',
      ],

      image:
        '/cards/spells/progression/contrato-da-ganancia.webp',

      icon:
        '/icons/spells/contrato-da-ganancia-icon.webp',
    },

    {
      id: 'pergaminho-do-nivel',

      name:
        'Pergaminho do Nível',

      slug:
        'pergaminho-do-nivel',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'progression',

      power: 0,

      copies: 4,

      destroyable: true,

      tradeable: true,

      description:
        'Remove 1 nível de um personagem e concede 1 nível ao utilizador.',

      effectText:
        'Rouba 1 nível de outro jogador.',

      effects: [
        {
          type:
            'steal_level',

          target:
            'player',

          amount: 1,

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'progression',
      ],

      image:
        '/cards/spells/progression/pergaminho-do-nivel.webp',

      icon:
        '/icons/spells/pergaminho-do-nivel-icon.webp',
    },

    // =========================
    // SUMMON
    // =========================

    {
      id: 'pergaminho-da-duplicacao',

      name:
        'Pergaminho da Duplicação',

      slug:
        'pergaminho-da-duplicacao',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'summon',

      power: 0,

      copies: 4,

      destroyable: true,

      tradeable: true,

      description:
        'Duplica um monstro escolhido.',

      effectText:
        'Cria uma cópia do monstro escolhido.',

      effects: [
        {
          type:
            'duplicate_monster',

          target:
            'monster',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'summon',
      ],

      image:
        '/cards/spells/summon/pergaminho-da-duplicacao.webp',

      icon:
        '/icons/spells/pergaminho-da-duplicacao-icon.webp',
    },

    {
      id: 'pergaminho-da-invocacao',

      name:
        'Pergaminho da Invocação',

      slug:
        'pergaminho-da-invocacao',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'summon',

      power: 0,

      copies: 4,

      destroyable: true,

      tradeable: true,

      description:
        'Invoca um monstro da mão do utilizador para a batalha atual.',

      effectText:
        'Adiciona um monstro à batalha.',

      effects: [
        {
          type:
            'summon_monster',

          target:
            'monster',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'summon',
      ],

      image:
        '/cards/spells/summon/pergaminho-da-invocacao.webp',

      icon:
        '/icons/spells/pergaminho-da-invocacao-icon.webp',
    },

    {
      id: 'ressurreicao',

      name:
        'Ressurreição',

      slug:
        'ressurreicao',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'summon',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      description:
        'Revive o último monstro derrotado para a batalha atual.',

      effectText:
        'Traz de volta o último monstro derrotado.',

      effects: [
        {
          type:
            'revive_monster',

          target:
            'monster',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'summon',
      ],

      image:
        '/cards/spells/summon/ressurreicao.webp',

      icon:
        '/icons/spells/ressurreicao-icon.webp',
    },

    // =========================
    // UTILITY
    // =========================

    {
      id: 'centelha',

      name:
        'Centelha',

      slug:
        'centelha',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'utility',

      power: 0,

      copies: 3,

      destroyable: true,

      tradeable: true,

      description:
        'Destrói uma maldição à sua escolha.',

      effectText:
        'Remove uma maldição.',

      effects: [
        {
          type:
            'destroy_curse',

          target:
            'curse',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'utility',
      ],

      image:
        '/cards/spells/utility/centelha.webp',

      icon:
        '/icons/spells/centelha-icon.webp',
    },

    {
      id: 'dados-viciados',

      name:
        'Dados Viciados',

      slug:
        'dados-viciados',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'utility',

      power: 0,

      copies: 3,

      destroyable: true,

      tradeable: true,

      description:
        'Permite rolar o dado novamente.',

      effectText:
        'Realize uma nova rolagem.',

      effects: [
        {
          type:
            'reroll_dice',

          target:
            'player',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'utility',
      ],

      image:
        '/cards/spells/utility/dados-viciados.webp',

      icon:
        '/icons/spells/dados-viciados-icon.webp',
    },

    {
      id: 'orbe-da-destruicao',

      name:
        'Orbe da Destruição',

      slug:
        'orbe-da-destruicao',

      type: 'spell',

      sourcePile:
        'treasures',

      category:
        'utility',

      power: 0,

      copies: 4,

      destroyable: true,

      tradeable: true,

      description:
        'Destrói qualquer carta exceto raça.',

      effectText:
        'Remove uma carta do jogo.',

      effects: [
        {
          type:
            'destroy_card',

          target:
            'player',

          duration:
            'instant',
        },
      ],

      tags: [
        'spell',
        'utility',
      ],

      image:
        '/cards/spells/utility/orbe-da-destruicao.webp',

      icon:
        '/icons/spells/orbe-da-destruicao-icon.webp',
    },
  ]