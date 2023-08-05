import { styled } from 'styled-components';

import Header from '../components/Header';
import LeftBar from '../components/LeftBar/LeftBar';
import RightBar from '../components/RightBar/RightBar';
// import Calendar from '../components/MainCalendar/Calendar';

const Container = styled.div`
  font-color: grey;
  display: flex;
  align-items: center;
  height: 643px;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 997px;
  width: 100%;
  left: 120px;
  border-radius: 10px;
  border: 1px solid rgb(237, 70, 78);
  -webkit-box-shadow:
    0 2px 20px rgba(251, 0, 27, 0.1),
    0 2px 20px rgba(251, 0, 27, 0.1);
`;

const MiddlePartWrap = styled.div`
  width: 733px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-right: 1px solid rgb(237, 70, 78);
  border-left: 1px solid rgb(237, 70, 78);
`;

const CalendarContainer = styled.div`
  background-color: rgb(254, 248, 243);
  border-top: 1px solid rgb(237, 70, 78);
  width: 100%;
  height: 506px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
const CalenderHead = styled.div`
  width: 100%;
  margin-bottom: 18px;
  text-align: center;
  font-weight: 800;
  color: rgb(18, 1, 48);
`;
const Calendar = styled.div`
  width: 98%;
  height: 458px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 0 0;
  border: 1px solid rgb(255, 183, 191);
  border-bottom: none;
  box-shadow: 0px 4px 10px 0px rgb(255, 13, 39, 0.3);
`;

function Layout() {
  return (
    <Container>
      <Wrapper>
        <LeftBar />
        <MiddlePartWrap>
          <Header />
          <CalendarContainer>
            <CalenderHead>february</CalenderHead>
            <Calendar></Calendar>
          </CalendarContainer>
        </MiddlePartWrap>
        <RightBar />
      </Wrapper>
    </Container>
  );
}

export default Layout;
