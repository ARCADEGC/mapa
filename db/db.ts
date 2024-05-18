"use server";

import "@/lib/loadEnv";
import { db } from "@/db/migrate";

import { Map } from "@/db/schema";
import type { TSchemaMap } from "@/types/dbSchemas";

export async function getMaps() {
    return await db.select().from(Map);
}

export async function createMap(map: TSchemaMap) {
    return await db.insert(Map).values(map).returning();
}
