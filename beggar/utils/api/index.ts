import {
  IAddMemberRequest,
  IChallengeRequest,
  ICommentPostDto,
  IExpenseAddRequest,
} from "../models/request";
import {
  IChallengeDetailResponse,
  IChallengeResultResponse,
  IGetMemberDetailResponse,
  IRankingResponse,
} from "../models/response";
import instance from "../axios";
import { TBeggar, TCategory, TStatus } from "../models/common";

export const postChallenges = async (body: IChallengeRequest) => {
  try {
    return await instance.post(`/api/v1/challenges`, body);
  } catch (err) {
    throw err;
  }
};

export const putMember = async (
  body: IAddMemberRequest,
  challenges_id: string | string[] | undefined,
  member_id: number
) => {
  try {
    return await instance.put(
      `/api/v1/challenges/${challenges_id}/members/${member_id}`,
      body
    );
  } catch (error) {}
};

export const deleteComment = async (expenseId: number) => {
  try {
    return await instance.delete(`/api/v1/comments`);
  } catch (error) {
    throw error;
  }
};

export const postComment = async (body: ICommentPostDto) => {
  try {
    return await instance.post(`/api/v1/comments`, body);
  } catch (error) {
    throw error;
  }
};

export const postExpense = async (body: IExpenseAddRequest, headers: any) => {
  try {
    return await instance.post(`/api/v1/expenses`, body, { headers });
  } catch (error) {
    throw error;
  }
};

export const postSignUp = async () => {
  try {
    return await instance.post(`/api/v1/members/signup`);
  } catch (error) {
    throw error;
  }
};

export const getRanking = async (
  challenges_id: number
): Promise<IRankingResponse> => {
  try {
    return await instance.get(`/api/v1/challenges/${challenges_id}/ranking`);
  } catch (err) {
    throw err;
  }
};

export const getResult = async (
  challenges_id: number
): Promise<IChallengeResultResponse> => {
  try {
    return await instance.get(`/api/v1/challenges/${challenges_id}/results`);
  } catch (error) {
    throw error;
  }
};

export const getChallengeDetail = async (
  headers: any
): Promise<IChallengeDetailResponse> => {
  try {
    return await instance.get(`/api/v1/challenge`, { headers });
  } catch (error) {
    throw error;
  }
};

export const getMemberDetail = async (
  member_id: number
): Promise<IGetMemberDetailResponse> => {
  try {
    return await instance.get(`/api/v1/members/${member_id}`);
  } catch (error) {
    throw error;
  }
};
