import React from "react";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <Introduce>
        <div>
          <p>어차피</p>
          <GrayText>거지</GrayText>
          <p>라면,,</p>
        </div>
        <div>
          <p>상거지</p>
          <p>가 되어보자!</p>
        </div>
      </Introduce>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    height: 20px;
    display: flex;
  }
`;

const GrayText = styled.p`
  color: "#D9D9D9";
`;

export default Main;
