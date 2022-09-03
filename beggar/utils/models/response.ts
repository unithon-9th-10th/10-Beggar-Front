import { TBeggar, TCategory, TStatus } from "./common";

export interface IRankingResponse {
  code: string;
  data: {
    leftDays: number;
    rankingList: [
      {
        beggarPoint: number;
        limitAmount: number;
        memberId: number;
        memberNickname: string;
        rank: number;
        remainAmount: number;
        usedAmount: number;
      }
    ];
  };
  message: string;
}

export interface IChallengeResultResponse {
  code: string;
  data: {
    amount: number;
    challengeDays: number;
    endDate: string;
    rankingList: [
      {
        beggarPoint: number;
        limitAmount: number;
        memberId: number;
        memberNickname: string;
        rank: number;
        remainAmount: number;
        usedAmount: number;
      }
    ];
    startDate: string;
  };
  message: string;
}

export interface IChallengeDetailResponse {
  data: {
    code: string;
    data: {
      memberDetailVoList: [
        {
          dailyExpenseVoList: [
            {
              expenseDetailVoList: [
                {
                  amount: number;
                  content: string;
                  expenseType: TCategory;
                  higherCount: number;
                  lowerCount: number;
                  memberCommentType: TBeggar | null;
                  referenceDate: string;
                }
              ];
              referenceDate: string;
              totalAmount: number;
            }
          ];
          limitAmount: number;
          memberNickname: string;
          memberPoint: number;
          ranking: number;
          remainAmount: number;
          usedAmount: number;
        }
      ];
    };
    message: string;
  };
}

export interface IGetMemberDetailResponse {
  code: string;
  data: {
    memberId: number;
    status: TStatus;
  };
  message: string;
}
