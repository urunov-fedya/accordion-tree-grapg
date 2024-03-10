import { TAccordionData } from '../../components/core/Accordions/AccordionTree/types';

export const accordionData: TAccordionData[] = [
  {
    id: 1,
    title: 'Smokes',
    children: [
      {
        id: '1A',
        title: 'CT',
        children: [
          {id: '', title: 'From half wall'},
          {id: '', title: 'From car'},
          {id: '', title: 'From ct Base'},
        ],
      },
      {
        id: '1B',
        title: 'A long',
        children: [
          {id: '', title: 'From top mid'},
          {id: '', title: 'From 2nd mid'},
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Flashes',
    children: [
      {
        id: '2A',
        title: 'Pit',
        children: [
          {id: '', title: 'From t top mid'},
          {id: '', title: 'From 2nd mid'},
          {id: '', title: 'From apps'},
        ],
      },
      {id: '2B', title: 'Bomb A', children: [{id: '', title: 'From banana'}]},
    ],
  },
  {
    id: 3,
    title: 'Molotovs',
    children: [
      {
        id: '3A',
        title: 'Patio',
        children: [
          {id: '', title: 'From t top mid'},
          {id: '', title: 'From boiler'},
        ],
      },
      {
        id: '3B',
        title: 'Back site A',
        children: [{id: '', title: 'From A long'}],
      },
    ],
  },
];