import { atom } from 'recoil';

export const eventState = atom({
  key: 'eventState',
  default: [], // Initialize with your initialEvents or an empty array
});

export const TuiCalendarInstance = atom({
  key: 'calendarInstance',
  default: null,
});
