import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderDiv>
      <Link to={"/"}>
        <div className="logo-div">
          <img src="src\images\logo.png" />
          <p>Money History</p>
        </div>
      </Link>
      <div className="user-div">
        <p>000님</p>
        <img />
      </div>
    </HeaderDiv>
  );
}
const HeaderDiv = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
  border-bottom: 1px solid gainsboro;
  cursor: pointer;

  .logo-div {
    display: flex;
    flex-direction: row;
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s;
    }
    p {
      font-size: 30px;
      text-align: center;
      font-family: "Quicksand", sans-serif;
      margin: 0 10px;
      font-weight: 800;
    }
  }
  .user-div {
    display: flex;
    align-items: center;
    margin-left: auto;
    img {
      background-color: mediumaquamarine;
      width: 45px;
      height: 45px;
      border-radius: 50%;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
export default Header;
