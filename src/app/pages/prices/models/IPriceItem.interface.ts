import { PriceType } from "../enums/price-type.enum";

export interface IPriceItem {
  title: string;
  price: number;
  description: string;
  priceType: PriceType;
}