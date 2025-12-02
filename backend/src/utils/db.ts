import fs from "fs";
import path from "path";

const dbPath = path.join(__dirname, "../../db.json");

export function readDB() {
  const data = fs.readFileSync(dbPath, "utf8");
  return JSON.parse(data);
}

export function writeDB(data: any) {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}
