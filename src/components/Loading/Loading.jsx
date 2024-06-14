import styled, { keyframes } from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <Spinner></Spinner>
      <p>Loading...</p>
    </Wrapper>
  );
}

const spinner = keyframes`
  from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 5px solid mediumaquamarine;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${spinner} 1s linear infinite;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;

  p {
    margin-top: 20px;
    font-family: inherit;
  }
`;

export default Loading;
