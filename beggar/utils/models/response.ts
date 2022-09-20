import { Member } from "./challenge";
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
      memberDetailVoList: [Member],
      title: string;
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
