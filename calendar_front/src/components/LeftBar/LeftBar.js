import { styled } from 'styled-components';
import React, { useState } from 'react';

import TeamList from './TeamList';
import MakeTeamModal from './MakeTeamModal';
const Container = styled.div`
  display: flex;
`;
const LeftBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 3.5vw;
  background-color: rgb(255, 255, 255);
  border-radius: 14px 0 0 14px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4px 0;
`;
const Column = styled.div`
  padding: 0 13px;
`;
const Icon = styled.div`
  width: 1.5vw;
  height: 3vh;
  background-color: rgb(255, 165, 180);
  margin: 10px 0;
  border-radius: 15px;
`;
const MyCalendarIcon = styled.button`
  width: 1.5vw;
  height: 3vh;
  border-radius: 15px;
  border: none;
  margin: 10px 0;
  background-color: rgb(192, 246, 229);
`;
const TeamCalendarIcon = styled.button`
  width: 1.5vw;
  height: 3vh;
  border-radius: 15px;
  background-color: rgb(221, 203, 254);
  margin: 10px 0;
  border: none;
`;
const MakeTeam = styled.div`
  width: 1.5vw;
  height: 3vh;
  border-radius: 15px;
  background-color: rgb(255, 165, 180);
  color: white;
  margin: 10px 0;
  text-align: center;
`;

const user = [
  {
    id: 1,
    teamname: 'team1',
    members: ['륜아', '병용', '가림', '소진', '지윤'],
  },
  {
    id: 2,
    teamname: '어벤져스',
    members: ['아이언맨', '캡틴아메리카', '토르'],
  },
  {
    id: 3,
    teamname: '가오갤',
    members: ['아임그루트', '스타로드', '드렉스', '로켓'],
  },
];

function LeftBar() {
  const [visible, setVisible] = useState(false);
  const [addTeam, setAddTeam] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  return (
    <Container>
      <LeftBarContainer>
        <Wrapper>
          <Column>
            <Icon />
          </Column>
          <Column>
            <MyCalendarIcon name="My" />
          </Column>
          <Column>
            {user.map((teaminfo) => (
              <div key={teaminfo.id}>
                <TeamCalendarIcon
                  onClick={() => {
                    setSelectedTeamId(teaminfo.id - 1); // 선택된 팀의 ID를 설정
                    setVisible(!visible);
                  }}
                >
                  {teaminfo.id}
                </TeamCalendarIcon>
              </div>
            ))}
          </Column>
        </Wrapper>
        <Wrapper>
          <Column>
            <MakeTeam
              onClick={() => {
                setAddTeam(!addTeam);
              }}
            ></MakeTeam>
          </Column>
        </Wrapper>
      </LeftBarContainer>
      {visible && <TeamList user={user} num={selectedTeamId} />}
      {addTeam && <MakeTeamModal />}
    </Container>
  );
}
export default LeftBar;
