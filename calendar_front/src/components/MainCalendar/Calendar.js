import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

class Calendar extends Component {
  render() {
    return (
      <div>
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin]}
          events={[
            { title: '집가고싶다', date: '2023-08-03' },
            { title: '술먹고싶다', date: '2023-08-04' },
          ]}
        />
      </div>
    );
  }
}
export default Calendar;
