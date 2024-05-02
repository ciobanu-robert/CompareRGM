export interface IProduct {
  productID: number;
  name: string;
  category: string;
  price: number;
  size?: number;
  quantity?: number;
  _id?: string;
}