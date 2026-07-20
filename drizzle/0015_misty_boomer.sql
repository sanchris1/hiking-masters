ALTER TABLE "user_profile" DROP CONSTRAINT "user_profile_user_id_unique";--> statement-breakpoint
ALTER TABLE "user_profile" ADD PRIMARY KEY ("user_id");--> statement-breakpoint
ALTER TABLE "expedition" DROP COLUMN "slots_left";