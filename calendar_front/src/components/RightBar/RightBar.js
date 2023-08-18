import React, { useState } from 'react';
import { styled } from 'styled-components';
import SubCalendar from './SubCalendar';
import CommentEdit from './CommentEdit';
import CommentList from './CommentList';
import Status from './Status';

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

const CommentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 12px;
  color: grey;
  padding-left: 12px;
  font-size: 14px;
`;

function RightBar({ selectedEvent }) {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  const author = 'nickname';
  const schedule = 1;

  return (
    <Container>
      <Wrapper>
        <SubCalendar />
      </Wrapper>
      <Wrapper>
        <StatusHeader>Status</StatusHeader>
        <Status selectedEvent={selectedEvent} />
        <CommentContainer>
          <div>
            {comments.map((comment, index) => (
              <CommentList key={index} comment={comment} />
            ))}
          </div>
          <CommentEdit
            schedule={schedule}
            author={author}
            addComment={addComment}
          />
        </CommentContainer>
      </Wrapper>
    </Container>
  );
}

export default RightBar;
