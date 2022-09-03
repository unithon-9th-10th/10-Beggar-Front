import type { NextPage } from "next";
import Image from "next/image";
import RankingIcon from "../../assets/img/challenge/rankingIcon.svg";
import CurrentUserLine from "../../assets/img/challenge/currentUserLine.svg";
import NewFriendCircle from "../../assets/img/challenge/newFriendCircle.svg";
import styled from "styled-components";
import { useState } from "react";
import { IChallengeDetailResponse } from "../../utils/models/response";

const Friends: NextPage = (props) => {
  const friendList = props.friendsList;
  console.log(friendList);
  // const friendList = [
  //   { name: "n1" },
  //   { name: "n2" },
  //   { name: "n3", image: "blabla" },
  //   { name: "n4", image: "blabla" },
  //   { name: "n5", image: "blabla" },
  //   { name: "n3", image: "blabla" },
  //   { name: "n4", image: "blabla" },
  //   { name: "n5", image: "blabla" },
  // ];

  const [currentUser, setCurrentUser] = useState(0);

  return (
    <Container>
      {friendList.map((friend, index) => (
        <UserBox key={friend.name}>
          <UserImage>
            {friend.image ? (
              <Image
                src={RankingIcon}
                alt="RankingIcon"
                width={32}
                height={32}
              />
            ) : (
              index + 1
            )}
          </UserImage>
          <UserName>
            {friend.name}
            {currentUser === index && (
              <Image
                src={CurrentUserLine}
                alt="CurrentUserLine"
                width="100%"
                height={30}
              />
            )}
          </UserName>
        </UserBox>
      ))}
      <UserBox>
        <NewUserImage>
          <Image
            src={NewFriendCircle}
            alt="NewFriendCircle"
            width={32}
            height={32}
          />
        </NewUserImage>
        <UserName>초대</UserName>
      </UserBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 20px;
  height: 100px;
  padding: 16px 20px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UserBox = styled.div``;

const UserImage = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid #000000;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewUserImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50px;
`;

const UserName = styled.div`
  width: 32px;
  margin-top: 6px;
  font-size: 14px;
  text-align: center;
  position: relative;
`;

export default Friends;
