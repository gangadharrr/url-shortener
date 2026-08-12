CREATE TABLE "links" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "links_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"shortCode" varchar(7) NOT NULL,
	"originalUrl" varchar NOT NULL,
	"updated_at" timestamp NOT NULL,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "links_shortCode_unique" UNIQUE("shortCode")
);
