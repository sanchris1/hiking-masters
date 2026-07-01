export type HikingTour = {
  id: number;
  image: string;
  category: "easy" | "moderate" | "hard";
  title: string;
  description: string;
};

export interface FeaturedHike {
  id: string;
  title: string;
  description: string;
  image: string;
  difficulty: "Easy" | "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  price: number;
  rating: number;
  location: string;
  distanceFromNairobi: string;
}

export interface UpcomingExpedition {
  id: string;
  title: string;
  destination: string;
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
}
