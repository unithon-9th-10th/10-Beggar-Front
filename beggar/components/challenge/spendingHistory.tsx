import type { NextPage } from "next";
import Link from "next/link";
import AddSpendingOutline from "../../assets/img/challenge/addSpendingOutline.svg";

import styled from "styled-components";
import { useState } from "react";

const SpendingHistory: NextPage = () => {
  const [spendingList, setSpendingList] = useState([
    { category: "clothes", price: "- 10,200원", content: "가을 옷" },
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
        {spendingList.map((item, index) => (
          <Item key={index}>{item.category}</Item>
        ))}
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
  text-align: right;
`;

const ItemBox = styled.div`
  border: 1px solid black;
`;

const Item = styled.div``;

export default SpendingHistory;
