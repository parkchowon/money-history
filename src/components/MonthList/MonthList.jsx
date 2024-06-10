import { useMemo } from "react";
import styled from "styled-components";
import MonthItem from "../MonthItem/";

function MonthList() {
  //월별 객체 배열 만들기
  const months = useMemo(() => {
    let month = [];
    for (let m = 0; m < 12; m++) {
      month.push({ month: m });
    }
    return month;
  }, []);

  return (
    <Wrapper>
      {months.map((item) => {
        return <MonthItem key={item.month} month={item.month + 1} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 20px 30px;
`;

export default MonthList;
