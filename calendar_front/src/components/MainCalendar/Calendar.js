import React from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

function TUICalendar() {
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
      repeat: '',
      start: '2023-08-10T15:00:00',
      end: '2023-08-10T15:30:00',
      calendarId: 'cal1',
      title: '말복',
      description: '내용',
      color: '색상',
      status: '상태',
      category: 'time',
      user: '유저',
      team: '팀',
    },
  ];

  const onAfterRenderEvent = (event) => {
    console.log(event.title);
  };

  return (
    <div>
      <Calendar
        height="420px"
        view="month"
        month={{
          dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          visibleWeeksCount: 4,
        }}
        calendars={calendars}
        events={initialEvents}
        onAfterRenderEvent={onAfterRenderEvent}
      />
    </div>
  );
}
export default TUICalendar;
