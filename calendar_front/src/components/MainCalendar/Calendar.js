// import React, { useState } from 'react';
// import Calendar from '@toast-ui/react-calendar';
// import '@toast-ui/calendar/dist/toastui-calendar.min.css';
// import 'tui-date-picker/dist/tui-date-picker.css';
// import 'tui-time-picker/dist/tui-time-picker.css';

// function TUICalendar() {
//   const calendars = [{ id: 'cal1', name: 'Personal' }];
//   const initialEvents = [
//     {
//       id: '2',
//       repeat: '',
//       start: '2023-08-10T15:00:00',
//       end: '2023-08-10T15:30:00',
//       calendarId: 'cal1',
//       title: '말복',
//       description: '내용',
//       color: '색상',
//       status: '상태',
//       category: 'time',
//       user: '유저',
//       team: '어벤져스',
//     },
//     {
//       id: '3',
//       repeat: '',
//       start: '2023-08-12T15:00:00',
//       end: '2023-08-12T15:30:00',
//       calendarId: 'cal1',
//       title: 'event2',
//       description: '내용',
//       color: '색상',
//       status: '상태',
//       category: 'time',
//       user: '유저',
//       team: 'team1',
//     },
//     {
//       id: '4',
//       repeat: '',
//       start: '2023-08-20T15:00:00',
//       end: '2023-08-20T15:30:00',
//       calendarId: 'cal1',
//       title: 'event3',
//       description: '내용',
//       color: '색상',
//       status: '상태',
//       category: 'time',
//       user: '유저',
//       team: '가오갤',
//     },
//   ];

//   const filteredEvents = initialEvents.filter(
//     (event) => event.team === 'team1',
//   );

//   const onAfterRenderEvent = (event) => {
//     console.log(event.title);
//   };

//   const [currentView, setCurrentView] = useState('month');

//   const changeView = (view) => {
//     setCurrentView(view);
//   };

//   const onBeforeCreateEvent = (eventData) => {
//     const event = {
//       calendarId: eventData.calendarId || '',
//       id: String(Math.random()),
//       title: eventData.title,
//       isAllday: eventData.isAllday,
//       start: eventData.start,
//       end: eventData.end,
//       category: eventData.isAllday ? 'allday' : 'time',
//       dueDateClass: '',
//       location: eventData.location,
//       state: eventData.state,
//       isPrivate: eventData.isPrivate,
//     };

//     console.log(event);

//     alert('일정 생성 완료');
//   };

//   return (
//     <div>
//       <button onClick={() => changeView('month')}>month</button>
//       <button onClick={() => changeView('week')}>week</button>
//       <button onClick={() => changeView('day')}>day</button>
//       <Calendar
//         height="420px"
//         view={currentView}
//         month={{
//           dayNames: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
//           isAlways6Weeks: false,
//         }}
//         useFormPopup
//         useDetailPopup
//         calendars={calendars}
//         events={filteredEvents}
//         onAfterRenderEvent={onAfterRenderEvent}
//         onBeforeCreateEvent={onBeforeCreateEvent}
//         template={{
//           popupStateBusy() {
//             return 'Done';
//           },
//           popupStateFree() {
//             return 'Todo';
//           },
//           locationPlaceholder() {
//             return '';
//           },
//         }}
//       />
//     </div>
//   );
// }

// export default TUICalendar;

import React, { useState, useRef } from 'react';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import CustomTuiCalendar from './CustomTuiCalendar';
import CustomTuiModal from './CustomTuiModal';

const TUICalendarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 60));
const attendees = [
  {
    id: '1',
    name: 'Chin',
  },
  { id: '2', name: 'Khanh' },
  { id: '3', name: 'Linh' },
  { id: '4', name: 'Hai' },
];
const schedules = [
  {
    id: '1',
    title: 'Mua nuoc dum',
    calendarId: '1',
    category: 'time',
    attendees: ['Chin'],
    isVisible: true,
    start,
    end,
  },
  {
    id: '2',
    title: 'Di lau nha',
    calendarId: '2',
    category: 'time',
    attendees: ['Khanh'],
    isVisible: true,
    start: new Date(new Date().setHours(start.getHours() + 1)),
    end: new Date(new Date().setHours(start.getHours() + 2)),
  },
  {
    id: '3',
    title: 'Di don phong',
    calendarId: '3',
    category: 'time',
    attendees: ['Hai'],
    isVisible: true,
    start: new Date(new Date().setHours(start.getHours() + 2)),
    end: new Date(new Date().setHours(start.getHours() + 4)),
  },
  {
    id: '4',
    title: 'Phai lam sao day',
    calendarId: '4',
    category: 'time',
    attendees: ['Linh'],
    isVisible: true,
    start: new Date(new Date().setHours(start.getHours() + 2)),
    end: new Date(new Date().setHours(start.getHours() + 6)),
  },
];

