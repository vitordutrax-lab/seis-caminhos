import type {
  Card,
} from '../../types/card'

export const spells: Card[] =
  [
    {
      id: 'capa-da-invisibilidade',

      name:
        'Capa da Invisibilidade',

      slug:
        'capa-da-invisibilidade',

      type: 'spell',

      power: 0,

      description:
        'O utilizador foge da batalha atual com todos os baús dos monstros.',

      restriction:
        'Descarta após uso.',

      copies: 2,

      image:
        '/cards/spells/capa-da-invisibilidade.webp',

      icon:
        '/icons/spells/capa-da-invisibilidade-icon.webp',

      tags: [
        'escape',
        'battle',
        'chests',
      ],
    },

    {
      id: 'centelha',

      name:
        'Centelha',

      slug:
        'centelha',

      type: 'spell',

      power: 0,

      description:
        'Destrói uma maldição escolhida.',

      restriction:
        'Descarta após uso.',

      copies: 3,

      image:
        '/cards/spells/centelha.webp',

      icon:
        '/icons/spells/centelha-icon.webp',

      tags: [
        'destroy',
        'curse',
      ],
    },

    {
      id: 'contrato-da-ganancia',

      name:
        'Contrato da Ganância',

      slug:
        'contrato-da-ganancia',

      type: 'spell',

      power: 0,

      description:
        'Troca 1 nível por 3 baús.',

      restriction:
        'Descarta após uso.',

      copies: 3,

      image:
        '/cards/spells/contrato-da-ganancia.webp',

      icon:
        '/icons/spells/contrato-da-ganancia-icon.webp',

      tags: [
        'levels',
        'chests',
      ],
    },

    {
      id: 'dados-viciados',

      name:
        'Dados Viciados',

      slug:
        'dados-viciados',

      type: 'spell',

      power: 0,

      description:
        'Permite rolar o dado novamente.',

      restriction:
        'Descarta após uso.',

      copies: 3,

      image:
        '/cards/spells/dados-viciados.webp',

      icon:
        '/icons/spells/dados-viciados-icon.webp',

      tags: [
        'dice',
        'reroll',
      ],
    },

    {
      id: 'moeda-da-sorte',

      name:
        'Moeda da Sorte',

      slug:
        'moeda-da-sorte',

      type: 'spell',

      power: 0,

      description:
        'Dobra o valor do dado.',

      restriction:
        'Descarta após uso.',

      copies: 3,

      image:
        '/cards/spells/moeda-da-sorte.webp',

      icon:
        '/icons/spells/moeda-da-sorte-icon.webp',

      tags: [
        'dice',
        'double',
      ],
    },

    {
      id: 'orbe-da-destruicao',

      name:
        'Orbe da Destruição',

      slug:
        'orbe-da-destruicao',

      type: 'spell',

      power: 0,

      description:
        'Destrói qualquer carta exceto raça.',

      restriction:
        'Descarta após uso.',

      copies: 4,

      image:
        '/cards/spells/orbe-da-destruicao.webp',

      icon:
        '/icons/spells/orbe-da-destruicao-icon.webp',

      tags: [
        'destroy',
      ],
    },

    {
      id: 'pacto-sagrado',

      name:
        'Pacto Sagrado',

      slug:
        'pacto-sagrado',

      type: 'spell',

      power: 0,

      description:
        'Obriga um personagem escolhido a ajudar na batalha.',

      restriction:
        'Descarta após uso.',

      copies: 2,

      image:
        '/cards/spells/pacto-sagrado.webp',

      icon:
        '/icons/spells/pacto-sagrado-icon.webp',

      tags: [
        'battle',
        'help',
      ],
    },

    {
      id: 'pergaminho-da-duplicacao',

      name:
        'Pergaminho da Duplicação',

      slug:
        'pergaminho-da-duplicacao',

      type: 'spell',

      power: 0,

      description:
        'Duplica um monstro escolhido.',

      restriction:
        'Descarta após uso.',

      copies: 4,

      image:
        '/cards/spells/pergaminho-da-duplicacao.webp',

      icon:
        '/icons/spells/pergaminho-da-duplicacao-icon.webp',

      tags: [
        'monster',
        'duplicate',
      ],
    },

    {
      id: 'pergaminho-da-invocacao',

      name:
        'Pergaminho da Invocação',

      slug:
        'pergaminho-da-invocacao',

      type: 'spell',

      power: 0,

      description:
        'Invoca um monstro da mão do utilizador para a batalha atual.',

      restriction:
        'Descarta após uso.',

      copies: 4,

      image:
        '/cards/spells/pergaminho-da-invocacao.webp',

      icon:
        '/icons/spells/pergaminho-da-invocacao-icon.webp',

      tags: [
        'monster',
        'summon',
      ],
    },

    {
      id: 'pergaminho-do-nivel',

      name:
        'Pergaminho do Nível',

      slug:
        'pergaminho-do-nivel',

      type: 'spell',

      power: 0,

      description:
        'Remove 1 nível de um personagem escolhido e concede 1 nível ao utilizador.',

      restriction:
        'Descarta após uso.',

      copies: 4,

      image:
        '/cards/spells/pergaminho-do-nivel.webp',

      icon:
        '/icons/spells/pergaminho-do-nivel-icon.webp',

      tags: [
        'levels',
      ],
    },

    {
  id: 'pocao-grande',

  name:
    'Poção Grande',

  slug:
    'pocao-grande',

  type: 'spell',

  power: 0,

  description:
    'Concede +8 de poder para personagem ou monstro escolhido.',

  restriction:
    'Descarta após uso.',

  copies: 3,

  image:
    '/cards/spells/pocao-grande.webp',

  icon:
    '/icons/spells/pocao-grande-icon.webp',

  tags: [
    'power',
    'buff',
  ],
},

{
  id: 'pocao-media',

  name:
    'Poção Média',

  slug:
    'pocao-media',

  type: 'spell',

  power: 0,

  description:
    'Concede +5 de poder para personagem ou monstro escolhido.',

  restriction:
    'Descarta após uso.',

  copies: 4,

  image:
    '/cards/spells/pocao-media.webp',

  icon:
    '/icons/spells/pocao-media-icon.webp',

  tags: [
    'power',
    'buff',
  ],
},

{
  id: 'pocao-pequena',

  name:
    'Poção Pequena',

  slug:
    'pocao-pequena',

  type: 'spell',

  power: 0,

  description:
    'Concede +3 de poder para personagem ou monstro escolhido.',

  restriction:
    'Descarta após uso.',

  copies: 5,

  image:
    '/cards/spells/pocao-pequena.webp',

  icon:
    '/icons/spells/pocao-pequena-icon.webp',

  tags: [
    'power',
    'buff',
  ],
},

{
  id: 'portal-encantado',

  name:
    'Portal Encantado',

  slug:
    'portal-encantado',

  type: 'spell',

  power: 0,

  description:
    'Teleporta o personagem escolhido para fora da batalha atual.',

  restriction:
    'Descarta após uso.',

  copies: 3,

  image:
    '/cards/spells/portal-encantado.webp',

  icon:
    '/icons/spells/portal-encantado-icon.webp',

  tags: [
    'teleport',
    'battle',
  ],
},

{
  id: 'protecao-arcana',

  name:
    'Proteção Arcana',

  slug:
    'protecao-arcana',

  type: 'spell',

  power: 0,

  description:
    'Bloqueia ou anula uma magia.',

  restriction:
    'Descarta após uso.',

  copies: 5,

  image:
    '/cards/spells/protecao-arcana.webp',

  icon:
    '/icons/spells/protecao-arcana-icon.webp',

  tags: [
    'counter',
    'magic',
  ],
},

{
  id: 'remocao',

  name:
    'Remoção',

  slug:
    'remocao',

  type: 'spell',

  power: 0,

  description:
    'Remove o monstro escolhido da batalha.',

  restriction:
    'Descarta após uso.',

  copies: 2,

  image:
    '/cards/spells/remocao.webp',

  icon:
    '/icons/spells/remocao-icon.webp',

  tags: [
    'monster',
    'remove',
  ],
},

{
  id: 'ressurreicao',

  name:
    'Ressurreição',

  slug:
    'ressurreicao',

  type: 'spell',

  power: 0,

  description:
    'Revive o último monstro derrotado para a batalha atual.',

  restriction:
    'Descarta após uso.',

  copies: 2,

  image:
    '/cards/spells/ressurreicao.webp',

  icon:
    '/icons/spells/ressurreicao-icon.webp',

  tags: [
    'monster',
    'revive',
  ],
},

{
  id: 'trocar-monstro',

  name:
    'Trocar Monstro',

  slug:
    'trocar-monstro',

  type: 'spell',

  power: 0,

  description:
    'Troca o monstro da batalha atual por um monstro escolhido da mão do utilizador.',

  restriction:
    'Descarta após uso.',

  copies: 2,

  image:
    '/cards/spells/trocar-monstro.webp',

  icon:
    '/icons/spells/trocar-monstro-icon.webp',

  tags: [
    'monster',
    'swap',
  ],
},

{
  id: 'trocar-personagem',

  name:
    'Trocar Personagem',

  slug:
    'trocar-personagem',

  type: 'spell',

  power: 0,

  description:
    'Troca o personagem da batalha atual por um personagem escolhido.',

  restriction:
    'Descarta após uso.',

  copies: 2,

  image:
    '/cards/spells/trocar-personagem.webp',

  icon:
    '/icons/spells/trocar-personagem-icon.webp',

  tags: [
    'character',
    'swap',
  ],
},
  ]