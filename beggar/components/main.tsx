import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import theme from "../styles/theme";
import main from "../assets/img/startmain.svg";
import DefaultBtn from "./common/defaultBtn";

const Main = () => {
  const [modal, setModal] = useState<boolean>(false);

  const onClickInvite = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal ? (
        <ModalWrapper>
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
          <ModalDiv>
            <div>
              <p>챌린지를 개설한 친구에게 링크를</p>
              <p>바로 열어주시면 연결됩니다!</p>
            </div>
            <DefaultBtn onClick={onClickInvite} height={60} value="확인" />
          </ModalDiv>
        </ModalWrapper>
      ) : (
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
          <Link href="/createChallenge">
            <DefaultBtn height={60} value={"챌린지 만들기"} />
          </Link>
          <Bottom>
            <p onClick={onClickInvite}>초대받은 챌린지가 있나요?</p>
          </Bottom>
        </Wrapper>
      )}
    </>
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
  color: ${({ theme }) => theme.color.light_gray};
  margin-left: 5px;
`;

const Topbeggar = styled.p`
  color: ${({ theme }) => theme.color.light_gray};
`;

const Title = styled.div`
  margin-bottom: 95px;
  > p {
    margin: 0;
    font-size: 50px;
  }
`;

const Body = styled.div`
  margin-bottom: 54px;
`;

const Bottom = styled.div`
  > p {
    margin-top: 14px;
  }
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #999999;
`;

const ModalDiv = styled.div`
  position: fixed;
  top: 670px;
  width: 390px;
  height: 187px;
  border: 1px solid black;
  background-color: white;
  border-radius: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div > p {
    text-align: center;
    margin: 0 0 5px 0;
  }
  > div {
    margin-bottom: 10px;
  }
`;

export default Main;
