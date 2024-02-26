export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem {
  quantity: number;
  product: Product;
}

export interface Cart {
  items: CartItem[];
  total: number;
}
