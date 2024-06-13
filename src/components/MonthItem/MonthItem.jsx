import styled from "styled-components";
import { useShallow } from "zustand/react/shallow";
import useMoneyStore from "../../zustand/moneyStore";

function MonthItem({ month: currentMonth }) {
  const { month, setMonth } = useMoneyStore(
    useShallow((state) => ({
      month: state.month,
      setMonth: state.setMonth,
    }))
  );

  const localMonth = localStorage.getItem("month");

  //월 클릭 시
  const handleClickBtn = (month) => {
    setMonth(month);
    localStorage.setItem("month", month);
  };

  return (
    <Wrapper
      $selectedMonth={month}
      $month={currentMonth}
      $localMonth={localMonth}
      onClick={() => handleClickBtn(currentMonth)}
    >
      {currentMonth}월
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: ${(props) =>
    props.$selectedMonth == props.$month ? "mediumaquamarine" : "#e9e9e9"};
  color: ${(props) =>
    props.$selectedMonth == props.$month ? "white" : "black"};
  border: transparent;
  border-radius: 20px;
  height: 35px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;

  cursor: pointer;
  &:hover {
    background-color: mediumaquamarine;
    color: white;
  }
`;

export default MonthItem;
