import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Required from "../assets/img/common/required.svg";
import CloseButton from "../assets/img/common/closeButton.svg";
import LongBox from "../assets/img/expend/longBox.svg";
import line from "../assets/img/common/line.svg";
import rice from "../assets/img/expend/rice.svg";
import car from "../assets/img/expend/car.svg";
import shopping from "../assets/img/expend/shopping.svg";
import enter from "../assets/img/expend/enter.svg";
import snack from "../assets/img/expend/snack.svg";
import etc from "../assets/img/expend/etc.svg";

interface category {
  option: string;
  value: string;
}
const categoryOption: category[] = [
  {
    option: "밥",
    value: "FOOD",
  },
  {
    option: "간식",
    value: "SNACK",
  },
  {
    option: "쇼핑",
    value: "SHOPPING",
  },
  {
    option: "유흥",
    value: "ENTERTAINMENT",
  },
  {
    option: "교통",
    value: "TRANSPORTATIOM",
  },
  {
    option: "기타",
    value: "ETC",
  },
];

const CreateSpend = () => {
  const [money, setMoney] = useState<string>("");
  const [place, setPlace] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [category, setCategory] = useState(categoryOption[0].option);

  let today = new Date();

  let month = ("0" + (today.getMonth() + 1)).slice(-2);
  let day = ("0" + today.getDate()).slice(-2);
  let hours = ("0" + today.getHours()).slice(-2);
  let minutes = ("0" + today.getMinutes()).slice(-2);

  let dateString = month + "월" + day + "일" + " " + hours + ":" + minutes;

  const onPlaceMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPlace(value);
  };

  const onChangeMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMoney(value);
  };

  const onBlurMoney = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value && setMoney(value + "원");
  };
  const onClickMoneyText = () => {
    money && setMoney(money.slice(0, money.length - 1));
  };

  const onClickModal = () => {
    setModal(!modal);
  };

  const onClickSelect = (e: React.MouseEvent<HTMLImageElement>) => {
    setCategory(e.target.value);
    setModal(!modal);
  };

  return (
    <div>
      {modal ? (
        <ModalWrapper>
          <Header>
            <Link href="/challenge">
              <Image id="CloseButton" src={CloseButton} alt="CloseButton" />
            </Link>
            <p>지출 내역 추가</p>
            <Link href="/challenge">
              <AddButton>완료</AddButton>
            </Link>
          </Header>
          <Wrapper>
            <InputDiv>
              <CategoryBox>
                <div>
                  <TitleText>카테고리</TitleText>
                  <Image id="Required" src={Required} alt="Required" />
                </div>
                <Image src={LongBox} alt="box" />
                <p>{category}</p>
              </CategoryBox>
              <MoneyDiv>
                <div>
                  <TitleText>지출 금액</TitleText>
                  <Image id="Required" src={Required} alt="Required" />
                </div>
                <input
                  type="text"
                  value={money}
                  placeholder="지출 금액을 입력해주세요."
                  onChange={onChangeMoney}
                  onBlur={onBlurMoney}
                  onClick={onClickMoneyText}
                />
                <Image src={line} alt="line" />
              </MoneyDiv>
              <PlaceDiv>
                <div>
                  <TitleText>지출처</TitleText>
                  <Image id="Required" src={Required} alt="Required" />
                </div>
                <input
                  type="text"
                  value={place}
                  placeholder="지출처를 입력해주세요."
                  onChange={onPlaceMoney}
                />
                <Image src={line} alt="line" />
              </PlaceDiv>
            </InputDiv>
          </Wrapper>
          <ModalDiv>
            <p>카테고리 선택</p>
            <div>
              <Image onClick={onClickSelect} src={rice} />
              <Image onClick={onClickSelect} src={car} />
              <Image onClick={onClickSelect} src={shopping} />
              <Image onClick={onClickSelect} src={enter} />
              <Image onClick={onClickSelect} src={etc} />
              <Image onClick={onClickSelect} src={snack} />
            </div>
          </ModalDiv>
        </ModalWrapper>
      ) : (
        <>
          <Header>
            <Link id="x" href="/challenge">
              <Image id="CloseButton" src={CloseButton} alt="CloseButton" />
            </Link>
            <p>지출 내역 추가</p>
            <Link href="/challenge">
              <AddButton>완료</AddButton>
            </Link>
          </Header>
          <Wrapper>
            <InputDiv>
              <CategoryBox>
                <div>
                  <TitleText>카테고리</TitleText>
                  <Image id="Required" src={Required} alt="Required" />
                </div>
                <Image onClick={onClickModal} src={LongBox} alt="box" />
                <p>{category}</p>
              </CategoryBox>
              <MoneyDiv>
                <div>
                  <TitleText>지출 금액</TitleText>
                  <Image id="Required" src={Required} alt="Required" />
                </div>
                <input
                  type="text"
                  value={money}
                  placeholder="지출 금액을 입력해주세요."
                  onChange={onChangeMoney}
                  onBlur={onBlurMoney}
                  onClick={onClickMoneyText}
                />
                <Image src={line} alt="line" />
              </MoneyDiv>
              <PlaceDiv>
                <div>
                  <TitleText>지출처</TitleText>
                  <Image id="Required" src={Required} alt="Required" />
                </div>
                <input
                  type="text"
                  value={place}
                  placeholder="지출처를 입력해주세요."
                  onChange={onPlaceMoney}
                />
                <Image src={line} alt="line" />
              </PlaceDiv>
              <DateDiv>
                <div>
                  <TitleText>지출일시</TitleText>
                  <Image id="Required" src={Required} alt="Required" />
                </div>
                <Image src={LongBox} alt="box" />
                <p>{dateString}</p>
              </DateDiv>
            </InputDiv>
          </Wrapper>
        </>
      )}
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
  align-items: center;
  padding: 0 20px;
  margin-bottom: 20px;

  > p {
    margin-top: 30px;
    margin-left: 108px;
  }
`;

const AddButton = styled.div`
  margin-top: 16px;
  position: absolute;
  right: 20px;
`;

const InputDiv = styled.div`
  width: 100%;
`;

const CategoryBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 0 10px 0;

  .box {
    position: relative;
  }
  > p {
    width: 40px;
    position: absolute;
    left: 240px;
    margin-right: 300px;
    font-size: 16px;
  }
  > div {
    display: flex;
  }
`;

const TitleText = styled.p``;

const MoneyDiv = styled.div`
  padding: 0 20px;
  font-size: 14px;
  margin-top: 30px;
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
  > div {
    display: flex;
  }
`;

const PlaceDiv = styled.div`
  padding: 0 20px;
  font-size: 14px;
  margin-top: 30px;
  margin-bottom: 31px;
  > p {
    font-size: 16px;
  }
  input {
    width: 350px;
    border: none;
    outline: none;
    margin-bottom: 10px;
  }
  > div {
    display: flex;
  }
`;

const DateDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 0 10px 0;
  > div {
    display: flex;
  }
  .box {
    position: relative;
  }
  > p {
    position: absolute;
    right: 50px;
    font-size: 16px;
  }
`;

const ModalWrapper = styled.div`
  background-color: #999999;
`;

const ModalDiv = styled.div`
  width: 390px;
  height: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > p {
    font-size: 20px;
  }
  > div {
    margin-left: 20px;
  }
`;

export default CreateSpend;
