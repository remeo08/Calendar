import { styled } from 'styled-components';
import SubCalendar from './SubCalendar';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  background-color: rgb(255, 255, 255);
  border-radius: 0 14px 14px 0;
`;
const Wrapper = styled.div`
  width: 99%;
  height: 41%;
  border-radius: 10px;
`;

const StatusHeader = styled.div`
  height: 5vh;
  padding-left: 20px;

  border-bottom: 1px solid rgb(235, 237, 239);
  border-top: 1px solid lightgrey;
  color: grey;
  padding-top: 13px;
`;
const Status = styled.div`
  padding-top: 12px;
  color: grey;
  padding-left: 12px;
  font-size: 14px;
`;
const EventDetail = styled.div``;

function RightBar() {
  return (
    <Container>
      <Wrapper>
        <SubCalendar />
      </Wrapper>
      <Wrapper>
        <StatusHeader>Status</StatusHeader>
        <Status>
          default : Status
          <br /> if click event : EventDetail
        </Status>
      </Wrapper>
      {/* <Wrapper>
        <EventDetail></EventDetail>
      </Wrapper> */}
    </Container>
  );
}

export default RightBar;
