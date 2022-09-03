import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import FightImg from "../assets/img/fightPaper.svg";
import theme from "../styles/theme";
import DefaultBtn from "./common/defaultBtn";

const InviteUser = () => {
  return (
    <div>
      <Header>
        <p>챌린지 친구 초대</p>
      </Header>
      <Body>
        <Image id="fight" src={FightImg} alt="Fight" />
        <div className="intro">
          <p>초대링크를 보내</p>
          <p>대결할 친구를 초대하세요!</p>
        </div>
        <CopyBtn theme={theme}>초대링크 복사</CopyBtn>
        <div className="description">
          <DescriptionText theme={theme}>
            초대링크는 챌린지 화면의 초대하기 버튼을 눌러
          </DescriptionText>
          <DescriptionText theme={theme}>
            다시 복사할 수 있어요.
          </DescriptionText>
        </div>
        <Link href="/challenge">
          <DefaultBtn height={60} value={"챌린지 화면으로"} />
        </Link>
      </Body>
    </div>
  );
};

const Header = styled.div`
  display: flex;
  padding: 0 20px;
  margin-top: 48px;
  margin-bottom: 165px;
  justify-content: center;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .intro {
    margin-bottom: 20px;
    margin-top: 46px;
    > p {
      margin: 0;
      font-size: 24px;
      font-weight: 400;
      text-align: center;
    }
  }

  .description {
    margin-bottom: 124px;
  }
`;

const CopyBtn = styled.button`
  width: 180px;
  height: 44px;
  margin-bottom: 30px;
  font-family: BM-HANNA;
  background-color: #00969f;
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};
`;

const DescriptionText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.light_gray};
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`;

export default InviteUser;
