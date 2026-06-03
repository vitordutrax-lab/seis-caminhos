import type {
  Card,
} from '../../types/card'

export const races: Card[] =
  [
    {
      id: 'anao',

      name: 'Anão',

      slug: 'anao',

      type: 'race',

      element: 'fire',

      power: 0,

      passive:
        'Rei da Forja: concede +1 de poder às runas equipadas.',

      active:
        'Durante batalhas pode descartar uma carta da mão para rolar o dado novamente até 2 vezes por batalha.',

      copies: 2,

      image:
        '/cards/races/anao.webp',

      icon:
        '/icons/races/anao-icon.webp',

      tags: [
        'fire',
        'forge',
        'runes',
        'reroll',
      ],
    },

    {
      id: 'elfo',

      name: 'Elfo',

      slug: 'elfo',

      type: 'race',

      element: 'air',

      power: 0,

      passive:
        'Agilidade Élfica: concede +1 em todos os dados.',

      active:
        'Durante batalhas pode descartar 3 cartas da mão para fugir da batalha.',

      copies: 2,

      image:
        '/cards/races/elfo.webp',

      icon:
        '/icons/races/elfo-icon.webp',

      tags: [
        'air',
        'dice',
        'escape',
        'agility',
      ],
    },

    {
      id: 'gigante',

      name: 'Gigante',

      slug: 'gigante',

      type: 'race',

      element: 'earth',

      power: 0,

      passive:
        'Força Gigante: concede +3 de poder.',

      active:
        'Durante batalhas pode descartar uma carta da mão para ganhar +2 de poder uma vez por batalha.',

      copies: 2,

      image:
        '/cards/races/gigante.webp',

      icon:
        '/icons/races/gigante-icon.webp',

      tags: [
        'earth',
        'strength',
        'power',
        'combat',
      ],
    },

    {
      id: 'humano',

      name: 'Humano',

      slug: 'humano',

      type: 'race',

      element: 'water',

      power: 0,

      passive:
        'Adaptação Humana: permite possuir uma classe adicional.',

      active:
        'No turno pode descartar uma carta da mão para comprar 2 baús uma vez por turno.',

      copies: 2,

      image:
        '/cards/races/humano.webp',

      icon:
        '/icons/races/humano-icon.webp',

      tags: [
        'water',
        'class',
        'draw',
        'adaptation',
      ],
    },

    {
      id: 'meio-demonio',

      name: 'Meio-demônio',

      slug: 'meio-demonio',

      type: 'race',

      element: 'darkness',

      power: 0,

      passive:
        'Domínio Sombrio: permite carregar 2 baús adicionais na mão.',

      active:
        'Durante batalhas pode descartar 2 cartas da mão para bloquear uma magia uma vez por batalha.',

      copies: 2,

      image:
        '/cards/races/meio-demonio.webp',

      icon:
        '/icons/races/meio-demonio-icon.webp',

      tags: [
        'darkness',
        'magic',
        'counter',
        'hand-size',
      ],
    },

    {
      id: 'semideus',

      name: 'Semideus',

      slug: 'semideus',

      type: 'race',

      element: 'light',

      power: 0,

      passive:
        'Ascensão Divina: concede +1 de poder a cada 2 níveis e +1 de poder adicional.',

      active:
        'Durante batalhas pode descartar uma carta da mão para ganhar +1 de poder até 3 vezes por batalha.',

      copies: 2,

      image:
        '/cards/races/semideus.webp',

      icon:
        '/icons/races/semideus-icon.webp',

      tags: [
        'light',
        'levels',
        'scaling',
        'combat',
      ],
    },
  ]