import { create } from "zustand";

interface FavoritesStore {
  favorites: string[];
  setFavorites: (favorites: string[]) => void;
  toggleFavorites: (id: string) => void;
  resetFavorites: () => void;
}

export const toggleFavoritesStore = create<FavoritesStore>()((set) => ({
  favorites: [],
  toggleFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites.filter((fav) => fav !== id)
        : [...state.favorites, id],
    })),

  setFavorites: (favorites) => set({ favorites }),

  resetFavorites: () => set({ favorites: [] }),
}));
