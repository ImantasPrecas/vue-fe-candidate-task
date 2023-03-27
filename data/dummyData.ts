export const DUMMY_DATA_BKP = {
  name: 'Categories',
  children: [
    {
      name: 'Suaugusiems',
      children: [
        {
          name: 'Didzioji sale',
          children: [{ name: 'Pasirinkimas' }, { name: 'Gelezis ir sidabras' }],
        },
        { name: 'Mazoji sale', children: [{ name: 'Karalius Ubu' }, { name: 'Vilis' }] },
      ],
    },
    {
      name: 'Vaikams',
      children: [
        {
          name: 'Didzioji sale',
          children: [{ name: 'Pinokis' }, { name: 'Pasirinkimas' }],
        },
        { name: 'Mazoji sale', children: [{ name: 'Antis' }, { name: 'Evoliucija' }] },
      ],
    },
  ],
};

// id: Date.now(),
//   name: '',
//   lastname: '',
//   email: '',
//   age: null,
//   gender: '',
//   password: '',
//   category: ''

export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  age: number | null;
  gender: string;
  password: string;
  category: string;
}

export interface Data {
  name: string;
  children?: Data[];
  users?: User[];
}

export const DUMMY_DATA: Data[] = [
  {
    name: 'Suaugusiems',
    children: [
      {
        name: 'S-Didzioji sale',
        children: [
          { name: 'Smelio zmogus', users: [] },
          {
            name: 'Gelezis ir sidabras',
            users: [],
          },
        ],
      },
      {
        name: 'S-Mazoji sale',
        children: [
          { name: 'Karalius Ubu', users: [] },
          { name: 'Vilis', users: [] },
        ],
      },
    ],
    users: [],
  },
  {
    name: 'Vaikams',
    children: [
      {
        name: 'V-Didzioji sale',
        children: [
          { name: 'Pinokis', users: [] },
          { name: 'Pasirinkimas', users: [] },
        ],
      },
      {
        name: 'V-Mazoji sale',
        children: [
          { name: 'Antis', users: [] },
          { name: 'Evoliucija', users: [] },
        ],
      },
    ],
    users: [],
  },
];
