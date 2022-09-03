import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  height?: number;
  children?: string;
}

const DefaultBtn = ({ height, children }: Props) => {
  return (
    <DefaultBtnBox theme={theme} height={height}>
      {children}
    </DefaultBtnBox>
  );
};

const DefaultBtnBox = styled.div<{
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
