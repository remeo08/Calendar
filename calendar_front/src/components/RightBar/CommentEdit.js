import React, { useState } from 'react';
import { MdOutlineInsertComment } from 'react-icons/md';

const CommentEdit = ({ schedule, author, addComment }) => {
  const [description, setDescription] = useState('');
  const inputRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === '') {
      inputRef.current.focus();
      return;
    }

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
        ref={inputRef}
        type="text"
        placeholder="내용을 입력하세요"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">
        <MdOutlineInsertComment />
      </button>
    </form>
  );
};

export default CommentEdit;
