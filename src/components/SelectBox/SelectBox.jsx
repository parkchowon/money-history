import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function SelectBox() {
  const token = JSON.parse(localStorage.getItem("user-token")).state
    .accessToken;

  const handleToLogout = () => {
    localStorage.removeItem("user-token");
  };

  return (
    <Wrapper>
      <Link to={"/mypage"}>
        <SelectItem className="my-page">마이페이지</SelectItem>
      </Link>
      <div className="line"></div>
      {token ? (
        <Link to={"/auth/login"}>
          <SelectItem onClick={handleToLogout} className="logout">
            로그아웃
          </SelectItem>
        </Link>
      ) : (
        <Link to={"/auth/login"}>
          <SelectItem className="login">로그인</SelectItem>
        </Link>
      )}
    </Wrapper>
  );
}
const dropdownAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  width: 120px;
  height: 100px;
  position: absolute;
  top: 80px;
  left: 91%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 0 10px gainsboro;
  background-color: white;
  animation: ${dropdownAnimation} 0.3s ease-in-out;
  .line {
    width: 100%;
    height: 1px;
    background-color: gainsboro;
  }
  .login {
    border-radius: 0 0 10px 10px;
  }
  .my-page {
    border-radius: 10px 10px 0 0;
  }
  a {
    height: 100%;
  }
`;

const SelectItem = styled.div`
  padding: 0 12px;
  height: 100%;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f8f8f8;
    color: mediumaquamarine;
  }
`;
export default SelectBox;
