import type { NextPage } from "next";
import Image from "next/image";
import CurrentUserLine from "../../assets/img/challenge/currentUserLine.svg";
import NewFriendCircle from "../../assets/img/challenge/newFriendCircle.svg";
import styled from "styled-components";
import { useState } from "react";
import { Member } from "../../utils/models/challenge";
import Link from "next/link";

const Friends = ({ memberList, changeCurrentMember, currentUser }: any) => {
  return (
    <Container>
      {memberList && memberList.map((member: Member, index: number) => (
        <UserBox key={index} onClick={() => changeCurrentMember(index)}>
          <UserImage>
            {index + 1}
          </UserImage>
          <UserName>
            {member.memberNickname}
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
      <Link href="/inviteUser"><UserBox>
        <NewUserImage>
          <Image
            src={NewFriendCircle}
            alt="NewFriendCircle"
            width={32}
            height={32}
          />
        </NewUserImage>
        <UserName>초대</UserName>
      </UserBox></Link>
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

const UserBox = styled.div`
  cursor: pointer;
`;

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
