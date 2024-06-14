import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";

function MoneyItem({ moneyDatas }) {
  const token = JSON.parse(localStorage.getItem("user-token")).state
    .accessToken;
  const { data: user } = useQuery({
    queryKey: ["user", token],
    queryFn: async () => await api.auth.checkUser(token),
  });
  const handleToDetailPage = (e) => {
    if (user.nickname !== moneyDatas.createdBy) {
      alert("접근할 수 없습니다.");
      e.preventDefault();
    }
  };

  return (
    <Link
      style={{
        color: "inherit",
        textDecoration: "none",
      }}
      to={`details/${moneyDatas.id}`}
      onClick={handleToDetailPage}
    >
      <Wrapper>
        <div className="writer-div">
          <img
            src={
              moneyDatas.createdBy == user.nickname
                ? user.avatar
                : moneyDatas.avatar
            }
          />
          <p className="writer">{moneyDatas.createdBy}</p>
        </div>
        <div className="content">
          <p className="date">{moneyDatas.date}</p>
          <div>
            <p className="category">[{moneyDatas.category}]</p>
            <p className="detail">{moneyDatas.detail}</p>
            <p className="amount">{moneyDatas.amount}원</p>
          </div>
        </div>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  cursor: pointer;
  width: 750px;
  height: 40px;
  margin: 15px 0;
  box-shadow: 0 0 5px gainsboro;
  padding: 20px 35px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    transform: scale(1.03);
    transition: all 0.3s;
  }
  .writer-div {
    width: 50px;
    margin-right: 10px;
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .date {
    margin-bottom: 5px;
    font-size: 13px;
    color: gray;
  }

  .content > div {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: 5px;
  }

  a {
    display: flex;
    flex-direction: row;
    width: 100%;
    text-decoration-line: none;
    color: black;
  }

  .detail {
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 70%;
    margin-left: 60px;
  }

  .amount {
    margin-left: auto;
    color: mediumaquamarine;
    font-weight: 600;
  }
`;
export default MoneyItem;
