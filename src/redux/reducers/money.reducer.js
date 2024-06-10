//날짜 초기값
const today = new Date().toISOString().slice(0, 10);
//localStorage 값
const moneylist = JSON.parse(localStorage.getItem("moneylist"));
const month = localStorage.getItem("month");

const initMoneys = () => {
  if (moneylist !== null) {
    return moneylist;
  } else {
    return [];
  }
};

const initSelected = () => {
  if (month !== null) {
    return month;
  } else {
    return today.split("-")[1];
  }
};

//초기값 세팅
const initialState = {
  //전체 moneylist
  moneys: initMoneys(),

  //렌더링 시 마지막으로 선택한 월 저장
  selectedMonth: initSelected(),
};

//action creator
export const addMoneyList = (newMoneyItem, month) => {
  return {
    type: ADD_MONEY_LIST,
    payload: { newMoneyItem, month },
  };
};

export const changeMonth = (month) => {
  return {
    type: CHANGE_MONTH,
    payload: month,
  };
};

export const updateMoneyList = (updateMoneyLists) => {
  return {
    type: UPDATE_MONEY_LIST,
    payload: updateMoneyLists,
  };
};

export const deleteMoneyList = (deletedMoneyLists) => {
  return {
    type: DELETE_MONEY_LIST,
    payload: deletedMoneyLists,
  };
};

export const ADD_MONEY_LIST = "money/ADD_MONEY_LIST";
export const UPDATE_MONEY_LIST = "money/UPDATE_MONEY_LIST";
export const CHANGE_MONTH = "money/CHANGE_MONTH";
export const DELETE_MONEY_LIST = "money/DELETE_MONEY_LIST";

//리듀서
const moneyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONEY_LIST:
      return {
        ...state,
        moneys: [...state.moneys, action.payload.newMoneyItem],
        selectedMonth: action.payload.month,
      };
    case CHANGE_MONTH:
      return {
        ...state,
        selectedMonth: action.payload,
      };
    case UPDATE_MONEY_LIST:
      return {
        ...state,
        moneys: [...action.payload],
      };
    case DELETE_MONEY_LIST:
      return {
        ...state,
        moneys: [...action.payload],
      };

    default:
      return state;
  }
};

export default moneyReducer;
