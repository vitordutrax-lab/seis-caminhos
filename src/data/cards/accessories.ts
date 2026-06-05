import type {
  Card,
} from '../../types/card'

export const accessories: Card[] =
  [
    // =========================
    // ANEL DA FORÇA
    // =========================

    {
      id: 'anel-do-poder',

      name:
        'Anel do Poder',

      slug:
        'anel-do-poder',

      type: 'accessory',

      sourcePile:
        'treasures',

      slot:
        'accessory',

      power: 2,

      requiredLevel: 5,

      copies: 2,

      destroyable: true,

      tradeable: true,

      passive:
        'Concede +2 de poder.',

      restriction:
        'Apenas um anel por personagem.',

      effectText:
        'Recebe +2 de poder permanentemente.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',

          description:
            'Recebe +2 de poder.',
        },
      ],

      tags: [
        'accessory',
        'ring',
        'power',
      ],

      image:
        '/cards/accessories/anel-do-poder.webp',

      icon:
        '/icons/accessories/anel-do-poder-icon.webp',
    },

    // =========================
    // BOLSA DE VIAGEM
    // =========================

    {
      id: 'bolsa-de-mao',

      name:
        'Bolsa de-Mão',

      slug:
        'bolsa-de-mao',

      type: 'accessory',

      sourcePile:
        'treasures',

      slot:
        'accessory',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      passive:
        'Permite carregar 2 baús adicionais na mão.',

      restriction:
        'Apenas uma bolsa por personagem.',

      effectText:
        'Aumenta o limite da mão em 2 cartas.',

      ruleModifiers: [
        {
          type:
            'increase_hand_limit',

          amount: 2,

          description:
            'Permite carregar 2 baús adicionais.',
        },
      ],

      tags: [
        'accessory',
        'hand',
        'bags',
      ],

      image:
        '/cards/accessories/bolsa-de-mao.webp',

      icon:
        '/icons/accessories/bolsa-de-mao-icon.webp',
    },

    // =========================
    // COROA ENCANTADA
    // =========================

    {
      id: 'coroa-da-metamorfose',

      name:
        'Coroa da Metamorfose',

      slug:
        'coroa-da-metamorfose',

      type: 'accessory',

      sourcePile:
        'treasures',

      slot:
        'accessory',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      passive:
        'Permite possuir uma classe adicional.',

      restriction:
        'Se a classe equipada for removida, destruída ou roubada, a Coroa Encantada é descartada. Apenas uma coroa por personagem.',

      effectText:
        'Permite equipar uma classe adicional.',

      ruleModifiers: [
        {
          type:
            'allow_extra_class',

          description:
            'Permite possuir uma classe adicional.',
        },
      ],

      tags: [
        'accessory',
        'class',
        'rules',
      ],

      image:
        '/cards/accessories/coroa-da-metamorfose.webp',

      icon:
        '/icons/accessories/coroa-da-metamorfose-icon.webp',
    },

    // =========================
    // PULSEIRA DA SORTE
    // =========================

    {
      id: 'pulseira-da-sorte',

      name:
        'Pulseira da Sorte',

      slug:
        'pulseira-da-sorte',

      type: 'accessory',

      sourcePile:
        'treasures',

      slot:
        'accessory',

      power: 0,

      copies: 2,

      destroyable: true,

      tradeable: true,

      passive:
        'Permite equipar qualquer item sem receber o bônus do item.',

      restriction:
        'Se o item equipado for removido, destruído ou roubado, a Pulseira da Sorte é descartada. Apenas uma pulseira por personagem.',

      effectText:
        'Ignora restrições de equipamentos.',

      ruleModifiers: [
        {
          type:
            'ignore_item_restrictions',

          description:
            'Permite equipar qualquer item.',
        },
      ],

      tags: [
        'accessory',
        'equipment',
        'rules',
      ],

      image:
        '/cards/accessories/pulseira-da-sorte.webp',

      icon:
        '/icons/accessories/pulseira-da-sorte-icon.webp',
    },

    // =========================
    // COLAR DO PODER
    // =========================

    {
      id: 'colar-do-poder',

      name:
        'Colar do Poder',

      slug:
        'colar-do-poder',

      type: 'accessory',

      sourcePile:
        'treasures',

      slot:
        'accessory',

      power: 2,

      requiredLevel: 5,

      copies: 2,

      destroyable: true,

      tradeable: true,

      passive:
        'Concede +2 de poder.',

      restriction:
        'Apenas um colar por personagem.',

      effectText:
        'Recebe +2 de poder permanentemente.',

      effects: [
        {
          type:
            'gain_power',

          amount: 2,

          target:
            'self',

          duration:
            'permanent',

          description:
            'Recebe +2 de poder.',
        },
      ],

      tags: [
        'accessory',
        'necklace',
        'power',
      ],

      image:
        '/cards/accessories/colar-do-poder.webp',

      icon:
        '/icons/accessories/colar-do-poder-icon.webp',
    },
  ]