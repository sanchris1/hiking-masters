CREATE TABLE "favorites" (
	"user_id" text PRIMARY KEY NOT NULL,
	"expedition_id" uuid NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL,
	"updatedAt" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "favorites_user_id_expedition_id_pk" PRIMARY KEY("user_id","expedition_id")
);
--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "favorites" ADD CONSTRAINT "favorites_expedition_id_expedition_id_fk" FOREIGN KEY ("expedition_id") REFERENCES "public"."expedition"("id") ON DELETE cascade ON UPDATE no action;