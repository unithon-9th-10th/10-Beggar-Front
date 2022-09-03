import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Arrow from "../assets/img/common/leftArrow.svg";
import People from "../assets/img/common/peopleImg.svg";
import line from "../assets/img/common/line.svg";
import DefaultBtn from "./common/defaultBtn";

const CreateUser = () => {
  const [content, setContent] = useState({
    title: " ",
    disabled: true,
  });

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent({
      ...content,
      title: value,
    });
    if (content.title === "") {
      setContent({ ...content, disabled: true });
    } else {
      setContent({ ...content, disabled: false });
    }
  };

  return (
    <div>
      <Header>
        <Link href="/createChallenge">
          <Image id="arrow" src={Arrow} alt="arrow" />
        </Link>
        <p>프로필 생성</p>
      </Header>
      <Wrapper>
        <Image id="people" src={People} alt="people" />
        <InputDiv>
          <p>닉네임</p>
          <input
            onChange={onChangeTitle}
            placeholder="ex) 돈 모아서 여행가자"
          />
          <Image src={line} alt="line" />
        </InputDiv>
        <Link href="/inviteUser">
          <DefaultBtn
            disabled={content.disabled}
            height={60}
            value={"상대 초대"}
          />
        </Link>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  padding: 0 20px;
  margin-top: 48px;
  margin-bottom: 62px;
  > p {
    margin-left: 108px;
  }
`;

const InputDiv = styled.div`
  margin-bottom: 368px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > p {
    margin: 58px 0 14px 0;
    font-size: 16px;
    font-weight: 400;
  }
  > input {
    width: 350px;
    margin-bottom: 10px;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default CreateUser;
