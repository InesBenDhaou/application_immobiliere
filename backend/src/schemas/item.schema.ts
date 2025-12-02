import { z } from "zod";

export const ItemSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères"),
  city: z.string().min(2, "La ville doit contenir au moins 2 caractères"),
  price: z.number().positive("Le prix doit être > 0"),
  surface: z.number().positive("La surface doit être > 0"),
});

export type ItemDTO = z.infer<typeof ItemSchema>;
