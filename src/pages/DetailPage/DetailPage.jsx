import Modal from "@/components/Modal";
import useRefInput from "@/hooks/useRefInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  deleteMoneyList,
  updateMoneyList,
} from "../../redux/reducers/money.reducer";

function DetailPage() {
  const param = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //모달창 여닫힘 여부
  const [isOpen, setIsOpen] = useState(false);

  //로컬스토리지에서 저장된 배열 받아옴
  const localStorages = JSON.parse(localStorage.getItem("moneylist"));
  //params의 id값으로 현재 페이지의 값만 저장
  const detailMoney = localStorages.filter((money) => {
    return money.id === param.detailId;
  })[0];
  const { date, category, amount, detail } = detailMoney;

  //useRefInput 커스텀 훅에서 받아온 값
  const [detailRef, newDetail, handleDetail] = useRefInput(detail);
  const [dateRef, newDate, handleDate] = useRefInput(date);
  const [categoryRef, newCategory, handleCategory] = useRefInput(category);
  const [amountRef, newAmount, handleAmount] = useRefInput(amount);

  //유효성 검사 text
  const [warningText, setWarningText] = useState();

  //바뀐 값을 넣음
  const changeDetail = {
    id: param.detailId,
    date: newDate,
    category: newCategory,
    amount: newAmount,
    detail: newDetail,
  };

  //현재 연도 불러옴
  const year = new Date().getFullYear();

  //수정 시 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    const yearMonthDay = newDate.split("-");
    if (newDetail === "") {
      setWarningText("상품명을 비워둘 수 없습니다.");
    } else if (
      newDate === "" ||
      (yearMonthDay[0] || yearMonthDay[1] || yearMonthDay[2]) === ""
    ) {
      setWarningText("날짜에 빈칸을 채워주십시오.");
    } else if (yearMonthDay[0] < 2000 || yearMonthDay[0] > year) {
      setWarningText("연도를 다시 확인해 주십시오.");
    } else if (newCategory === "") {
      setWarningText("항목을 비워둘 수 없습니다.");
    } else if (newAmount === "") {
      setWarningText("금액을 비워둘 수 없습니다.");
    } else {
      const changeLocal = localStorages.map((item) => {
        return item.id === param.detailId ? changeDetail : item;
      });
      dispatch(updateMoneyList(changeLocal)); //dispatch;
      localStorage.setItem("moneylist", JSON.stringify(changeLocal));
      navigate("/moneyHistory");
    }
  };

  // 모달 창 여닫기
  const handleModal = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  //모달창에서 삭제 누를 시
  const handleModalDelete = (e) => {
    e.preventDefault();
    const changeLocal = localStorages.filter((item) => {
      return item.id !== param.detailId;
    });
    dispatch(deleteMoneyList(changeLocal));
    localStorage.setItem("moneylist", JSON.stringify(changeLocal));
    navigate("/moneyHistory");
  };

  return (
    <>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          handleModal={handleModal}
          handleModalDelete={handleModalDelete}
        />
      )}

      <Wrapper>
        <div className="sub-title">
          <p>[ 영수증 ]</p>
        </div>
        <form>
          <div className="input-div">
            <p>상품명</p>
            <input
              ref={detailRef}
              defaultValue={detail}
              onChange={(e) => handleDetail(e)}
            />
            <p>날짜</p>
            <input
              type="date"
              ref={dateRef}
              defaultValue={date}
              onChange={(e) => {
                handleDate(e);
              }}
            />
            <p>항목</p>
            <input
              ref={categoryRef}
              defaultValue={category}
              onChange={(e) => {
                handleCategory(e);
              }}
            />
            <p>금액</p>
            <input
              ref={amountRef}
              defaultValue={amount}
              onChange={(e) => {
                handleAmount(e);
              }}
            />
          </div>
          <div className="warning-div">{warningText}</div>
          <div className="btn-div">
            <button
              className="change-btn"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              수정
            </button>
            <button
              className="del-btn"
              onClick={(e) => {
                handleModal(e);
              }}
            >
              삭제
            </button>
          </div>
        </form>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 9px;
  min-width: 400px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 50px;

  .sub-title {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid black;
    p {
      font-size: 25px;
      padding: 30px 0;
    }
  }
  .input-div {
    margin: 10px 0;

    p {
      text-align: left;
      padding: 10px 15px;
      margin: 5px 10px;
      border-top: 2px dashed gray;
      border-bottom: 2px dashed gray;
    }
    input {
      font-size: 15px;
      padding: 14px 20px;
      margin-bottom: 15px;
      border: transparent;
      border-radius: 30px;
      font-family: "IBM Plex Sans KR", sans-serif;
      font-style: normal;
      width: 100%;
      background-color: #ebebeb;
      box-sizing: border-box;
      &:focus {
        outline: none;
      }
    }
  }

  .warning-div {
    display: flex;
    justify-content: center;
    color: red;
    font-weight: bold;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    .btn-div {
      margin-left: auto;

      button {
        margin-bottom: 50px;
        font-size: 15px;
        cursor: pointer;
        margin-left: 5px;
        border-radius: 40px;
        padding: 6px 12px;
        font-family: "IBM Plex Sans KR", sans-serif;
        font-style: normal;
      }
    }
    .change-btn {
      color: white;
      background-color: mediumaquamarine;
      border: 2px solid mediumaquamarine;
      font-weight: bold;
      &:hover {
        color: white;
        background-color: #53aa8d;
        border: 2px solid #53aa8d;
      }
    }
  }
  .del-btn {
    background-color: #db4c4c;
    border: 2px solid #db4c4c;
    color: white;
    font-weight: bold;

    &:hover {
      border: 2px solid red;
      background-color: red;

      color: white;
    }
  }
`;

export default DetailPage;
