import React, { useEffect, useState } from "react";
import { sortOption } from "./common/selectedDropDown/option";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../assets/img/common/leftArrow.svg";
import line from "../assets/img/common/line.svg";
import SelectDropDown from "./common/selectedDropDown";
import theme from "../styles/theme";
import DefaultBtn from "./common/defaultBtn";
import axios from "axios";

const CreateChallenge = () => {
  const [title, setTitle] = useState<string>("");
  const [money, setMoney] = useState<string>("");
  const [sort, setSort] = useState(sortOption[0].value);
  const [isDisable, setIsDisable] = useState(true);

  let today = new Date();
  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);

  let NumDay = 0;
  let NumSort = 0;
  let SumDay = 0;

  let StringDay = "";

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const onChangeSort = (sort: string) => {
    const sortValue = sort;
    setSort(sortValue);
    NumSort = Number(sort);
    NumDay = Number(day);
    SumDay = NumDay + NumSort - 1;
    StringDay = String(SumDay);
    if (SumDay < 10) {
      setToDay(0 + StringDay);
    } else {
      setToDay(StringDay);
    }
  };

  const [toDay, setToDay] = useState<string>(day);

  const onChangeMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMoney(value);
  };

  const onClickBtn = (e: React.MouseEvent<HTMLInputElement>) => {
    if (title === "" || money === "") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    if (title && money) {
      setIsDisable(false);
    }
  }, [title, money]);

  const onBlurMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value && setMoney(value + "원");
  };
  const onClickMoneyText = () => {
    money && setMoney(money.slice(0, money.length - 1));
  };

  return (
    <div>
      <Header>
        <Link href="/">
          <Image id="arrow" src={Arrow} alt="arrow" />
        </Link>
        <p>챌린지 생성</p>
      </Header>
      <BodyWrapper>
        <InputDiv>
          <TitleDiv>
            <p>챌린지 제목</p>
            <input
              value={title}
              onChange={onChangeTitle}
              placeholder="ex) 돈 모아서 여행가자"
            />
            <Image src={line} alt="line" />
          </TitleDiv>

          <MoneyDiv>
            <p>목표 총지출 금액</p>
            <input
              type="text"
              value={money}
              placeholder="기간 동안 총 사용할 수 있는 금액을 입력해주세요."
              onChange={onChangeMoney}
              onBlur={onBlurMoney}
              onClick={onClickMoneyText}
            />
            <Image src={line} alt="line" />
          </MoneyDiv>
          <DateDiv>
            <div>
              <TitleText>챌린지 기간</TitleText>
              <DateText theme={theme}>오늘 ~ {`${month}월${toDay}일`}</DateText>
            </div>
            <SelectDropDown
              value={sort}
              onChangeValue={onChangeSort}
              options={sortOption}
            />
          </DateDiv>
        </InputDiv>
        <Link href="/createUser">
          <DefaultBtn
            onClick={onClickBtn}
            height={60}
            value="다음"
            disabled={isDisable}
          />
        </Link>
      </BodyWrapper>
    </div>
  );
};

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
    width: 330px;
    margin-bottom: 10px;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 400;
  }
`;

const DateDiv = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 41px;
`;

const TitleText = styled.p`
  margin: 0;
`;

const DateText = styled.p`
  margin-top: 7px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray};
  margin-bottom: 363px;
`;

const MoneyDiv = styled.div`
  padding: 0 20px;
  font-size: 14px;
  margin-bottom: 31px;
  > p {
    font-size: 16px;
  }
  input {
    width: 350px;
    border: none;
    outline: none;
    -webkit-appearance: none;
    margin-bottom: 10px;
  }
`;

export default CreateChallenge;
