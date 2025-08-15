export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  applyDiscount: (percent: number) => number;
};

export const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 1500,
    category: "Electronics",
    stock: 10,
    applyDiscount: (p) => p * 0.9
  },
  {
    id: 2,
    name: "Mouse",
    price: 25,
    category: "Electronics",
    stock: 200,
    applyDiscount: (p) => p * 0.8
  },
  {
    id: 3,
    name: "Keyboard",
    price: 45,
    category: "Electronics",
    stock: 150,
    applyDiscount: (p) => p * 0.85
  }
];
