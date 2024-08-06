export interface CartItem {
  id: number | string;
  name: string;
  description: string;
  price: number | string;
  // sale?: number
  short_description?: string;
  // category?: string;
  image: string;
  quantity: number;
}
