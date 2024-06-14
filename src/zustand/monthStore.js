import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const localMonth = localStorage.getItem("month");
const today = new Date();
const month = today.getMonth();

const useMonthStore = create(
  immer((set) => ({
    month: localMonth ? localMonth : month,
    setMonth: (data) => {
      set((state) => {
        state.month = data;
      });
    },
  }))
);

export default useMonthStore;
