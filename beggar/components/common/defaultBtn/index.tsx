import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  height?: number;
}

const DefaultBtn = ({ height, type = "button", ...props }: Props) => {
  return <DefaultBtnBox theme={theme} type={type} height={height} {...props} />;
};

const DefaultBtnBox = styled.input<{
  height?: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 350px;
  height: ${({ height }) => (height ? `${height}px` : `100%`)};
  background: ${({ theme }) => theme.color.black};
  border: 1px solid black;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};
  font-size: 20px;
  font-weight: 400;
`;

export default DefaultBtn;
