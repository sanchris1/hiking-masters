CREATE TYPE "public"."bookingStatus" AS ENUM('pending', 'confirmed', 'completed', 'cancelled');--> statement-breakpoint
CREATE TYPE "public"."payment" AS ENUM('pending', 'cancelled', 'paid');--> statement-breakpoint
CREATE TABLE "payment" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"bookingId" uuid NOT NULL,
	"paymentStatus" "payment" DEFAULT 'pending',
	"amountPaid" integer DEFAULT 0 NOT NULL,
	"createdAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "booking" ADD COLUMN "bookingStatus" "bookingStatus" DEFAULT 'pending';--> statement-breakpoint
ALTER TABLE "payment" ADD CONSTRAINT "payment_bookingId_booking_id_fk" FOREIGN KEY ("bookingId") REFERENCES "public"."booking"("id") ON DELETE no action ON UPDATE no action;