import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Arrow from "../../assets/img/common/leftArrow.svg";
import DotLine from "../../assets/img/line.svg";
import RankingUser from "./RankingUser";

const Ranking = () => {
  return (
    <div>
      <Header>
        <div className="head">
          <Image id="arrow" src={Arrow} alt="arrow" />
          <p>랭킹</p>
        </div>
        <TitleDiv>
          <Title>돈아기고 여행가자</Title>
          <Dday>6일 남음</Dday>
        </TitleDiv>
      </Header>
      <Image height={2} src={DotLine} alt="line" />
      <RankingUserBox>
        <RankingUser />
      </RankingUserBox>
    </div>
  );
};

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
  margin: 0;
  color: #00969f;
  font-size: 16px;
  font-weight: 400;
`;

const RankingUserBox = styled.div``;

export default Ranking;
