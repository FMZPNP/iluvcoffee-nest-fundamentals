import { DataSource } from "typeorm";
import { CoffeeRefactor1692891802009 } from "./src/migrations/1692891802009-CoffeeRefactor";
import { Coffee } from "src/coffees/entities/coffee.entity";
import { Flavor } from "src/coffees/entities/flavor.entity";
import { SchemaSync1692893625587 } from "src/migrations/1692893625587-SchemaSync";

export default new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pass123",
    database: "postgres",
    entities: [Coffee, Flavor],
    migrations: [CoffeeRefactor1692891802009, SchemaSync1692893625587],
});