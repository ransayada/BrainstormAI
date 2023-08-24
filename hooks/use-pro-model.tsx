import { create } from "zustand";

interface useProModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useProModal = create<useProModalStore>((set) => ({
  isOpen: false, //default false. change true for develope mode only
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
