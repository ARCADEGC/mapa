import { UUID } from "crypto";

export type TSchemaMap = { id: UUID; map: TMap };

export type TMap = {
    rows: number;
    points: number[][];
};
