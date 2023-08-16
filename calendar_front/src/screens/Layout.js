import { styled } from 'styled-components';

import Header from '../components/Header';
import LeftBar from '../components/LeftBar/LeftBar';
import RightBar from '../components/RightBar/RightBar';
import TUICalendar from '../components/MainCalendar/Calendar';

const Container = styled.div`
  font-color: grey;
  display: flex;
  align-items: center;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 90vw;
  width: 100%;
  border-radius: 10px;
  -webkit-box-shadow:
    0 2px 20px rgba(255, 0, 22, 0.1),
    0 2px 20px rgba(255, 0, 22, 0.1);
`;

const MiddlePartWrap = styled.div`
  width: 68vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid rgb(235, 237, 239);
  border-left: 1px solid rgb(235, 237, 239);
`;

// const CalendarContainer = styled.div`
//   border-top: 1px solid lightgrey;
//   width: 100%;
//   overflow: auto;
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
// `;

function Layout() {
  return (
    <Container>
      <Wrapper>
        <LeftBar />
        <MiddlePartWrap>
          <Header />
          <TUICalendar />
        </MiddlePartWrap>
        <RightBar />
      </Wrapper>
    </Container>
  );
}

export default Layout;
