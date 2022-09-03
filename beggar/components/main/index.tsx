import React from "react";
import Image from "next/image";
import styled from "styled-components";
import theme from "../../styles/theme";
import main from "../../assets/img/startmain.svg";
import DefaultBtn from "../common/defaultBtn";

const Main = () => {
  return (
    <Wrapper>
      <Introduce>
        <div>
          <p>어차피</p>
          <GrayText theme={theme}>거지</GrayText>
          <p>라면,,</p>
        </div>
        <div>
          <Topbeggar theme={theme}>상거지</Topbeggar>
          <p>가 되어보자!</p>
        </div>
      </Introduce>
      <Title>
        <p>무소비</p>
        <p>챌린지</p>
      </Title>
      <Body>
        <Image src={main} alt="mainImg" />
      </Body>
      <DefaultBtn height={60}>챌린지 만들기</DefaultBtn>
      <Bottom>
        <p>초대받은 챌린지가 있나요?</p>
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Introduce = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 58px;
  margin-bottom: 19px;
  > div {
    margin: 0;
    display: flex;
    > p {
      margin: 0;
      font-size: 24px;
    }
  }
`;

const GrayText = styled.p`
  /* color: "#D9D9D9"; */
  color: ${({ theme }) => theme.color.gray};
  margin-left: 5px;
`;

const Topbeggar = styled.p`
  color: ${({ theme }) => theme.color.gray};
`;

const Title = styled.div`
  margin-bottom: 95px;
  > p {
    margin: 0;
    font-size: 50px;
  }
`;

const Body = styled.div`
  margin-bottom: 94px;
`;

const Bottom = styled.div`
  > p {
    margin-top: 14px;
  }
`;

export default Main;
