export interface IProduct {
  id?: number | string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  short_desc?: string;
  about?: string;
}
