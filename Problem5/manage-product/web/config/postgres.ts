import { DataSource } from "typeorm";
import { Product } from "../entity/product";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "postgres",
  port: parseInt(process.env.DB_PORT || "5432"),
  username: process.env.DB_USERNAME || "library",
  password: process.env.DB_PASSWORD || "12345",
  database: process.env.DB_DATABASE || "library",
  synchronize: true,
  logging: true,
  entities: [Product],
  subscribers: [],
  migrations: [],
}); 