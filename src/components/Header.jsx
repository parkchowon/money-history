import { Link } from "react-router-dom";
import styled from "styled-components";

function Header() {
  return (
    <HeaderDiv>
      <Link to={"/moneyHistory"}>
        <div>
          <img src="src\images\logo.png" />
          <p>Money History</p>
        </div>
      </Link>
    </HeaderDiv>
  );
}
const HeaderDiv = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    &:hover {
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }
  cursor: pointer;
  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: 30px;
    text-align: center;
    font-family: "Quicksand", sans-serif;
    margin: 0 10px;
    font-weight: 800;
  }
`;
export default Header;
