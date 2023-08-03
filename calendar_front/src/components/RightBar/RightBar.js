import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  // justify-content: space-between;
  width: 220px;
  height: 520px;
  background-color: rgb(255, 255, 255);
  border-radius: 0 14px 14px 0;
`;
const Wrapper = styled.div`
  width: 96%;
  height: 48%;
  border: 1px solid rgb(215, 208, 202);
  border-radius: 10px;
`;
const SubCalender = styled.div``;
const Status = styled.div``;
const EventDetail = styled.div``;

function RightBar() {
  return (
    <Container>
      <Wrapper>
        <SubCalender>SubCalender</SubCalender>
      </Wrapper>
      <Wrapper>
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
