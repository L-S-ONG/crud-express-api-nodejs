// src/items/items.service.ts

/**
 * Data Model Interfaces
 */
import { BaseItem, Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */
let items: Items = {
  0: {
    id: 1655616861234,
    name: "Nutella Hazelnut Spread",
    price: "$4.95"
  },
  1: {
    id: 1655616865678,
    name: "Skippy Peanut Butter Spread",
    price: "$6.15"
  },
  2: {
    id: 165561689123,
    name: "Golden Kaya - Panda",
    price: "$2.95"
  }
};

/**
 * Service Methods
 */
 
export const findAll = async (): Promise<Item[]> => Object.values(items);

export const find = async (id: number): Promise<Item> => items[id];

export const create = async (newItem: BaseItem): Promise<Item> => {
  const id = new Date().valueOf();

  items[id] = {
    id,
    ...newItem,
  };

  return items[id];
};

export const update = async (
  id: number,
  itemUpdate: BaseItem
): Promise<Item | null> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  items[id] = { id, ...itemUpdate };

  return items[id];
};

export const remove = async (id: number): Promise<null | void> => {
  const item = await find(id);

  if (!item) {
    return null;
  }

  delete items[id];
};