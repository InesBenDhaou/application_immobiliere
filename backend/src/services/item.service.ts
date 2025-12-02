import { readDB, writeDB } from "../utils/db";
import { randomUUID } from "crypto";
import { ItemDTO } from "../schemas/item.schema";

export const getAllItems = () => {
  const db = readDB();
  return db.items;
};

export const getItemById = (id: string) => {
  const db = readDB();
  return db.items.find((i: any) => i.id === id) || null;
};

export const createItem = (data: ItemDTO) => {
  const db = readDB();

  const newItem = {
    id: randomUUID(),
    ...data
  };

  db.items.push(newItem);
  writeDB(db);

  return newItem;
};

export const updateItem = (id: string, data: ItemDTO) => {
  const db = readDB();
  const index = db.items.findIndex((i: any) => i.id === id);

  if (index === -1) return null;

  db.items[index] = { ...db.items[index], ...data };
  writeDB(db);

  return db.items[index];
};

export const deleteItem = (id: string) => {
  const db = readDB();
  const index = db.items.findIndex((i: any) => i.id === id);

  if (index === -1) return false;

  db.items.splice(index, 1);
  writeDB(db);

  return true;
};
