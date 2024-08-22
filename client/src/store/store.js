import { create } from "zustand";

const useStore = create((set) => ({
  points: [],
  inc: (coord) => set(() => ({ points: coord })),
}));

export default useStore;
