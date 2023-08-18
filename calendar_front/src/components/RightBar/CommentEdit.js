import React, { useState } from 'react';

const CommentEdit = ({ schedule, author, addComment }) => {
  const [description, setDescription] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addComment({
      schedule,
      author,
      description,
      createdTime: new Date(),
    });

    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="내용을 입력하세요"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">댓글 작성</button>
    </form>
  );
};

export default CommentEdit;
