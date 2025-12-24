CREATE TABLE "favourites" (
	"id" serial PRIMARY KEY NOT NULL,
	"video_id" varchar(20) NOT NULL,
	"title" text,
	"thumbnail" text,
	"channel" text,
	"added_at" timestamp DEFAULT now(),
	CONSTRAINT "favourites_video_id_unique" UNIQUE("video_id")
);
--> statement-breakpoint
CREATE TABLE "themes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"slug" varchar(100) NOT NULL,
	"search_query" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "themes_name_unique" UNIQUE("name"),
	CONSTRAINT "themes_slug_unique" UNIQUE("slug")
);
