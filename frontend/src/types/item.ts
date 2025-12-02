export interface Item {
  id?: string;
  title: string;
  city: string;
  price: number;
  surface: number;
}

export type CreateItem = Omit<Item, "id">;

export type UpdateItem = Partial<Omit<Item, "id">>;
