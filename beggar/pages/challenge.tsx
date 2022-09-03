import type { NextPage } from "next";
import styled from "styled-components";
import Title from "../components/challenge/title";
import Friends from "../components/challenge/friends";
import InfoCard from "../components/challenge/infoCard";
import SpendingHistory from "../components/challenge/spendingHistory";

const mainChallenge: NextPage = () => {
  return (
    <Container>
      <Title />
      <Friends />
      <InfoCard />
      <SpendingHistory />
    </Container>
  );
};

const Container = styled.div``;

export default mainChallenge;