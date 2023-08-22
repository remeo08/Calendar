import React, { useState } from 'react';
import { styled } from 'styled-components';

import {
  //...
  MdOutlineEdit, // 수정 아이콘
  MdOutlineDelete, // 삭제 아이콘
} from 'react-icons/md';

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
  word-wrap: break-word;
`;

const CommentBtnGroup = styled.div`
  display: flex;
  // 원하는 스타일 적용
`;

const CommentList = ({ comment, removeComment, editComment }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.description);

  const handleEdit = () => {
    if (editMode) {
      editComment(comment.id, editedComment);
    }
    setEditMode(!editMode);
  };

  const handleDelete = () => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      removeComment(comment.id);
    }
  };

  return (
    <CommentItem>
      <CommentAuthor>{comment.author}</CommentAuthor>
      <CommentBox>
        {editMode ? (
          <input
            type="text"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
        ) : (
          <CommentContent>{comment.description}</CommentContent>
        )}
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
      <CommentBtnGroup>
        <button onClick={handleEdit}>
          <MdOutlineEdit />
        </button>
        <button onClick={handleDelete}>
          <MdOutlineDelete />
        </button>
      </CommentBtnGroup>
    </CommentItem>
  );
};

export default CommentList;
