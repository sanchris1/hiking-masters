ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "expedition" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "expedition" ALTER COLUMN "image" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "user_id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user_profile" ADD COLUMN "user_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "schedule" DROP COLUMN "id";--> statement-breakpoint
ALTER TABLE "user_profile" DROP COLUMN "id";--> statement-breakpoint
ALTER TABLE "user_profile" DROP COLUMN "userId";