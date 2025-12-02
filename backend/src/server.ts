import { buildApp } from "./app";

const app = buildApp();

app.listen({ port: 3001 }, (err) => {
  if (err) throw err;
  console.log("Server running on http://localhost:3001");
});
