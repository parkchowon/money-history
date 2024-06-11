import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useMoneyStore = create(
  immer((set) => {
    return {
      moneyItem: [],
      initMoneyList: () => {
        set(/**초기화 시킴 */);
      },
      addMoneyList: () => {
        set(/**배열에 추가 */);
      },
    };
  })
);

export default useMoneyStore;
