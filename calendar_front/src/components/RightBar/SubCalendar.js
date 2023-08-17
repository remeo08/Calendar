import { styled } from 'styled-components';
import React from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

const SubCalendarHeader = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid lightgrey;
  color: grey;
`;
const SubCalendarBox = styled.div`
  overflow: auto;
  width: 100%;
  height: 100%;
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
          height="160px"
          view="month"
          month={{
            dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
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

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// function ReactCalendar() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//     </div>
//   );
// }

// export default ReactCalendar;
