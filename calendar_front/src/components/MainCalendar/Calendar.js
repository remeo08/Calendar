import React, { useState } from 'react';
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

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

  const onBeforeCreateEvent = (eventData) => {
    const event = {
      calendarId: eventData.calendarId || '',
      id: String(Math.random()),
      title: eventData.title,
      isAllday: eventData.isAllday,
      start: eventData.start,
      end: eventData.end,
      category: eventData.isAllday ? 'allday' : 'time',
      dueDateClass: '',
      location: eventData.location,
      state: eventData.state,
      isPrivate: eventData.isPrivate,
    };

    console.log(event);

    alert('일정 생성 완료');
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
          isAlways6Weeks: false,
        }}
        useFormPopup
        useDetailPopup
        calendars={calendars}
        events={filteredEvents}
        onAfterRenderEvent={onAfterRenderEvent}
        onBeforeCreateEvent={onBeforeCreateEvent}
        template={{
          popupStateBusy() {
            return 'Done';
          },
          popupStateFree() {
            return 'Todo';
          },
          locationPlaceholder() {
            return '';
          },
        }}
      />
    </div>
  );
}

export default TUICalendar;
