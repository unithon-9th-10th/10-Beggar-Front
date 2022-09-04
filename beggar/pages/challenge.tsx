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
  const [info, setInfo] = useState<IChallengeDetailResponse>();
  useEffect(() => {
    const memberId = localStorage?.getItem("memberId");
    const headers = { "X-BEGGAR-MEMBER-ID": memberId };
    getChallengeDetail(headers).then((res) => {
      if (res.data.code === "SUCCESS") {
        setInfo(res);
      }
    });
  }, []);
  console.log(info);

  return (
    <div>
      <Header />
      <Friends />
      <InfoCard />
      <SpendingHistory />
    </div>
  );
};

export default MainChallenge;
