import type { NextPage } from "next";
import Image from "next/image";
import BestBeggar from "../../assets/img/challenge/bestBeggar.svg";
import MidBeggar from "../../assets/img/challenge/midBeggar.svg";
import BadBeggar from "../../assets/img/challenge/badBeggar.svg";

import RateBar from "../../assets/img/challenge/rateBar.svg";
import RateArrow from "../../assets/img/challenge/rateArrow.svg";

import styled from "styled-components";
import { useEffect, useState } from "react";

const InfoCard = ({ member }: any) => {
  console.log(member.memberPoint, "in infocard")
  const point = member.memberPoint;

  const [beggarState, setBeggarState] = useState(1);
  const beggarText = ["하거지", "중거지", "상거지"];
  const beggarPoint = [92, 82.5, 73, 63.5, 54, 44.5, 35, 26, 17, 8, -1];

  useEffect(() => {
    if (point >= 70) return setBeggarState(2);
    if (point >= 40) return setBeggarState(1);
    return setBeggarState(0);
  }, [point]);

  return (
    <Container>
      <FirstLineBox>
        <UserName>{member.memberNickname}</UserName>
        <UserRanking>{member.ranking}위</UserRanking>
        <UserBeggarRate>{beggarText[beggarState]}</UserBeggarRate>
      </FirstLineBox>
      <InfoBox>
        {beggarState === 2 && (
          <Image src={BestBeggar} alt="rankingIcon" width="100%" height={107} />
        )}
        {beggarState === 1 && (
          <Image src={MidBeggar} alt="rankingIcon" width="100%" height={107} />
        )}
        {beggarState === 0 && (
          <Image src={BadBeggar} alt="rankingIcon" width="100%" height={107} />
        )}

        <AmountBox>
          <AvailableAmountText>남은 금액</AvailableAmountText>
          <AvailableAmountPrice>{member.limitAmount}원</AvailableAmountPrice>

          <AmountSubBox>
            <AmountSubText>목표 총지출</AmountSubText>
            <AmountSubPrice>{member.usedAmount}원</AmountSubPrice>
          </AmountSubBox>
          <AmountSubBox>
            <AmountSubText>누적 지출</AmountSubText>
            <AmountSubPrice>{member.remainAmount}원</AmountSubPrice>
          </AmountSubBox>
        </AmountBox>
        <RateBox>
          <Image src={RateBar} alt="rankingIcon" width={40} height={110} />
          <RateArrowBox point={beggarPoint[point / 10]}>
            <Image src={RateArrow} alt="rankingIcon" width={10} height={10} />
          </RateArrowBox>
        </RateBox>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  padding: 0px 30px;
  background-image: url("/assets/img/challenge/infoCardOutline.svg");
  background-repeat: no-repeat;
  background-position: center;
`;

const FirstLineBox = styled.div`
  position: relative;
  display: flex;
  width: auto;
  background-color: #ffffff;
  gap: 5px;
  width: fit-content;
  padding-right: 10px;
`;

const UserName = styled.div`
  font-size: 24px;
`;

const UserRanking = styled.div`
  padding-top: 5px;
  font-size: 14px;
  color: #00000040;
`;

const UserBeggarRate = styled.div`
  padding-top: 5px;
  font-size: 14px;
  color: #00000040;
`;

const InfoBox = styled.div`
  display: flex;
  border-radius: 50px;
  margin: 20px 10px 0;
`;

const AmountBox = styled.div`
  margin: 0 20px;
  width: 134px;
`;

const AvailableAmountText = styled.div`
  font-size: 16px;
  color: #00000040;
`;

const AvailableAmountPrice = styled.div`
  font-size: 24px;
  margin: 5px 0 17px;
`;

const AmountSubBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const AmountSubText = styled.div`
  font-size: 14px;
  color: #00000040;
  width: 50%;
`;

const AmountSubPrice = styled.div`
  font-size: 14px;
  width: 50%;
  text-align: right;
`;

const RateBox = styled.div`
  position: relative;
`;

const RateArrowBox = styled.div<{
  point: number;
}>`
  position: absolute;
  top: ${({ point }) => point + "px"};
  right: 0;
`;

export default InfoCard;
