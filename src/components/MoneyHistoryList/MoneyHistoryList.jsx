import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import styled from "styled-components";
import { useShallow } from "zustand/react/shallow";
import api from "../../api/api";
import useMoneyStore from "../../zustand/moneyStore";
import MoneyItem from "../MoneyItem";

function MoneyHistoryList() {
  const { month, initMoneys } = useMoneyStore(
    useShallow((state) => ({
      month: state.month,
      initMoneys: state.initMoneys,
    }))
  );

  const { data: moneys = [], isLoading } = useQuery({
    queryKey: ["moneys"],
    queryFn: async () => await api.money.getMoneyList(),
  });

  const filteredDatas = moneys.filter((data) => {
    return `${data.date.split("-")[1]}` == month;
  });

  useEffect(() => {
    initMoneys(filteredDatas);
  }, [filteredDatas]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {filteredDatas.length !== 0 ? (
        filteredDatas.map((data) => {
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
