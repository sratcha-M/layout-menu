import { create } from "zustand";

type Store = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const useStore = create<Store>((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: { bears: number }) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
