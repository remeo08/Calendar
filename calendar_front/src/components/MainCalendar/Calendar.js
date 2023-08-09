import React, { useEffect } from 'react';
import Calendar from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const DEFAULT_MONTH_OPTIONS = {
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  visibleWeeksCount: 0,
  workweek: false,
  narrowWeekend: false,
  startDayOfWeek: 0,
  isAlways6Weeks: false,
  visibleEventCount: 6,
};

function TUICalendar() {
  useEffect(() => {
    const container = document.querySelector('.container');
    const calendar = new Calendar(container, {
      defaultView: 'month',
      isReadOnly: false,
      usageStatistics: false,
      useFormPopup: true,
      useDetailPopup: true,
      ...DEFAULT_MONTH_OPTIONS,
      isAlways6Weeks: false,
    });

    calendar.setOptions({
      useFormPopup: true,
      useDetailPopup: true,
    });

    calendar.createEvents([
      {
        id: 'event1',
        calendarId: 'cal1',
        title: 'Weekly Meeting',
        start: '2023-08-30T09:00:00',
        end: '2023-08-31T10:00:00',
      },
    ]);

    const firstEvent = calendar.getEvent('event1', 'cal1');

    console.log(firstEvent.title);
  }, []);

  return (
    <>
      <div>
        <today />
        <button className="prevmonth_btn" text="<"></button>
        <button className="nextmonth_btn">></button>
      </div>
      <div className="container" style={{ height: '100%' }}></div>
    </>
  );
}

// calendar.render();
export default TUICalendar;
