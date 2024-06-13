import CreateHistory from "@/components/CreateHistory";
import MoneyHistoryList from "@/components/MoneyHistoryList";
import MonthList from "@/components/MonthList/MonthList";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import styled from "styled-components";
import api from "../../api/api";
import useUserStore from "../../zustand/userStore";

function MainPage() {
  const { loginUser } = useUserStore();

  const token = JSON.parse(localStorage.getItem("user-token")).state
    .accessToken;
  const {
    data: user,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["user", token],
    queryFn: async () => await api.auth.checkUser(token),
  });

  useEffect(() => {
    loginUser(user);
  }, []);

  if (isPending) return <p>Loading...</p>;
  if (isError) return <p>Error Page</p>;

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
  margin-top: 70px;
`;

export default MainPage;
