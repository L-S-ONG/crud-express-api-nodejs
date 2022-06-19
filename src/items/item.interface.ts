// src/items/item.interface.ts

export interface BaseItem {
  name: string;
  price: number;
}

export interface Item extends BaseItem {
  id: number;
}