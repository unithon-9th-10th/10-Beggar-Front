import { TBeggar, TCategory } from "./common";

export interface IChallengeRequest {
  amount: number;
  challengeDays: number;
  endDate: string;
  startDate: string;
  title: string;
}

export interface IAddMemberRequest {
  nickname: string;
}

export interface ICommentPostDto {
  beggarType: TBeggar;
  expenseId: number;
}

export interface ICommentDeleteDto {
  expenseId: number;
}

export interface IExpenseAddRequest {
  amount: number;
  content: string;
  expensedType: TCategory;
  referenceDate: string;
}
