import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import Required from "../assets/img/common/required.svg";
import CloseButton from "../assets/img/common/closeButton.svg";

// import SelectDropDown from "./common/selectedDropDown";

interface category {
  option: string;
  value: string;
}
const categoryOption: category[] = [
  {
    option: "FOOD",
    value: "1",
  },
  {
    option: "SNACK",
    value: "2",
  },
  {
    option: "SHOPPING",
    value: "3",
  },
  {
    option: "ENTERTAINMENT",
    value: "4",
  },
  {
    option: "TRANSPORTATION",
    value: "5",
  },
  {
    option: "ETC",
    value: "6",
  },
];

const CreateSpend = () => {
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

  const [category, setCategory] = useState(categoryOption[0].value);
  const onChangeCategory = (category: string) => {
    setCategory(category);
  };

  return (
    <div>
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
            <TitleBox>
              <TitleText>카테고리</TitleText>
              <Image id="Required" src={Required} alt="Required" />
            </TitleBox>
          </CategoryBox>
        </InputDiv>
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
  margin: 0 20px;
`;

const TitleBox = styled.div`
  display: flex;
`;

const TitleText = styled.p``;

export default CreateSpend;
