// import { useState } from 'react';
// import { LuCornerDownLeft } from 'react-icons/lu';

// const CommentEdit = ({ onAddComment }) => {
//   const [state, setState] = useState({
//     content: '',
//   });

//   const handleChangeContent = (e) => {
//     setState({
//       ...state,
//       content: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     if (state.content.length !== 0) {
//       onAddComment(state.content);
//       setState({ content: '' });
//     }
//   };

//   return (
//     <div className="CommentEdit">
//       <h2>댓글</h2>
//       <textarea
//         name="content"
//         value={state.content}
//         onChange={handleChangeContent}
//       />
//       <button onClick={handleSubmit}>
//         <LuCornerDownLeft />
//       </button>
//     </div>
//   );
// };

// export default CommentEdit;

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
