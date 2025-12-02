import { FastifyInstance } from "fastify";
import { ItemSchema, ItemDTO } from "../schemas/item.schema";

import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} from "../services/item.service";

export default async function itemRoutes(app: FastifyInstance) {

  app.get("/items", () => getAllItems());

  app.get("/items/:id", (req, reply) => {
    const { id } = req.params as { id: string };
    const item = getItemById(id);
    if (!item) return reply.status(404).send({ error: "Not found" });
    return item;
  });

  app.post<{ Body: ItemDTO }>("/items", {
    schema: { body: ItemSchema }
  }, (req, reply) => {
    return createItem(req.body);
  });

  app.put<{ Params: { id: string }; Body: ItemDTO }>("/items/:id", {
    schema: { body: ItemSchema }
  }, (req, reply) => {
    const { id } = req.params;
    const updated = updateItem(id, req.body);
    if (!updated) return reply.status(404).send({ error: "Not found" });
    return updated;
  });

  app.delete<{ Params: { id: string } }>("/items/:id", (req, reply) => {
    const { id } = req.params;
    const ok = deleteItem(id);
    if (!ok) return reply.status(404).send({ error: "Not found" });
    return { success: true };
  });
}
