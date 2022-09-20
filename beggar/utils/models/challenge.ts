import { TBeggar, TCategory } from "./common";

export interface Member {
  dailyExpenseVoList: [{
    expenseDetailVoList: [ExpenseDetail];
    referenceDate: string;
    totalAmount: number;
  }];
  limitAmount: number;
  memberNickname: string;
  memberPoint: number;
  ranking: number;
  remainAmount: number;
  usedAmount: number;
}

interface ExpenseDetail {
  amount: number;
  content: string;
  expenseId: number;
  expenseType: TCategory;
  higherCount: number;
  lowerCount: number;
  memberCommentType: TBeggar | null;
  referenceDate: string;
}
