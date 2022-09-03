export interface IDropdownProps {
  options: Array<ISelectOption>;
  value: string;
  onChangeValue: (value: string) => void;
}

export interface ISelectOption {
  option: string;
  value: string;
}

export const sortOption: ISelectOption[] = [
  {
    option: "1일차",
    value: "1",
  },
  {
    option: "3일차",
    value: "3",
  },
  {
    option: "일주일",
    value: "7",
  },
];
