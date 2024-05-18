import { createMap } from "@/db/db";
import { TMap } from "@/types/dbSchemas";
import { randomUUID } from "crypto";

const newMap: TMap = {
    rows: 3,
    points: [
        [0, 1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 3, 2, 0, 0, 0, 0, 0],
        [0, 3, 0, 0, 4, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 3, 0],
        [0, 0, 4, 0, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 0, 0, 3],
        [0, 0, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 3, 0, 2, 2, 0, 0],
        [0, 0, 0, 0, 0, 3, 0, 0, 0],
    ],
};

async function main() {
    await createMap({ id: randomUUID(), map: newMap });

    process.exit();
}

main();
