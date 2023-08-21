import React, { useState } from 'react';
import { styled } from 'styled-components';
import { RecoilRoot, useRecoilState } from 'recoil';
import { eventState } from '../recoilState';

import RightBar from '../components/RightBar/RightBar';
import TUICalendar from '../components/MainCalendar/TUICalendar';

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(242, 242, 242);
`;

const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  height: 90%;
  border: 1px solid rgb(235, 247, 239);
  background-color: rgb(244, 244, 244);
  border-radius: 40px 40px 40px 40px;
  box-shadow:
    6px 6px 8px #ebe1e3,
    -6px -6px 8px #ffffff;
  margin-bottom: 0.5%;
`;

const CalendarWrapper = styled.div`
  width: 100%;
`;

function Layout() {
  const [events, setEvents] = useRecoilState(eventState);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <RecoilRoot>
      <Container>
        <Wrapper>
          <CalendarWrapper>
            <TUICalendar
              events={events}
              setEvents={setEvents}
              view="month"
              setSelectedEvent={setSelectedEvent}
            />
          </CalendarWrapper>
          <RightBar selectedEvent={selectedEvent} />
        </Wrapper>
      </Container>
    </RecoilRoot>
  );
}

export default Layout;
