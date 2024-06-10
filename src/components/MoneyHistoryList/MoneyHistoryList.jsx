import { useEffect, useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import styled from "styled-components";
import MoneyItem from "../MoneyItem";

function MoneyHistoryList() {
  const moneyLists = useSelector((state) => state.money.moneys);
  const month = useSelector((state) => state.money.selectedMonth);

  const [checkedmonth, setCheckedmonth] = useState([]);

  //moneyLists 바뀌면 list 리렌더링
  useEffect(() => {
    if (moneyLists.length !== 0) {
      const filteredDatas = moneyLists.filter((data) => {
        return `${data.date.split("-")[1]}` == month;
      });
      setCheckedmonth(filteredDatas);
    }
  }, [moneyLists, month]);

  useEffect(() => {
    if (moneyLists.length !== 0) {
      const filteredDatas = moneyLists.filter((data) => {
        return `${data.date.split("-")[1]}` == month;
      });
      setCheckedmonth(filteredDatas);
    }
  }, []);

  return (
    <div>
      {checkedmonth.length !== 0 ? (
        checkedmonth.map((data) => {
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
