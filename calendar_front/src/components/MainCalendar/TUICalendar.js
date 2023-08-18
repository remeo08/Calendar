import React, { useCallback, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Header from '../Header';

import Calendar from '@toast-ui/react-calendar';
import { TZDate } from '@toast-ui/calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import { theme } from './theme';
import { addDate, addHours, subtractDate } from './utils';

const today = new TZDate();
const viewModeOptions = [
  {
    title: 'Monthly',
    value: 'month',
  },
  {
    title: 'Weekly',
    value: 'week',
  },
  {
    title: 'Daily',
    value: 'day',
  },
];

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 14vh;
`;

export default function TUICalendar({
  view,
  events,
  setEvents,
  setSelectedEvent,
}) {
  const calendarRef = useRef(null);
  const [selectedDateRangeText, setSelectedDateRangeText] = useState('');
  const [selectedView, setSelectedView] = useState(view);
  const [eventCounter, setEventCounter] = useState(1);

  const initialCalendars = [
    {
      id: '0',
      name: 'Private',
      backgroundColor: '#9e5fff',
      borderColor: '#9e5fff',
      dragBackgroundColor: '#9e5fff',
    },
    {
      id: '1',
      name: 'Company',
      backgroundColor: '#00a9ff',
      borderColor: '#00a9ff',
      dragBackgroundColor: '#00a9ff',
    },
  ];
  const initialEvents = [
    {
      id: '1',
      calendarId: '0',
      title: 'TOAST UI Calendar Study',
      category: 'time',
      start: today,
      end: addHours(today, 3),
    },
    {
      id: '2',
      calendarId: '0',
      title: 'Practice',
      category: 'milestone',
      start: addDate(today, 1),
      end: addDate(today, 1),
      isReadOnly: true,
    },
    {
      id: '3',
      calendarId: '0',
      title: 'FE Workshop',
      category: 'allday',
      start: subtractDate(today, 2),
      end: subtractDate(today, 1),
      isReadOnly: true,
    },
    {
      id: '4',
      calendarId: '0',
      title: 'Report',
      category: 'time',
      start: today,
      end: addHours(today, 1),
    },
  ];

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const getCalInstance = useCallback(
    () => calendarRef.current?.getInstance?.(),
    [],
  );

  const updateRenderRangeText = useCallback(() => {
    const calInstance = getCalInstance();
    if (!calInstance) {
      setSelectedDateRangeText('');
    }

    const viewName = calInstance.getViewName();
    const calDate = calInstance.getDate();
    const rangeStart = calInstance.getDateRangeStart();
    const rangeEnd = calInstance.getDateRangeEnd();

    let year = calDate.getFullYear();
    let month = calDate.getMonth() + 1;
    let date = calDate.getDate();
    let dateRangeText;

    switch (viewName) {
      case 'month': {
        dateRangeText = `${year}-${month}`;
        break;
      }
      case 'week': {
        year = rangeStart.getFullYear();
        month = rangeStart.getMonth() + 1;
        date = rangeStart.getDate();
        const endMonth = rangeEnd.getMonth() + 1;
        const endDate = rangeEnd.getDate();

        const start = `${year}-${month < 10 ? '0' : ''}${month}-${
          date < 10 ? '0' : ''
        }${date}`;
        const end = `${year}-${endMonth < 10 ? '0' : ''}${endMonth}-${
          endDate < 10 ? '0' : ''
        }${endDate}`;
        dateRangeText = `${start} ~ ${end}`;
        break;
      }
      default:
        dateRangeText = `${year}-${month}-${date}`;
    }

    setSelectedDateRangeText(dateRangeText);
  }, [getCalInstance]);

  useEffect(() => {
    setSelectedView(view);
  }, [view]);

  useEffect(() => {
    updateRenderRangeText();
  }, [selectedView, updateRenderRangeText]);

  const onAfterRenderEvent = (res) => {
    console.group('onAfterRenderEvent');
    console.log('Event Info : ', res.title);
    console.groupEnd();
  };

  const onBeforeDeleteEvent = (res) => {
    console.group('onBeforeDeleteEvent');
    console.log('Event Info : ', res.title);
    console.groupEnd();

    const { id, calendarId } = res;

    getCalInstance().deleteEvent(id, calendarId);
  };

  const onChangeSelect = (ev) => {
    setSelectedView(ev.target.value);
  };

  const onClickDayName = (res) => {
    console.group('onClickDayName');
    console.log('Date : ', res.date);
    console.groupEnd();
  };

  const onClickNavi = (ev) => {
    if (ev.target.tagName === 'BUTTON') {
      const button = ev.target;
      const actionName = (
        button.getAttribute('data-action') ?? 'month'
      ).replace('move-', '');
      getCalInstance()[actionName]();
      updateRenderRangeText();
    }
  };

  const onClickEvent = (res) => {
    console.group('onClickEvent');
    console.log('MouseEvent : ', res.nativeEvent);
    console.log('Event Info : ', res.event);
    console.groupEnd();

    setSelectedEvent(res.event);
  };

  const onClickTimezonesCollapseBtn = (timezoneCollapsed) => {
    console.group('onClickTimezonesCollapseBtn');
    console.log('Is Timezone Collapsed?: ', timezoneCollapsed);
    console.groupEnd();

    const newTheme = {
      'week.daygridLeft.width': '100px',
      'week.timegridLeft.width': '100px',
    };

    getCalInstance().setTheme(newTheme);
  };

  const onBeforeUpdateEvent = (updateData) => {
    console.group('onBeforeUpdateEvent');
    console.log('Event Info: ', updateData);
    console.groupEnd();

    // 서버에 보낼 이벤트 데이터 준비
    // const eventForUpdate = {
    //   id: eventData.id,
    //   team: eventData.calendarId,
    //   title: eventData.title,
    //   description: eventData.location,
    //   start_date: eventData.start,
    //   end_date: eventData.end,
    //   state: eventData.state,
    // };

    // 업데이트 API 호출 예
    // axios.put(`url/${eventData.id}`, eventForUpdate);

    const targetEvent = updateData.event;
    const changes = { ...updateData.changes };

    getCalInstance().updateEvent(
      targetEvent.id,
      targetEvent.calendarId,
      changes,
    );
    getCalInstance().render();
  };

  const onBeforeCreateEvent = (eventData) => {
    console.log('dididi', eventData);
    // const eventForBack = {
    //   team: eventData.calendarId,
    //   title: eventData.title,
    //   description: eventData.location,
    //   start_date: eventData.start,
    //   end_date: eventData.end,
    //   state: eventData.state,
    // };
    // axios.post('url', eventForBack);
    const event = {
      calendarId: eventData.calendarId || '',
      id: String(eventCounter), //back에서 받아온 id로 변경하기
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

    setEventCounter(eventCounter + 1);
    getCalInstance().createEvents([event]);

    setEvents([...events, event]);
    setSelectedEvent(event);
  };

  return (
    <CalendarContainer>
      <Header />{' '}
      <CalendarHeader>
        <div>
          <span>
            <button
              type="button"
              className="btn btn-default btn-sm move-day"
              data-action="move-prev"
              onClick={onClickNavi}
            >
              Prev
            </button>
            <span className="render-range">{selectedDateRangeText}</span>

            <button
              type="button"
              className="btn btn-default btn-sm move-day"
              data-action="move-next"
              onClick={onClickNavi}
            >
              Next
            </button>
          </span>
          <button
            type="button"
            className="btn btn-default btn-sm move-today"
            data-action="move-today"
            onClick={onClickNavi}
          >
            Today
          </button>
          <select onChange={onChangeSelect} value={selectedView}>
            {viewModeOptions.map((option, index) => (
              <option value={option.value} key={index}>
                {option.title}
              </option>
            ))}
          </select>
        </div>
      </CalendarHeader>
      <Calendar
        height="67vh"
        calendars={initialCalendars}
        month={{
          startDayOfWeek: 0,
          isAlways6Weeks: false,
        }}
        events={initialEvents}
        template={{
          allday(event) {
            return `[All day] ${event.title}`;
          },
          popupIsAllday() {
            return '하루 종일';
          },
          popupSave() {
            return '저장';
          },
          titlePlaceholder() {
            return '제목';
          },
          popupStateFree() {
            return 'Done';
          },
          popupStateBusy() {
            return 'Todo';
          },
          locationPlaceholder() {
            return '세부 내용';
          },
          popupEdit() {
            return '편집';
          },
          popupDelete() {
            return '삭제';
          },
          popupUpdate() {
            return '저장';
          },
        }}
        theme={theme}
        timezone={{
          zones: [
            {
              timezoneName: 'Asia/Seoul',
              displayLabel: 'Seoul',
              tooltip: 'UTC+09:00',
            },
          ],
        }}
        useDetailPopup={true}
        useFormPopup={true}
        view={selectedView}
        week={{
          showTimezoneCollapseButton: true,
          timezonesCollapsed: false,
          eventView: true,
          taskView: true,
        }}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={calendarRef}
        onAfterRenderEvent={onAfterRenderEvent}
        onBeforeDeleteEvent={onBeforeDeleteEvent}
        onClickDayname={onClickDayName}
        onClickEvent={onClickEvent}
        onClickTimezonesCollapseBtn={onClickTimezonesCollapseBtn}
        onBeforeUpdateEvent={onBeforeUpdateEvent}
        onBeforeCreateEvent={onBeforeCreateEvent}
      />
    </CalendarContainer>
  );
}
