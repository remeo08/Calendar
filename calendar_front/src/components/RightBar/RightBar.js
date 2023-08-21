import React from 'react';
import { styled } from 'styled-components';
import SubCalendar from './SubCalendar';
import Status from './Status';

const Container = styled.div`
  height: 90vh;
  border-radius: 0px 40px 40px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid rgb(235, 237, 239);
`;
const Wrapper = styled.div`
  width: 100%;
  height: 48%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

const StatusHeader = styled.div`
  height: 22px;
  border-top: 1px solid rgb(235, 237, 239);
  border-bottom: 1px solid rgb(235, 237, 239);
  color: grey;
  text-align: center;
  font-size: 22px;
  padding: 4px;
`;

function RightBar({ selectedEvent }) {
  return (
    <Container>
      <Wrapper>
        <SubCalendar />
      </Wrapper>
      <Wrapper>
        <StatusHeader>Status</StatusHeader>
        <Status selectedEvent={selectedEvent} />
      </Wrapper>
    </Container>
  );
}

export default RightBar;
