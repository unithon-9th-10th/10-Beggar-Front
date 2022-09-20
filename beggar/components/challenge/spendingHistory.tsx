import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import bestBaggerBanner from "../../assets/img/challenge/bestBaggerBanner.svg";
import badBaggerBanner from "../../assets/img/challenge/badBaggerBanner.svg";
import bestBaggerBannerTwo from "../../assets/img/challenge/bestBaggerBanner2.svg";
import badBaggerBannerTwo from "../../assets/img/challenge/badBaggerBanner2.svg";
import Food from "../../assets/img/challenge/food.svg";
import Shopping from "../../assets/img/challenge/shopping.svg";
import EnterTainment from "../../assets/img/challenge/amusement.svg";

import styled from "styled-components";
import { useState } from "react";

const SpendingHistory = ({ member }: any) => {
  console.log(member, "in spending")
  const [spendingList, setSpendingList] = useState([
    { category: "SHOPPING", price: "- 10,200원", content: "가을 옷" },
    { category: "FOOD", price: "- 19,000원", content: "치킨" },
    { category: "ENTERTAINMENT", price: "- 5,000원", content: "노래방" },
  ]);

  return (
    <Container>
      <TitleBox>
        <TitleText>지출 내역</TitleText>
        <Link href="/createSpend">
          <ButtonText>+ 지출 내역 추가</ButtonText>
        </Link>
      </TitleBox>
      <LineBox>
        <DateText>9월 2일 금요일</DateText>
        <Line></Line>
        <PriceText>- 21,200원</PriceText>
      </LineBox>
      <ItemBox>
        <Item>
          <Image src={Shopping} alt="Shpping" width={52} height={52} />
          <TextBox>
            <PriceText>- 10,200원</PriceText>
            <ContentText>가을 옷</ContentText>
            <BannerBox>
              <BannerImage>
                <Image
                  src={bestBaggerBanner}
                  alt="bestBanner"
                  width={97}
                  height={24}
                />
              </BannerImage>
              <BannerImage>
                <Image
                  src={badBaggerBanner}
                  alt="badBanner"
                  width={97}
                  height={24}
                />
              </BannerImage>
            </BannerBox>
          </TextBox>
        </Item>
        <Item>
          <Image src={Food} alt="Food" width={52} height={52} />
          <TextBox>
            <PriceText>- 19,000원</PriceText>
            <ContentText>치킨</ContentText>
            <BannerBox>
              <BannerImage>
                <Image
                  src={bestBaggerBannerTwo}
                  alt="bestBanner"
                  width={97}
                  height={24}
                />
              </BannerImage>
              <BannerImage>
                <Image
                  src={badBaggerBannerTwo}
                  alt="badBanner"
                  width={97}
                  height={24}
                />
              </BannerImage>
            </BannerBox>
          </TextBox>
        </Item>
        <Item>
          <Image
            src={EnterTainment}
            alt="ENTERTAINMENT"
            width={52}
            height={52}
          />
          <TextBox>
            <PriceText>- 5,000원</PriceText>
            <ContentText>노래방</ContentText>
            <BannerBox>
              <BannerImage>
                <Image
                  src={bestBaggerBanner}
                  alt="bestBanner"
                  width={97}
                  height={24}
                />
              </BannerImage>
              <BannerImage>
                <Image
                  src={badBaggerBanner}
                  alt="badBanner"
                  width={97}
                  height={24}
                />
              </BannerImage>
            </BannerBox>
          </TextBox>
        </Item>
      </ItemBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleText = styled.div`
  font-size: 20px;
  display: flex;
  align-items: center;
`;

const ButtonText = styled.div`
  background-image: url("/assets/img/challenge/addSpendingOutline.svg");
  background-repeat: no-repeat;
  background-position: center;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const LineBox = styled.div`
  display: flex;
  margin: 20px 0;
  font-size: 14px;
  position: relative;
`;

const DateText = styled.div`
  font-size: 16px;
  color: #00000050;
  width: -webkit-fill-available;
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px dotted #000000;
  width: 100%;
`;

const PriceText = styled.div`
  font-size: 14px;
  width: -webkit-fill-available;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  display: flex;
  height: 82px;
  position: relative;
`;

const ContentText = styled.div``;

const TextBox = styled.div`
  margin: auto 20px;

  display: flex;
  flex-direction: column;
`;

const BannerBox = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  bottom: 0;
`;

const BannerImage = styled.div`
  right: 20px;
  bottom: 0;
`;

export default SpendingHistory;
