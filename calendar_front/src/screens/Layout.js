import React, { useState } from 'react';
import { styled } from 'styled-components';
import { RecoilRoot, useRecoilState } from 'recoil';
import { eventState } from '../recoilState';

import LeftBar from '../components/LeftBar/LeftBar';
import RightBar from '../components/RightBar/RightBar';
import TUICalendar from '../components/MainCalendar/TUICalendar';

const Container = styled.div`
  font-color: grey;
  display: flex;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90vw;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow:
    0 2px 20px rgba(255, 0, 22, 0.1),
    0 2px 20px rgba(255, 0, 22, 0.1);
`;

const MiddlePartWrap = styled.div`
  width: 90vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgb(235, 237, 239);
  border-left: 1px solid rgb(235, 237, 239);
`;

function Layout() {
  const [events, setEvents] = useRecoilState(eventState); // Use the Recoil state
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <RecoilRoot>
      <Container>
        <Wrapper>
          <LeftBar />
          <MiddlePartWrap>
            <TUICalendar
              events={events}
              setEvents={setEvents}
              view="month"
              setSelectedEvent={setSelectedEvent}
            />
          </MiddlePartWrap>
          <RightBar selectedEvent={selectedEvent} />
        </Wrapper>
      </Container>
    </RecoilRoot>
  );
}

export default Layout;
