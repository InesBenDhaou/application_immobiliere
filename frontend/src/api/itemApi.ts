import axios from "axios";
import type { Item,CreateItem,UpdateItem } from "../types/item";

const API_URL = "http://localhost:3001";

export const getItems = () => axios.get<Item[]>(`${API_URL}/items`);
export const getItemById = (id: string) => axios.get<Item>(`${API_URL}/items/${id}`);
export const createItem = (data: CreateItem) => axios.post<Item>(`${API_URL}/items`, data);
export const updateItem = (id: string, data: UpdateItem) => axios.put<Item>(`${API_URL}/items/${id}`, data);
export const deleteItem = (id: string) => axios.delete(`${API_URL}/items/${id}`);
