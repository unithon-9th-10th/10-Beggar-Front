import type { NextPage } from "next";
import styled from "styled-components";
import Header from "../components/challenge/header";
import Friends from "../components/challenge/friends";
import InfoCard from "../components/challenge/infoCard";
import SpendingHistory from "../components/challenge/spendingHistory";

import { useEffect, useState } from "react";
import { getChallengeDetail } from "../utils/api/index";
import { IChallengeDetailResponse } from "../utils/models/response";

const MainChallenge: NextPage = () => {
  const [memberList, setMemberList] = useState<IChallengeDetailResponse['data']['data']['memberDetailVoList']>();
  const [title, setTitle] = useState("");
  const [memberNumber, setMemberNumber] = useState(0);

  useEffect(() => {
    const memberId = localStorage?.getItem("memberId");
    const headers = { "X-BEGGAR-MEMBER-ID": memberId };
    getChallengeDetail(headers).then((res) => {
      if (res.data.code === "SUCCESS") {
        setMemberList(res.data.data.memberDetailVoList);
        setTitle(res.data.data.title);
      }
    });
  }, [memberList]);

  const changeCurrentMember = (index: number) => {
    setMemberNumber(index);
  };
  
  console.log(memberNumber, "memberNumber in challenge");
  console.log(memberList[memberNumber]);
  // 여기서 cur 돌려가지고 각각. .. 보내주기 

  return (
    <div>
      <Header title={title} />
      <Friends memberList={memberList} changeCurrentMember={changeCurrentMember} memberNumber={memberNumber} />
      {/* <InfoCard member={memberList && memberList[memberNumber]} /> */}
      <SpendingHistory member={memberList && memberList[memberNumber]} />
    </div>
  );
};

export default MainChallenge;
