import React, { useState } from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';

function TUICalendar() {
  const calendars = [{ id: 'cal1', name: 'Personal' }];
  const initialEvents = [
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
      team: '어벤져스',
    },
    {
      id: '3',
      repeat: '',
      start: '2023-08-12T15:00:00',
      end: '2023-08-12T15:30:00',
      calendarId: 'cal1',
      title: 'event2',
      description: '내용',
      color: '색상',
      status: '상태',
      category: 'time',
      user: '유저',
      team: 'team1',
    },
    {
      id: '4',
      repeat: '',
      start: '2023-08-20T15:00:00',
      end: '2023-08-20T15:30:00',
      calendarId: 'cal1',
      title: 'event3',
      description: '내용',
      color: '색상',
      status: '상태',
      category: 'time',
      user: '유저',
      team: '가오갤',
    },
  ];

  const filteredEvents = initialEvents.filter(
    (event) => event.team === 'team1',
  );

  const onAfterRenderEvent = (event) => {
    console.log(event.title);
  };

  const [currentView, setCurrentView] = useState('month');

  const changeView = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <button onClick={() => changeView('month')}>month</button>
      <button onClick={() => changeView('week')}>week</button>
      <button onClick={() => changeView('day')}>day</button>
      <Calendar
        height="420px"
        view={currentView}
        month={{
          dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          // visibleWeeksCount: 4,
          isAlways6Weeks: false,
        }}
        calendars={calendars}
        events={filteredEvents}
        onAfterRenderEvent={onAfterRenderEvent}
      />
    </div>
  );
}

export default TUICalendar;
