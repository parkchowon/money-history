import useInput from "@/hooks/useInput";
import { addMoneyList } from "@/redux/reducers/money.reducer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { v4 } from "uuid";

function CreateHistory() {
  const dispatch = useDispatch();
  const moneyLists = useSelector((state) => state.money.moneys);

  //날짜 초기값
  const today = new Date().toISOString().slice(0, 10);
  //Input값 저장
  const [date, dateHandler] = useInput(today);
  const [category, categoryHandler] = useInput("식비");
  const [amount, amountHandler, setAmountBlank] = useInput("");
  const [detail, detailHandler, setDetailBlank] = useInput("");

  //warning message
  const [warningText, setWarningText] = useState("");

  //저장한 값의 연도
  const year = date.split("-");
  //현재 연도
  const todayYear = new Date().getFullYear();
  //입력한 값 객체로
  const newMoneyItem = {
    id: v4(),
    date,
    category,
    amount,
    detail,
  };

  useEffect(() => {
    localStorage.setItem("moneylist", JSON.stringify(moneyLists));
  }, [moneyLists]);

  const handleCreateHistory = (e) => {
    e.preventDefault();

    if (amount === "") {
      setWarningText("금액을 입력해주세요.");
    } else if (year[0] < 2000 || year[0] > todayYear) {
      setWarningText("연도를 올바르게 입력해주세요.");
    } else if (!+amount) {
      setWarningText("금액에는 숫자를 입력해주세요.");
    } else if (detail === "") {
      setWarningText("지출 내용을 입력해주세요.");
    } else {
      dispatch(addMoneyList(newMoneyItem, year[1]));
      localStorage.setItem("month", year[1]);
      setAmountBlank();
      setDetailBlank();
      setWarningText("");
    }
  };

  return (
    <Wrapper>
      <form>
        <div>
          <p>날짜</p>
          <input value={date} onChange={dateHandler} type="date" />
        </div>
        <div>
          <p>항목</p>
          <SelectInput value={category} onChange={categoryHandler}>
            <option value="식비">식비</option>
            <option value="미용">미용</option>
            <option value="여행">여행</option>
            <option value="도서">도서</option>
            <option value="엔터테인먼트">엔터테인먼트</option>
            <option value="의류">의류</option>
            <option value="기타">기타</option>
          </SelectInput>
        </div>
        <div>
          <p>금액</p>
          <input
            value={amount}
            onChange={amountHandler}
            type="text"
            placeholder="지출 금액"
          />
        </div>
        <div>
          <p>내용</p>
          <input
            value={detail}
            onChange={detailHandler}
            type="text"
            placeholder="지출 내용"
          />
        </div>
        <button onClick={(e) => handleCreateHistory(e)}>저장</button>
      </form>
      <WarnningText>
        <p>{warningText}</p>
      </WarnningText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  padding: 20px 0;
  border-radius: 20px;
  box-shadow: 0 0 10px gainsboro;
  form {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 50px;

    div {
      margin: 0 10px;
    }

    div > p {
      font-size: 14px;
      color: gray;
      padding: 5px 0;
    }

    input,
    select {
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;
      border: transparent;
      background-color: gainsboro;
      border-radius: 20px;
      padding: 7px 18px;
      font-size: 15px;
      font-family: "IBM Plex Sans KR", sans-serif;
      font-style: normal;

      &:focus {
        outline: none;
      }
    }

    select {
      height: 37px;
    }
  }
  form > p {
    width: 45px;
    text-align: center;
  }

  form > button {
    border: transparent;
    width: 80px;
    height: 35px;
    border-radius: 50px;
    margin-top: auto;
    font-size: 15px;
    background-color: mediumaquamarine;
    color: white;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: #4aaf8d;
    }
  }
`;

const WarnningText = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 10px;

  p {
    font-size: 15px;
    color: red;
    position: absolute;
    top: 7px;
  }
`;

const SelectInput = styled.select`
  cursor: pointer;
  height: 32px;
  option {
    background-color: white;
  }
`;
export default CreateHistory;
