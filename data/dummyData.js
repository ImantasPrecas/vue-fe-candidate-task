export const DUMMY_DATA = [
  {
    name: 'Category-1',
    children: [
      { name: 'C1-sub-Category-1' },
      { name: 'C1-sub-Category-2' },
      {
        name: 'C1-sub-Category-3',
        children: [
          { name: 'C1-sub-C3-sub-Category-1' },
          { name: 'C1-sub-C3-sub-Category-2' },
        ],
      },
    ],
  },
  {
    name: 'Category-2',
    children: [
      {
        name: 'C2-sub-Category-1',
        children: [{ name: 'C2-sub-C1-sub-Category-1' }],
      },
      { name: 'C2-sub-Category-2' },
      {
        name: 'C2-sub-Category-3',
        children: [
          { name: 'C2-sub-C3-sub-Category-1' },
          { name: 'C2-sub-C3-sub-Category-2' },
        ],
      },
    ],
  },
];
