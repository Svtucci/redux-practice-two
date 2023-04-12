-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

-- Create a database called "activity_log"

CREATE TABLE "activity" (
	"id"            SERIAL PRIMARY KEY,
	"name"          VARCHAR(255),
	"type"          VARCHAR(255), -- e.g. running, walking, biking
    "minutes"       NUMERIC,
    "miles"         NUMERIC,
    "created_at"    TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO "activity" ("name", "type", "minutes", "miles") 
VALUES ('Chris', 'walk', 30, 1.4), ('Charlie', 'walk', 20, 1);

