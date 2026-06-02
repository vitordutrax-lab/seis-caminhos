import type { Card } from '../types/card'

export const cards: Card[] = [
  // =========================
  // RAÇAS
  // =========================

  {
    id: 'anao',

    name: 'Anão',

    slug: 'anao',

    type: 'race',

    element: ['fire'],

    description:
      'Rei da Forja: concede +1 de poder às runas equipadas.',

    effect:
      'Durante batalhas pode descartar uma carta da mão para rolar o dado novamente até 2 vezes por batalha.',

    image:
      '/cards/races/anao.webp',

    icon:
      '/icons/races/anao-icon.webp',
  },

  {
    id: 'elfo',

    name: 'Elfo',

    slug: 'elfo',

    type: 'race',

    element: ['air'],

    description:
      'Afinidade Natural: recebe +1 em fugas e expedições.',

    effect:
      'Sempre que rolar o dado para fugir ou em expedições recebe +1 no resultado.',

    image:
      '/cards/races/elfo.webp',

    icon:
      '/icons/races/elfo-icon.webp',
  },

  {
    id: 'gigante',

    name: 'Gigante',

    slug: 'gigante',

    type: 'race',

    element: ['earth'],

    power: 2,

    description:
      'Força Colossal: recebe +2 de poder base.',

    image:
      '/cards/races/gigante.webp',

    icon:
      '/icons/races/gigante-icon.webp',
  },

  {
    id: 'humano',

    name: 'Humano',

    slug: 'humano',

    type: 'race',

    element: ['light'],

    description:
      'Versatilidade Humana: pode equipar qualquer item ignorando restrições de raça.',

    image:
      '/cards/races/humano.webp',

    icon:
      '/icons/races/humano-icon.webp',
  },

  {
    id: 'meio-demonio',

    name: 'Meio-demônio',

    slug: 'meio-demonio',

    type: 'race',

    element: ['darkness'],

    description:
      'Pacto Sombrio: recebe +1 de poder para cada maldição equipada.',

    image:
      '/cards/races/meio-demonio.webp',

    icon:
      '/icons/races/meio-demonio-icon.webp',
  },

  {
    id: 'semideus',

    name: 'Semideus',

    slug: 'semideus',

    type: 'race',

    element: ['light'],

    power: 1,

    description:
      'Herança Divina: recebe +1 de poder base.',

    image:
      '/cards/races/semideus.webp',

    icon:
      '/icons/races/semideus-icon.webp',
  },

  // =========================
  // CLASSES
  // =========================

  {
    id: 'bardo',

    name: 'Bardo',

    slug: 'bardo',

    type: 'class',

    power: 1,

    description:
      'Canção da Vitória.',

    effect:
      'Recebe 1 baú adicional em todas as vitórias em batalhas que participar.',

    image:
      '/cards/classes/bardo.webp',

    icon:
      '/icons/classes/bardo-icon.webp',
  },

  {
    id: 'guardiao',

    name: 'Guardião',

    slug: 'guardiao',

    type: 'class',

    power: 1,

    description:
      'Proteção Valiosa.',

    effect:
      'Recebe 1 nível ao ajudar em batalhas vencidas.',

    image:
      '/cards/classes/guardiao.webp',

    icon:
      '/icons/classes/guardiao-icon.webp',
  },

  {
    id: 'guerreiro',

    name: 'Guerreiro',

    slug: 'guerreiro',

    type: 'class',

    power: 2,

    description:
      'Fúria.',

    effect:
      'Recebe +1 de poder para cada monstro derrotado, acumulando até +6. Ao fugir ou perder uma batalha, perde todos os acúmulos.',

    image:
      '/cards/classes/guerreiro.webp',

    icon:
      '/icons/classes/guerreiro-icon.webp',
  },

  {
    id: 'ladino',

    name: 'Ladino',

    slug: 'ladino',

    type: 'class',

    power: 1,

    description:
      'Mãos Ligeiras.',

    effect:
      'Pode descartar uma carta e rolar o dado. Com 4+ pode roubar um item ou acessório em jogo.',

    image:
      '/cards/classes/ladino.webp',

    icon:
      '/icons/classes/ladino-icon.webp',
  },

  {
    id: 'mago',

    name: 'Mago',

    slug: 'mago',

    type: 'class',

    power: 1,

    description:
      'Ruptura Arcana.',

    effect:
      'Pode descartar uma carta e rolar o dado. Com 4+ pode destruir um acessório, runa ou maldição.',

    image:
      '/cards/classes/mago.webp',

    icon:
      '/icons/classes/mago-icon.webp',
  },

  {
    id: 'vidente',

    name: 'Vidente',

    slug: 'vidente',

    type: 'class',

    power: 1,

    description:
      'Profecia.',

    effect:
      'Recebe +1 de poder para cada magia utilizada na batalha, acumulando até +6.',

    image:
      '/cards/classes/vidente.webp',

    icon:
      '/icons/classes/vidente-icon.webp',
  }

  // =========================
  // MAGIAS
  // =========================

  ,{
    id: 'capa-da-invisibilidade',

    name: 'Capa da Invisibilidade',

    slug: 'capa-da-invisibilidade',

    type: 'spell',

    subtype: 'utility',

    description:
      'Foge da batalha atual com todos os baús dos monstros.',

    image:
      '/cards/spells/control/capa-da-invisibilidade.webp',

    icon:
      '/icons/spells/control/capa-da-invisibilidade-icon.webp',
  },

  {
    id: 'centelha',

    name: 'Centelha',

    slug: 'centelha',

    type: 'spell',

    subtype: 'utility',

    description:
      'Destrói uma maldição escolhida.',

    image:
      '/cards/spells/utility/centelha.webp',

    icon:
      '/icons/spells/centelha-icon.webp',
  },

  {
    id: 'contrato-da-ganancia',

    name: 'Contrato da Ganância',

    slug: 'contrato-da-ganancia',

    type: 'spell',

    subtype: 'progression',

    description:
      'Troca 1 nível por 3 baús.',

    image:
      '/cards/spells/progression/contrato-da-ganancia.webp',

    icon:
      '/icons/spells/contrato-da-ganancia-icon.webp',
  },

  {
    id: 'dados-viciados',

    name: 'Dados Viciados',

    slug: 'dados-viciados',

    type: 'spell',

    subtype: 'utility',

    description:
      'Permite rolar o dado novamente.',

    image:
      '/cards/spells/utility/dados-viciados.webp',

    icon:
      '/icons/spells/dados-viciados-icon.webp',
  },

  {
    id: 'moeda-da-sorte',

    name: 'Moeda da Sorte',

    slug: 'moeda-da-sorte',

    type: 'spell',

    subtype: 'buff',

    description:
      'Dobra o valor do dado.',

    image:
      '/cards/spells/buffs/moeda-da-sorte.webp',

    icon:
      '/icons/spells/moeda-da-sorte-icon.webp',
  },

  {
    id: 'orbe-da-destruicao',

    name: 'Orbe da Destruição',

    slug: 'orbe-da-destruicao',

    type: 'spell',

    subtype: 'control',

    description:
      'Destrói qualquer carta exceto raça.',

    image:
      '/cards/spells/utility/orbe-da-destruicao.webp',

    icon:
      '/icons/spells/utility/orbe-da-destruicao-icon.webp',
  },

  {
    id: 'pacto-sagrado',

    name: 'Pacto Sagrado',

    slug: 'pacto-sagrado',

    type: 'spell',

    subtype: 'control',

    description:
      'Obriga um personagem escolhido a ajudar na batalha.',

    image:
      '/cards/spells/control/pacto-sagrado.webp',

    icon:
      '/icons/spells/pacto-sagrado-icon.webp',
  },

  {
    id: 'pergaminho-da-duplicacao',

    name: 'Pergaminho da Duplicação',

    slug: 'pergaminho-da-duplicacao',

    type: 'spell',

    subtype: 'summon',

    description:
      'Duplica um monstro escolhido.',

    image:
      '/cards/spells/summon/pergaminho-da-duplicacao.webp',

    icon:
      '/icons/spells/pergaminho-da-duplicacao-icon.webp',
  },

  {
    id: 'pergaminho-da-invocacao',

    name: 'Pergaminho da Invocação',

    slug: 'pergaminho-da-invocacao',

    type: 'spell',

    subtype: 'summon',

    description:
      'Invoca um monstro da mão para a batalha.',

    image:
      '/cards/spells/summon/pergaminho-da-invocacao.webp',

    icon:
      '/icons/spells/pergaminho-da-invocacao-icon.webp',
  },

  {
    id: 'pergaminho-do-nivel',

    name: 'Pergaminho do Nível',

    slug: 'pergaminho-do-nivel',

    type: 'spell',

    subtype: 'progression',

    description:
      'Remove 1 nível de um personagem e concede ao utilizador.',

    image:
      '/cards/spells/progression/pergaminho-do-nivel.webp',

    icon:
      '/icons/spells/pergaminho-do-nivel-icon.webp',
  },

  {
    id: 'pocao-grande',

    name: 'Poção Grande',

    slug: 'pocao-grande',

    type: 'spell',

    subtype: 'buff',

    power: 8,

    description:
      'Concede +8 de poder para personagem ou monstro.',

    image:
      '/cards/spells/buffs/pocao-grande.webp',

    icon:
      '/icons/spells/pocao-grande-icon.webp',
  },

  {
    id: 'pocao-media',

    name: 'Poção Média',

    slug: 'pocao-media',

    type: 'spell',

    subtype: 'buff',

    power: 5,

    description:
      'Concede +5 de poder para personagem ou monstro.',

    image:
      '/cards/spells/buffs/pocao-media.webp',

    icon:
      '/icons/spells/pocao-media-icon.webp',
  },

  {
    id: 'pocao-pequena',

    name: 'Poção Pequena',

    slug: 'pocao-pequena',

    type: 'spell',

    subtype: 'buff',

    power: 3,

    description:
      'Concede +3 de poder para personagem ou monstro.',

    image:
      '/cards/spells/buffs/pocao-pequena.webp',

    icon:
      '/icons/spells/pocao-pequena-icon.webp',
  },

  {
    id: 'portal-encantado',

    name: 'Portal Encantado',

    slug: 'portal-encantado',

    type: 'spell',

    subtype: 'control',

    description:
      'Teleporta um personagem para fora da batalha.',

    image:
      '/cards/spells/control/portal-encantado.webp',

    icon:
      '/icons/spells/portal-encantado-icon.webp',
  },

  {
    id: 'protecao-arcana',

    name: 'Proteção Arcana',

    slug: 'protecao-arcana',

    type: 'spell',

    subtype: 'counter',

    description:
      'Bloqueia ou anula uma magia.',

    image:
      '/cards/spells/counter/protecao-arcana.webp',

    icon:
      '/icons/spells/protecao-arcana-icon.webp',
  },

  {
    id: 'remocao',

    name: 'Remoção',

    slug: 'remocao',

    type: 'spell',

    subtype: 'control',

    description:
      'Remove um monstro da batalha.',

    image:
      '/cards/spells/control/remocao.webp',

    icon:
      '/icons/spells/remocao-icon.webp',
  },

  {
    id: 'ressurreicao',

    name: 'Ressurreição',

    slug: 'ressurreicao',

    type: 'spell',

    subtype: 'summon',

    description:
      'Revive o último monstro derrotado para a batalha.',

    image:
      '/cards/spells/summon/ressurreicao.webp',

    icon:
      '/icons/spells/ressurreicao-icon.webp',
  },

  {
    id: 'trocar-monstro',

    name: 'Trocar Monstro',

    slug: 'trocar-monstro',

    type: 'spell',

    subtype: 'control',

    description:
      'Troca o monstro da batalha atual.',

    image:
      '/cards/spells/control/trocar-monstro.webp',

    icon:
      '/icons/spells/trocar-monstro-icon.webp',
  },

  {
    id: 'trocar-personagem',

    name: 'Trocar Personagem',

    slug: 'trocar-personagem',

    type: 'spell',

    subtype: 'control',

    description:
      'Troca o personagem da batalha atual.',

    image:
      '/cards/spells/control/trocar-personagem.webp',

    icon:
      '/icons/spells/trocar-personagem-icon.webp',
  },

]
