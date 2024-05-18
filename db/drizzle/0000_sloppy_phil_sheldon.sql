CREATE TABLE IF NOT EXISTS "map" (
	"id" uuid DEFAULT gen_random_uuid() NOT NULL,
	"mapJson" json,
	CONSTRAINT "map_id_unique" UNIQUE("id")
);
