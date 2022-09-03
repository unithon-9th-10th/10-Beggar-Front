import type { NextPage } from "next";
import styled from "styled-components";
import Title from "../../components/challenge/title";
import Friends from "../../components/challenge/friends";

const mainChallenge: NextPage = () => {
  return (
    <Container>
      <Title />
      <Friends />
    </Container>
  );
};

const Container = styled.div``;

export default mainChallenge;
