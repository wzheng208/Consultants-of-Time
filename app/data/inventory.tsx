export type WatchItem = {
  id: string;
  name: string;
  description?: string;
  note: string;
  price?: string;
  image?: string;
}

export const inventory: WatchItem[] = [
  {
    id: 'submariner',
    name: 'Rolex Submariner',
    note: 'Full set • 2021',
    price: 'Inquire',
  },
  {
    id: 'speedmaster',
    name: 'Omega Speedmaster',
    note: 'Excellent condition',
    price: 'Inquire',
  },
  {
    id: 'santos',
    name: 'Cartier Santos',
    note: 'Warranty card',
    price: 'Inquire',
  },
];