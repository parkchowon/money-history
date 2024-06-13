import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const localMonth = localStorage.getItem("month");
const today = new Date();
const month = today.getMonth();

const useMoneyStore = create(
  immer((set) => ({
    month: localMonth ? localMonth : month,
    money: { moneyList: [] },
    initMoneys: (data) => {
      set((state) => {
        state.money.moneyList = data;
      });
    },
    addMoneys: (data) =>
      set((state) => {
        state.money.moneyList.push(data);
      }),
    setMonth: (data) => {
      set((state) => {
        state.month = data;
      });
    },
  }))
);

export default useMoneyStore;
