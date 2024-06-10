import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { changeMonth } from "../../redux/reducers/money.reducer";

function MonthItem({ month }) {
  const dispatch = useDispatch();

  const localMonth = localStorage.getItem("month");
  const selectedMonth = useSelector((state) => state.money.selectedMonth);

  //월 클릭 시
  const handleClickBtn = (month) => {
    dispatch(changeMonth(month));
    localStorage.setItem("month", month);
  };

  return (
    <Wrapper
      $selectedMonth={selectedMonth}
      $month={month}
      $localMonth={localMonth}
      onClick={() => handleClickBtn(month)}
    >
      {month}월
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
