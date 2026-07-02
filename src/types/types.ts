export type HikingTour = {
  id: number;
  image: string;
  category: "easy" | "moderate" | "hard";
  title: string;
  description: string;
};

export interface UpcomingExpedition {
  id: string;
  title: string;
  image: string;
  departureDate: string;
  returnDate: string;
  duration: string;
  difficulty: "Easy" | "Beginner" | "Intermediate" | "Advanced";
  price: number;
  slotsLeft: number;
  capacity: number;
  meetingPoint: string;
  guide: string;
  status: "Open" | "Almost Full" | "Limited" | "Sold Out";
  description: string;
  distanceFromNairobi: string;
  rating: number;
  location: string;
  costBreakdown: {
    entryFee: number;
    transport: number;
    accommodation?: number;
    meals: number;
    guideFee: number;
    taxesAndLevies: number;
    other: number;
  };
}
