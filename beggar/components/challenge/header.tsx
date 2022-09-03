import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import RankingIcon from "../../assets/img/challenge/rankingIcon.svg";
import styled from "styled-components";

const Header: NextPage = () => {
  return (
    <Container>
      <TitleText>돈아끼고여행가자</TitleText>
      <DdayText>6일 남음</DdayText>
      <Link href="/ranking">
        <Ranking>
          <Image src={RankingIcon} alt="rankingIcon" width={29} height={37} />
        </Ranking>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 68px;
  margin-top: 40px;
  padding-left: 22px;
  border-bottom: 1px dotted #000000;
`;

const TitleText = styled.div`
  font-size: 20px;
  margin-bottom: 6px;
`;

const DdayText = styled.div`
  color: #00969f;
  font-size: 14px;
`;

const Ranking = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

export default Header;
