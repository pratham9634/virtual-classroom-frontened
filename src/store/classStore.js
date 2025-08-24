// src/store/classStore.js
import { create } from "zustand";

export const useClassStore = create((set) => ({
  classes: [],

  createClass: (name) =>
    set((state) => ({
      classes: [
        ...state.classes,
        { id: Date.now(), name, code: Math.random().toString(36).substring(2, 7) },
      ],
    })),
}));
