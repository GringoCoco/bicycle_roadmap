import { create } from "zustand";

const useStore = create((set) => ({
  coords: [],
  inc: (coord) => set(() => ({ coords: coord })),
  deleteCoords: () => set(() => ({ coords: [] })),
}));

export default useStore;
