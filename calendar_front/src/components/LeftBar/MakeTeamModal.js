import { styled } from 'styled-components';
import React, { useState } from 'react';

const MakeTeamModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 997px;
  height: 550px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(3px);
  background-color: rgb(145, 147, 152, 0.1);
  z-index: 99;
`;
const Wrapper = styled.div`
  width: 260px;
  height: 260px;
  background-color: white;
  border-radius: 10px;
  padding: 0px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CloseBtn = styled.button`
  border: none;
  background-color: white;
  margin-left: 260px;
  color: rgb(249, 194, 196);
`;

const Header = styled.div`
  text-align: center;
  font-size: 20px;
  margin-bottom: 14px;
  color: grey;
`;
const Form = styled.form``;
const Input = styled.input`
  margin: 14px 0;
  width: 260px;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 18px;
  color: rgb(242, 116, 122);
`;

function MakeTeamModal() {
  const [closeBtn, setCloseBtn] = useState(true);

  return (
    <>
      {closeBtn && (
        <MakeTeamModalContainer>
          <Wrapper>
            <CloseBtn
              onClick={() => {
                setCloseBtn(!closeBtn);
              }}
            >
              x
            </CloseBtn>
            <Header>Add Team</Header>
            <Form>
              <Input type="text" placeholder="팀 이름을 입력하세요" />
              <Input type="text" placeholder="팀 소개를 입력하세요." />
              <Input type="text" placeholder="본인의 닉네임을 입력하세요." />
              <BtnBox>
                <Button>add</Button>
              </BtnBox>
            </Form>
          </Wrapper>
        </MakeTeamModalContainer>
      )}
    </>
  );
}
export default MakeTeamModal;
