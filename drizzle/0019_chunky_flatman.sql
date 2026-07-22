ALTER TABLE "payment" RENAME TO "payments";--> statement-breakpoint
ALTER TABLE "payments" DROP CONSTRAINT "payment_bookingId_booking_id_fk";
--> statement-breakpoint
ALTER TABLE "payments" ADD CONSTRAINT "payments_bookingId_booking_id_fk" FOREIGN KEY ("bookingId") REFERENCES "public"."booking"("id") ON DELETE no action ON UPDATE no action;