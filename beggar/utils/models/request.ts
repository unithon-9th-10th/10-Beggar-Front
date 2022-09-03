import { TBeggar, TCategory } from "./common";

export interface IChallengeRequest {
  amount: string;
  challengeDays: string;
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
  amount: string;
  content: string;
  expensedType: TCategory;
  referenceDate: string | null;
}
