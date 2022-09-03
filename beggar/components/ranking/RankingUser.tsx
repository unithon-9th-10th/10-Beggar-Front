import React from "react";
import styled from "styled-components";
import Image from "next/image";
import First from "../../assets/img/ranking/first.svg";
import Second from "../../assets/img/ranking/second.svg";
import Third from "../../assets/img/ranking/third.svg";
import theme from "../../styles/theme";
import RankingLine from "../../assets/img/ranking/rankingLine.svg";
import DotLine from "../../assets/img/line.svg";

const RankingUserList = () => {
  return (
    <RankingListDiv>
      <div>
        <RankingNum>4st</RankingNum>
        <RankingRating>하거지</RankingRating>
        <RankingName>민돌이</RankingName>
        <RankingBuyLog>지출 390,343원</RankingBuyLog>
      </div>
      <Image height={3} src={DotLine} alt="line" />
    </RankingListDiv>
  );
};

const RankingUser = () => {
  return (
    <Wrapper>
      <div className="first">
        <PeopleWrapper>
          <Image src={First} alt="people" />
          <div>
            <BeggarRating theme={theme}>상거지</BeggarRating>
            <NickName>꿀꿀이</NickName>
            <BuyLog>지출 1000원</BuyLog>
          </div>
        </PeopleWrapper>
      </div>
      <SeconThirdDiv>
        <PeopleWrapper className="second">
          <Image src={Second} alt="people" />
          <div>
            <BeggarRating theme={theme}>상거지</BeggarRating>
            <NickName>꿀꿀이</NickName>
            <BuyLog>지출 1000원</BuyLog>
          </div>
        </PeopleWrapper>
        <PeopleWrapper className="third">
          <Image src={Third} alt="people" />
          <div>
            <BeggarRating theme={theme}>상거지</BeggarRating>
            <NickName>꿀꿀이</NickName>
            <BuyLog>지출 1000원</BuyLog>
          </div>
        </PeopleWrapper>
      </SeconThirdDiv>
      <Image src={RankingLine} alt="line" />
      <RankingUserList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .first {
    margin-top: 16px;
  }
`;

const PeopleWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const BeggarRating = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.color.light_gray};
`;

const NickName = styled.p`
  margin: 0 0 3px 0;
  font-size: 24px;
`;

const BuyLog = styled.p`
  margin: 0 0 21px 0;
  color: #00969f;
  font-size: 14px;
`;

const SeconThirdDiv = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;

  .second {
    margin-left: 20px;
  }

  .third {
    margin-right: 20px;
  }
`;

// 4등부터 list스타일

const RankingListDiv = styled.div`
  margin-top: 14px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
`;

const RankingNum = styled.p`
  font-size: 24px;
  margin: 0 24px 0 10px;
`;

const RankingRating = styled.p`
  width: 38px;
  font-size: 14px;
  color: #d9d9d9;
  margin: 0 12px 0 0;
`;

const RankingName = styled.p`
  width: 64px;
  font-size: 24px;
  margin: 0 96px 0 0;
`;

const RankingBuyLog = styled.p`
  width: 100px;
  font-size: 14px;
  color: #00969f;
`;

export default RankingUser;
