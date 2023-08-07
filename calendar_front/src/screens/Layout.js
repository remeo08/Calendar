import { styled } from 'styled-components';

import Header from '../components/Header';
import LeftBar from '../components/LeftBar/LeftBar';
import RightBar from '../components/RightBar/RightBar';
// import Calendar from '../components/MainCalendar/Calendar';

const Container = styled.div`
  font-color: grey;
  display: flex;
  align-items: center;
  height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 80vw;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow:
    0 2px 20px rgba(255, 0, 22, 0.1),
    0 2px 20px rgba(255, 0, 22, 0.1);
`;

const MiddlePartWrap = styled.div`
  width: 68vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border-right: 1px solid rgb(235, 237, 239);
  border-left: 1px solid rgb(235, 237, 239);
`;

const CalendarContainer = styled.div`
  background-color: rgb(249, 245, 240);
  border-top: 1px solid lightgrey;
  width: 100%;
  height: 79vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
`;
const CalenderHead = styled.div`
  width: 100%;
  margin: 3vh 0;
  text-align: center;
  font-weight: 800;
  color: rgb(18, 1, 48);
`;
const Calendar = styled.div`
  width: 98%;
  height: 71vh;
  background-color: rgb(255, 255, 255);
  border-radius: 10px 10px 0 0;
  border-bottom: none;
  box-shadow: 0px 4px 10px 0px rgb(0, 13, 39, 0.3);
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
