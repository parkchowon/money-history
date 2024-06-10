import { RouterProvider } from "react-router-dom";
import styled from "styled-components";
import router from "./routes/router";

function App() {
  return (
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
