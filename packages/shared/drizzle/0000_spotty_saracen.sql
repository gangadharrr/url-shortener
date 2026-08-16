CREATE TABLE "links" (
	"shortCode" varchar(7) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"originalUrl" varchar NOT NULL,
	"isDeleted" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp NOT NULL,
	"created_at" timestamp NOT NULL,
	CONSTRAINT "links_shortCode_unique" UNIQUE("shortCode")
);
