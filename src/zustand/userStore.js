import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useUserStore = create(
  immer((set) => ({
    user: {},
    loginUser: (data) => {
      set({ user: data });
    },
  }))
);

export default useUserStore;
