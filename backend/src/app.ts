import fastify from "fastify";
import itemRoutes from "./routes/item.route";
import { ZodTypeProvider } from "fastify-type-provider-zod";
import cors from "@fastify/cors";

export const buildApp = () => {
  const app = fastify().withTypeProvider<ZodTypeProvider>(); 

  app.setValidatorCompiler(({ schema }) => {
    return (schema as any).parse.bind(schema);
  });

  app.get("/", async (request, reply) => {
    return { message: "Server is running! Welcome to the API." };
  });

  app.register(cors, {
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
  });

  app.register(itemRoutes);

  return app;
};
