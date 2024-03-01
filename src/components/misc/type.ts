export interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  qty?: number;
  rating: {
    rate: number;
    count: number;
    initialCount?: number;
  };
}
