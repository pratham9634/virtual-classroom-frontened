import { create } from "zustand";


export const useChatStore = create((set) => ({
messages: [
{ user: "Teacher", text: "Welcome everyone!" },
{ user: "Alice", text: "Good morning!" },
],
send: (msg) => set((s) => ({ messages: [...s.messages, { user: "Me", text: msg }] })),
}));