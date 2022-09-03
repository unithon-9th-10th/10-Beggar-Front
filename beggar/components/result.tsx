import React from "react";
import styled from "styled-components";
import Image from "next/image";
import DotLine from "../assets/img/line.svg";
import RankingUser from "./ranking/RankingUser";
import DefaultBtn from "./common/defaultBtn";

const Result = () => {
  return (
    <Wrapper>
      <Header>
        <TitleDiv>
          <Title>돈아기고 여행가자</Title>
          <Dday>챌린지 종료</Dday>
          <DayDiv>기간 : 09월 01일 ~ 9월 3일 (3일)</DayDiv>
          <LastMoney>목표 총지출 금액 : 100,000원</LastMoney>
        </TitleDiv>
      </Header>
      <Image height={2} src={DotLine} alt="line" />
      <RankingUser />
      <button>새로운 챌린지 시작하기</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > button {
    position: fixed;
    font-size: 20px;
    top: 700px;
    width: 100%;
    height: 60px;
    margin-top: 70px;
    background-color: black;
    color: white;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 38px;
  .head {
    display: flex;
    align-items: center;
    > p {
      margin-left: 143px;
    }
  }
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  margin: 0 0 5px 0;
  font-size: 32px;
  font-weight: 400;
`;

const Dday = styled.p`
  margin: 0 0 9px 0;
  color: #00969f;
  font-size: 16px;
  font-weight: 400;
`;

const DayDiv = styled.div`
  color: #999999;
  margin: 0 0 10px 0;
`;

const LastMoney = styled.div`
  color: #999999;
  margin: 0 0 10px 0;
`;

export default Result;
