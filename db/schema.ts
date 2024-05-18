import { json, pgTable, uuid } from "drizzle-orm/pg-core";

export const Map = pgTable("map", {
    id: uuid("id").unique().notNull().defaultRandom(),
    map: json("mapJson"),
});
