import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";
import useInput from "../../hooks/useInput";

function SignUp() {
  const [nickname, handleNickName] = useInput("");
  const [id, handleId] = useInput("");
  const [password, setPassword] = useInput("");
  const [checkPW, setCheckPW] = useState("");
  const [warning, setWarning] = useState("");

  const navigate = useNavigate();
  //tanstack query로 data값을 이용해 사용자 생성
  const { mutateAsync: signUp } = useMutation({
    //axios로 data값 넣고
    mutationFn: (data) => api.auth.signUp(data),
  });

  const handleToSignUp = async (e) => {
    e.preventDefault();
    if (nickname === "") setWarning("닉네임을 입력하세요.");
    else if (id === "") setWarning("ID를 입력하세요");
    else if (password === "") setWarning("비밀번호를 입력하세요");
    else if (checkPW !== "" && checkPW === password) {
      try {
        const data = {
          id: id,
          password: password,
          nickname: nickname,
        };

        await signUp(data);
        navigate("/auth/login");
      } catch (e) {
        setWarning(e.response.data.message);
      }
    } else {
      setWarning("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
    }
  };

  return (
    <Wrapper>
      <Link to={"/"}>
        <p className="title">Money History</p>
      </Link>
      <form>
        <p>닉네임</p>
        <input
          type="text"
          placeholder="닉네임을 입력하세요"
          onChange={handleNickName}
        />
        <p>ID</p>
        <input type="text" placeholder="ID를 입력하세요" onChange={handleId} />
        <p>비밀번호</p>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={setPassword}
        />
        <p>비밀번호 확인</p>
        <input
          type="password"
          placeholder="비밀번호를 한번 더 입력하세요"
          onChange={(e) => setCheckPW(e.target.value)}
        />
        <button onClick={handleToSignUp}>등록</button>
      </form>
      {warning && <p className="warning">{warning}</p>}
      <Link to={"/auth/login"}>
        <p className="move-to-login">이미 가입한 회원이신가요?</p>
      </Link>
    </Wrapper>
  );
}

export default SignUp;

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
