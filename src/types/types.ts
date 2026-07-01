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
