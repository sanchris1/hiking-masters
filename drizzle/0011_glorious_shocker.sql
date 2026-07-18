ALTER TABLE "booking" DROP CONSTRAINT "booking_user_id_unique";--> statement-breakpoint
CREATE INDEX "booking_index" ON "booking" USING btree ("id");