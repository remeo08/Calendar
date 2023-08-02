import { styled } from 'styled-components';

import Header from '../components/Header';
import LeftBar from '../components/LeftBar/LeftBar';
import RightBar from '../components/RightBar/RightBar';
import Calendar from '../components/MainCalendar/Calendar';
function Main() {
  return (
    <div>
      <Header></Header>
      <LeftBar />
      <Calendar />
      <RightBar />
    </div>
  );
}

export default Main;
