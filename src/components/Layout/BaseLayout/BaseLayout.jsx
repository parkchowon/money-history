import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../Header";

function BaseLayout() {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default BaseLayout;
