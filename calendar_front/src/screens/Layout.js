import { styled } from 'styled-components';

import Header from '../components/Header';
import LeftBar from '../components/LeftBar/LeftBar';
import RightBar from '../components/RightBar/RightBar';
import Calendar from '../components/MainCalendar/Calendar';

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: rgb(255, 232, 230);
  height: 643px;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 907px;
  width: 100%;
  padding: 40px;
`;

const MiddlePartWrap = styled.div`
  width: 643px;
`;

const CalendarContainer = styled.div`
  background-color: rgb(255, 248, 242);
  height: 476px;
  overflow: auto;
`;

function Layout() {
  return (
    <Container>
      <Wrapper>
        <LeftBar />
        <MiddlePartWrap>
          <Header />
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>
        </MiddlePartWrap>
        <RightBar />
      </Wrapper>
    </Container>
  );
}

export default Layout;
