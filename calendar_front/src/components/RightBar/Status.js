import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import CommentEdit from './CommentEdit';

export default function Status({ selectedEvent }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const eventComments = comments.filter(
      (comment) => comment.schedule === selectedEvent?.id,
    );
    setComments(eventComments);
  }, [selectedEvent]);

  const addComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  if (!selectedEvent) {
    return <div>대충 Todo, Done 필터 들어갈 곳</div>;
  }

  const { calendarId, title, location, start, end, isAllday, state } =
    selectedEvent;

  const startDate = new Date(start);
  const endDate = new Date(end);

  const startTime = startDate.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const endTime = endDate.toLocaleTimeString('ko-KR', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div>
      <h3>일정 상세 정보</h3>
      <p>Calendar: {calendarId}</p>
      <p>제목: {title}</p>
      <p>세부 내용: {location}</p>
      <p>
        시간: {startTime} ~ {endTime}
      </p>
      <p>{isAllday ? '하루종일' : ''}</p>
      <p>{state === 'Free' ? 'Done' : 'Todo'}</p>

      {comments.map((comment) => (
        <CommentList key={comment.id} comment={comment} />
      ))}
      <CommentEdit
        schedule={selectedEvent.id}
        author="nickname"
        addComment={addComment}
      />
      <button>편집</button>
      <button>삭제</button>
    </div>
  );
}

// TODO : 편집/삭제 버튼 추가하기
// TODO : <p>Calendar: {calendarId}</p> calendarId가 아니라 이름 가져오기
