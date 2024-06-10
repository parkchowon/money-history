import CreateHistory from "@/components/CreateHistory";
import MoneyHistoryList from "@/components/MoneyHistoryList";
import MonthList from "@/components/MonthList/MonthList";
import styled from "styled-components";

function MainPage() {
  return (
    <Wrapper>
      <CreateHistory />
      <MonthList />
      <MoneyHistoryList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default MainPage;
