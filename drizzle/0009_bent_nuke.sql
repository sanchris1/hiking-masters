ALTER TABLE "booking" ADD COLUMN "special_request" varchar DEFAULT '';--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_id_unique" UNIQUE("user_id");