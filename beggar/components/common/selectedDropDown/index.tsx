import React, { useState, useMemo } from "react";
import Image from "next/image";
import styled from "styled-components";
import Box from "../../../assets/img/box.svg";
import { IDropdownProps, ISelectOption } from "./option";
import OutsideClickHandler from "react-outside-click-handler";

interface ArrowProps {
  isFold: boolean;
}

interface OptionProps {
  isSelected: boolean;
}

const SelectDropDown: React.FC<IDropdownProps> = ({
  options,
  value,
  onChangeValue,
}) => {
  const [isFold, setIsFold] = useState(false);

  const onClickOption = (clickedOption: string) => {
    onChangeValue(clickedOption);
    setIsFold(false);
  };

  const onClickCloseDropdown = () => {
    isFold && setIsFold(false);
  };

  const selectedValue = useMemo(() => {
    const index = options.findIndex((i: ISelectOption) => i.value === value);
    if (index === -1) return value;
    return options[index].option;
  }, [value]);

  return (
    <Wrapper className="dropdownWrapper" isFold={isFold}>
      <OutsideClickHandler onOutsideClick={onClickCloseDropdown}>
        <div>
          <Image id="box" width={67} height={40} src={Box} alt="box" />
          <label onClick={() => setIsFold(!isFold)}>
            <div className="value">{selectedValue}</div>
          </label>
        </div>
        <div className="list">
          {isFold &&
            options.map((item) => (
              <Option
                key={item.value}
                onClick={() => onClickOption(item.value)}
                isSelected={value === item.value}
              >
                {item.option}
              </Option>
            ))}
        </div>
      </OutsideClickHandler>
    </Wrapper>
  );
};

const Wrapper = styled.section<{ isFold: boolean } & ArrowProps>`
  > div > label {
    display: flex;
    background-image: url("/assets/img/create/downArrow.svg");
  }

  #box {
    position: relative;
  }

  .value {
    font-size: 14px;
    margin-left: 13px;
    position: absolute;
    top: 237px;
  }

  .list {
    position: absolute;
    z-index: 99;
    top: 260px;
    right: 20px;
    width: 67px;
    border: ${(props) => (props.isFold ? "1px solid #E0E0E0" : "")};
    border-radius: 0 0 5px 5px;
    border-top: 0;
  }
`;

const Option = styled.div<OptionProps>`
  width: 100%;
  height: 30px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => (props.isSelected ? "#555555" : "#999999")};
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 10px 12px 10px 11px;
  :last-child {
    border-radius: 0 0 4px 4px;
  }
  :hover {
    background-color: #ffe199;
  }
`;

export default SelectDropDown;
