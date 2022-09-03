import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import Arrow from "../assets/img/common/leftArrow.svg";
import People from "../assets/img/common/peopleImg.svg";
import line from "../assets/img/common/line.svg";
import DefaultBtn from "./common/defaultBtn";

import { postSignUp, putMember } from "../utils/api/index";

const CreateUser = () => {
  const router = useRouter();
  const cid = router.query.cid;
  const [nickname, setNickname] = useState("");
  const [disable, setDisable] = useState(true);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
    if (nickname === "") {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };

  const registerUser = async () => {
    const body = {
      nickname: nickname,
    };
    postSignUp()
      .then((res) => {
        const id = res.data.data.memberId;
        localStorage.setItem("memberId", id);
        return id;
      })
      .then((uid) => {
        putMember(body, cid, uid).then((res) => {
          if (res.data.code == "SUCCESS") {
            router.push({
              pathname: "/challenge",
              query: { uid: uid },
            });
          }
        });
      });
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
            placeholder="닉네임을 입력해주세요."
          />
          <Image src={line} alt="line" />
        </InputDiv>
        <Link href="/inviteUser">
          <DefaultBtn
            disabled={disable}
            height={60}
            value={"상대 초대"}
            onClick={registerUser}
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
