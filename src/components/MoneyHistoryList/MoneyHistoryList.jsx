import { useQuery } from "@tanstack/react-query";
import { BsExclamationCircle } from "react-icons/bs";
import styled from "styled-components";
import { useShallow } from "zustand/react/shallow";
import api from "../../api/api";
import useMonthStore from "../../zustand/monthStore";
import Loading from "../Loading/Loading";
import MoneyItem from "../MoneyItem";

function MoneyHistoryList() {
  const { month } = useMonthStore(
    useShallow((state) => ({
      month: state.month,
    }))
  );

  const { data: moneys = [], isPending } = useQuery({
    queryKey: ["moneys"],
    queryFn: async () => await api.money.getMoneyList(),
  });

  const filteredList = moneys.filter((data) => {
    console.log(data.date.split("-")[1]);
    return +`${data.date.split("-")[1]}` == +month;
  });

  if (isPending) return <Loading />;
  return (
    <div>
      {filteredList.length !== 0 ? (
        filteredList.map((data) => {
          return <MoneyItem key={data.id} moneyDatas={data} />;
        })
      ) : (
        <NotExistDiv>
          <BsExclamationCircle size={40} color="gray" />
          <p>{month}월 소비 내역이 없습니다.</p>
        </NotExistDiv>
      )}
    </div>
  );
}

const NotExistDiv = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 20px;
    font-size: 25px;
  }
`;
export default MoneyHistoryList;
