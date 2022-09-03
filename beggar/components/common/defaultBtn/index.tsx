import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  height?: number;
}

const DefaultBtn = ({ height, type = "button", ...props }: Props) => {
  return (
    <DefaultBtnBox
      theme={theme}
      type={type}
      height={height}
      isDisabled={props.disabled}
      {...props}
    />
  );
};

const DefaultBtnBox = styled.input<{
  height?: number;
  isDisabled?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 350px;
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  background-color: ${({ theme, isDisabled }) =>
    isDisabled ? theme.color.light_gray : theme.color.black};
  border: ${({ isDisabled }) => (isDisabled ? "none" : "1px solid #000000")};
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  font-family: BM-HANNA;
  font-weight: 400;
`;

export default DefaultBtn;
