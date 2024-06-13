import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const useAuthStore = create(
  immer(
    persist(
      (set) => ({
        accessToken: "",
        initUser: (token) => {
          set({ accessToken: token });
        },
      }),
      {
        name: "user-token",
      }
    )
  )
);

export default useAuthStore;
