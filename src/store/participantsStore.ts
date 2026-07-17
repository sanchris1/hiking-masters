import { create } from "zustand";

interface ParticipantsStoreState {
  participants: number;
  incrementParticipants: (capacity: number) => void;
  decrementParticipants: () => void;
  reset: () => void;
}

export const useParticipantsStore = create<ParticipantsStoreState>()((set) => ({
  participants: 1,

  incrementParticipants: (capacity) =>
    set((state) => ({
      participants: Math.min(capacity, state.participants + 1),
    })),

  decrementParticipants: () =>
    set((state) => ({ participants: Math.max(1, state.participants - 1) })),

  reset: () => set({ participants: 1 }),
}));
