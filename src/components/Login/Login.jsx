import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";
import useInput from "../../hooks/useInput";
import useAuthStore from "../../zustand/authStore";
import useUserStore from "../../zustand/userStore";

function Login() {
  const [id, handleEmail] = useInput("");
  const [password, handlePassword] = useInput("");
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();
  const { initUser } = useAuthStore();
  const { loginUser } = useUserStore();

  const { mutateAsync: login, isPending } = useMutation({
    mutationFn: (data) => api.auth.login(data),
    onSuccess: (data) => {
      initUser(data.accessToken);
      loginUser(data);
    },
  });

  const handleToLogin = async (e) => {
    e.preventDefault();
    if (id === "") setWarning("ID를 입력하세요");
    else if (password === "") setWarning("비밀번호를 입력하세요");
    else {
      try {
        const data = {
          id: id,
          password: password,
        };
        await login(data);
        navigate("/");
      } catch (e) {
        console.log(e);
        setWarning(e.response.data.message);
      }
    }
  };

  return (
    <Wrapper>
      <Link to={"/"}>
        <p className="title">Money History</p>
      </Link>
      <form>
        <p>ID</p>
        <input
          type="text"
          placeholder="ID를 입력하세요"
          onChange={handleEmail}
        />
        <p>비밀번호</p>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={handlePassword}
        />
        <button disabled={isPending} onClick={handleToLogin}>
          등록
        </button>
      </form>
      <p className="warning">{warning}</p>
      <Link to={"/auth/signup"}>
        <p className="move-to-login">아직 회원이 아니신가요?</p>
      </Link>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;

  .title {
    font-family: "Quicksand", sans-serif;
    font-size: 35px;
    font-weight: 800;
    text-align: center;
    margin: 0 0 40px;
    cursor: pointer;
    &:hover {
      color: mediumaquamarine;
      transform: scale(1.1);
      transition: all 0.3s;
    }
  }
  form {
    display: flex;
    flex-direction: inherit;
    p {
      font-size: 13px;
      color: gray;
      padding: 5px 18px;
    }
    input {
      width: 300px;
      height: 45px;
      border: transparent;
      background-color: gainsboro;
      border-radius: 30px;
      padding: 0 22px;
      font-size: 15px;
      box-sizing: border-box;
      margin: 0 0 5px;
      &:focus {
        outline: none;
      }
    }
    button {
      height: 45px;
      border: transparent;
      background-color: mediumaquamarine;
      color: white;
      font: inherit;
      border-radius: 40px;
      margin-top: 20px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      &:hover {
        background-color: #56ac8f;
      }
    }
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: mediumaquamarine;
    }
  }
  .move-to-login {
    margin: 10px 0;
    cursor: pointer;
  }
  .warning {
    color: red;
    margin-top: 10px;
  }
`;
