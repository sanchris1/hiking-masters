/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";
import { toggleFavoritesStore } from "./toggleFavoritesStore";
import axios from "axios";

const StoreInitializer = ({ session }: { session: any }) => {
  const { setFavorites } = toggleFavoritesStore((state) => state);

  useEffect(() => {
    if (!session) return;
    async function loadFavorites() {
      try {
        const { data } = await axios.get("/api/fav");

        console.log(data.favorites);

        setFavorites(data.favorites);
      } catch (error) {
        console.log(error);
      }
    }

    loadFavorites();
  }, [session]);

  return null;
};

export default StoreInitializer;
