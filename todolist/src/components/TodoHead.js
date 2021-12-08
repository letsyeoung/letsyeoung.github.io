import React from 'react';
import styled from 'styled-components';

import { useTodoState } from '../TodoContext';

const Head = styled.div`
  width: 100%;
  padding-top: 48px;
  padding-bottom: 32px;
  background: #fff;
  display: flex;

  .date {
    color:#38d9a9;
    margin:auto;
    font-weight:bold;
  }
`;

function TodoHead() {
  
  const today = new Date();
  const dateString = today. toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const dayName = today.toLocaleDateString('ko-KR', {
    weekday:'long'
  });

  return (
    <Head>
      <div className="date">{dateString}, {dayName}</div>
    </Head>
  );
};

export default TodoHead;