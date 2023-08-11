import React from 'react';
import { styled } from 'styled-components';

const CommentItem = styled.div`
  padding: 7px;
`;

const CommentAuthor = styled.div`
  font-size: 12px;
  color: black;
`;

const CommentDate = styled.span`
  font-size: 5px;
`;

const CommentBox = styled.div`
  display: flex;
  align-items: end;
`;

const CommentContent = styled.div`
  width: 70%;
  background-color: #e2e2e2;
  color: black;
  border-radius: 5px;
  padding: 7px;
  margin-top: 3px;
  margin-right: 3px;
`;

const CommentList = ({ comment }) => {
  return (
    <CommentItem>
      <CommentAuthor>{comment.author}</CommentAuthor>
      <CommentBox>
        <CommentContent>{comment.description}</CommentContent>
        <CommentDate>
          {new Date(comment.createdTime).toISOString().slice(0, 10) +
            ' ' +
            new Date(comment.createdTime).toLocaleString('ko-KR', {
              hour: '2-digit',
              minute: '2-digit',
              hour12: true,
            })}
        </CommentDate>
      </CommentBox>
    </CommentItem>
  );
};

export default CommentList;
