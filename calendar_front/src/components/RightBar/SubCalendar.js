import { styled } from 'styled-components';
import React from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

const SubCalendarHeader = styled.div`
  height: 3vh;
  color: grey;
  font-weight: 100;
  text-align: center;
  font-size: 22px;
  padding: 8px;
`;

const SubCalendarBox = styled.div`
  height: 30vh;
`;

function SubCalendar() {
  const calendars = [{ id: 'cal1', name: 'Personal' }];
  const initialEvents = [
    {
      id: '1',
      calendarId: 'cal1',
      title: 'Lunch',
      category: 'time',
      start: '2022-06-28T12:00:00',
      end: '2022-06-28T13:30:00',
    },
    {
      id: '2',
      calendarId: 'cal1',
      title: 'Coffee Break',
      category: 'time',
      start: '2022-06-28T15:00:00',
      end: '2022-06-28T15:30:00',
    },
  ];

  const onAfterRenderEvent = (event) => {
    console.log(event.title);
  };

  return (
    <>
      <SubCalendarHeader>SubCalender</SubCalendarHeader>
      <SubCalendarBox>
        <Calendar
          height="30vh"
          view="month"
          month={{
            dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            isAlways6Weeks: false,
          }}
          calendars={calendars}
          events={initialEvents}
          onAfterRenderEvent={onAfterRenderEvent}
        />
      </SubCalendarBox>
    </>
  );
}
export default SubCalendar;