const colors = [
  {
    id: '1',
    color: '#ffffff',
    bgColor: '#34C38F',
    dragBgColor: '#34C38F',
    borderColor: '#34C38F',
  },
  {
    id: '2',
    color: '#ffffff',
    bgColor: '#F4696A',
    dragBgColor: '#F4696A',
    borderColor: '#F4696A',
  },
  {
    id: '3',
    color: '#ffffff',
    bgColor: '#00a9ff',
    dragBgColor: '#00a9ff',
    borderColor: '#00a9ff',
  },
  {
    id: '4',
    color: '#ffffff',
    bgColor: '#F2B34C',
    dragBgColor: '#F2B34C',
    borderColor: '#F2B34C',
  },
  {
    id: '5',
    color: '#ffffff',
    bgColor: '#74788D',
    dragBgColor: '#74788D',
    borderColor: '#74788D',
  },
  {
    id: '6',
    color: '#ffffff',
    bgColor: '#343A40',
    dragBgColor: '#343A40',
    borderColor: '#343A40',
  },
  {
    id: '7',
    color: '#000000',
    bgColor: '#FFFFFF',
    dragBgColor: '#FFFFFF',
    borderColor: '#FFFFFF',
  },
];

const calendars = [
  {
    id: '1',
    name: 'BPA Technical',
  },
  {
    id: '2',
    name: 'Aqua 2 Cleaning',
  },
  {
    id: '3',
    name: 'Aqua 4 Cleaning',
  },
  {
    id: '4',
    name: 'Luxury 6 Cleaning',
  },
  {
    id: '5',
    name: 'Luxury 6 Management',
  },
  {
    id: '6',
    name: 'Aqua 3 Management',
  },
  {
    id: '7',
    name: 'Aqua 2 Management',
  },
];

export default function TUICalendar() {
  const [modal, setModal] = useState(false);
  const [event, setEvent] = useState(null);
  const childRef = useRef();

  const toggle = () => {
    setModal(!modal);
    setEvent(null);
  };

  function onBeforeCreateSchedule(event) {
    // console.log('onBeforeCreateSchedule', event)
    event.guide.clearGuideElement();
    setModal(true);
    setEvent(event);
  }

  function handleCreateSchedule(newEvent) {
    // call api
    const result = true;

    if (result) {
      const newSchedule = {
        ...event,
        id: schedules.length,
        title: newEvent.title,
        calendarId: newEvent.calendarId,
        category: event.isAllDay ? 'allday' : 'time',
        attendees: newEvent.attendees,
        isVisible: true,
        start: newEvent.start,
        end: newEvent.end,

        isAllDay: event.isAllDay,
        dueDateClass: '',
        location: event.location,
        // raw: {
        //   class: event.raw["class"]
        // },
        state: event.state,
        body: event.body,
      };

      childRef.current.createSchedule(newSchedule);
      setModal(false);
    }
  }

  function onBeforeUpdateSchedule(event) {
    // console.log('onBeforeUpdateSchedule', event)

    const { schedule, changes } = event;

    // resize & drag n drop
    if (changes) {
      // call api
      const result = true;
      if (result) {
        return childRef.current.updateSchedule(schedule, changes);
      }
    }

    setModal(true);
    setEvent(event);
  }

  async function handleUpdateSchedule(updateEvent) {
    // call api
    const result = true;

    if (result) {
      const { schedule } = event;

      // way 1: library not support
      // update api fail with attendees
      // childRef.current.updateSchedule(schedule, updateEvent)

      // way 2: stupid
      await childRef.current.deleteSchedule(schedule);

      const newSchedule = {
        ...event,
        id: schedules.length + 2,
        title: updateEvent.title,
        calendarId: updateEvent.calendarId,
        category: event.isAllDay ? 'allday' : 'time',
        attendees: updateEvent.attendees,
        isVisible: true,
        start: updateEvent.start,
        end: updateEvent.end,

        isAllDay: event.isAllDay,
        dueDateClass: '',
        location: event.location,
        // raw: {
        //   class: event.raw["class"]
        // },
        state: event.state,
        body: event.body,
      };

      await childRef.current.createSchedule(newSchedule);

      setModal(false);
    }
  }

  function onBeforeDeleteSchedule(event) {
    // console.log('onBeforeDeleteSchedule', event)

    // call api
    const result = true;

    if (result) {
      const { schedule } = event;
      childRef.current.deleteSchedule(schedule);
    }

    return true;
  }

  const formatCalendars = calendars.map((element) => ({
    ...colors.find((element2) => element2.id === element.id),
    ...element,
  }));

  return (
    <TUICalendarContainer>
      <CustomTuiCalendar
        ref={childRef}
        {...{
          isReadOnly: false,
          showSlidebar: false,
          showMenu: true,
          useCreationPopup: false,
          // onCreate: () => {
          //   console.log("create that!!!");
          //   childRef.current.getAlert();
          // },
          // createText: "Tao moi",
          calendars: formatCalendars,
          schedules,
          onBeforeCreateSchedule,
          onBeforeUpdateSchedule,
          onBeforeDeleteSchedule,
        }}
      />
      <CustomTuiModal
        {...{
          isOpen: modal,
          toggle,
          onSubmit:
            event?.triggerEventName === 'mouseup'
              ? handleCreateSchedule
              : handleUpdateSchedule,
          submitText: event?.triggerEventName === 'mouseup' ? 'Save' : 'Update',
          calendars: formatCalendars,
          attendees,
          schedule: event?.schedule,
          startDate: event?.start,
          endDate: event?.end,
        }}
      />
    </TUICalendarContainer>
  );
}
