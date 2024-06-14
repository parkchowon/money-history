import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";
import SelectBox from "../SelectBox";

function Header() {
  const [isSelected, setIsSelected] = useState(false);

  const token = JSON.parse(localStorage.getItem("user-token")).state
    .accessToken;
  const { data: user } = useQuery({
    queryKey: ["user", token],
    queryFn: async () => await api.auth.checkUser(token),
  });

  const handleProfile = () => {
    setIsSelected(!isSelected);
  };

  return (
    <HeaderDiv>
      <Link to={"/"}>
        <div className="logo-div">
          <img src="src\images\logo.png" />
          <p>Money History</p>
        </div>
      </Link>
      <div className="user-div">
        <p className="user-name">
          <span>{user.nickname}</span>님
        </p>
        <img src={user.avatar ? user.avatar : ""} onClick={handleProfile} />
        {isSelected && <SelectBox />}
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
    .user-name {
      margin-right: 16px;
      font-size: 18px;
      span {
        font-weight: 600;
      }
    }
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
