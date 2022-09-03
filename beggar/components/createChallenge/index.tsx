import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Arrow from "../../assets/img/common/leftArrow.svg";
import line from "../../assets/img/common/line.svg";

const Create = () => {
  return (
    <Wrapper>
      <Header>
        <Image id="arrow" src={Arrow} alt="arrow" />
        <p>챌린지 생성</p>
      </Header>
      <InputDiv>
        <TitleDiv>
          <p>챌린지 제목</p>
          <input placeholder="ex) 돈 모아서 여행가자" />
          <Image src={line} alt="line" />
        </TitleDiv>
        <DateDiv>
          <p>챌린지 기간</p>
        </DateDiv>
      </InputDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.div`
  display: flex;
  padding: 0 20px;
  margin-top: 48px;
  > p {
    margin-left: 108px;
  }
`;

const InputDiv = styled.div``;

const TitleDiv = styled.div`
  padding: 0 20px;
  margin-bottom: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > input {
    width: 350px;
    margin-bottom: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
  }
`;

const DateDiv = styled.div`
  padding: 0 20px;
`;

export default Create;
