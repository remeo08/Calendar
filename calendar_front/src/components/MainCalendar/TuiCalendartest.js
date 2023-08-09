import React, { useEffect, useRef } from 'react';
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const MyCalendar = () => {
  const calendarRef = useRef();
  const calendarInstance = useRef();

  const DEFAULT_MONTH_OPTIONS = {
    dayNames: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
    visibleWeeksCount: 0,
    workweek: false,
    narrowWeekend: false,
    startDayOfWeek: 0,
    isAlways6Weeks: true,
    visibleEventCount: 6,
  };

  useEffect(() => {
    if (calendarRef.current !== null) {
      const calendar = new Calendar(calendarRef.current, {
        defaultView: 'month',
        taskView: false,
        month: {
          ...DEFAULT_MONTH_OPTIONS,
          dayNames: ['일', '월', '화', '수', '목', '금', '토'],
          isAlways6Weeks: false,

          // 더 많은 옵션을 여기에 추가할 수 있습니다.
        },
        calendars: [
          {
            id: 'cal1',
            name: 'Work',
          },
        ],
      });

      calendarInstance.current = calendar;

      calendar.setOptions({
        useFormPopup: true,
        useDetailPopup: true,
      });

      calendar.createEvents([
        {
          id: '1',
          calendarId: 'cal1',
          title: 'timed event',
          body: 'TOAST UI Calendar',
          start: '2023-08-01T10:00:00',
          end: '2023-08-10T11:00:00',
          location: 'Meeting Room A',
          attendees: ['A', 'B', 'C'],
          category: 'time',
          state: 'Free',
          isReadOnly: true,
          color: '#fff',
          backgroundColor: '#ccc',
          customStyle: {
            fontStyle: 'italic',
            fontSize: '15px',
          },
        }, // EventObject
      ]);

      const timedEvent = calendar.getEvent('1', 'cal1'); // EventObject
      calendar.on('clickEvent', ({ event }) => {
        // Click event handler
        const modal = createModal(event); // Create and display modal
        document.body.appendChild(modal);
      });

      function createModal(event) {
        const modal = document.createElement('div');
        modal.classList.add('modal');

        const title = document.createElement('h2');
        title.textContent = event.title;

        const description = document.createElement('p');
        description.textContent = event.body;

        // Add other event details to the modal

        modal.appendChild(title);
        modal.appendChild(description);

        return modal;
      }
    }
  }, []);

  return <div style={{ height: 600 }} ref={calendarRef} />;
};

export default MyCalendar;
