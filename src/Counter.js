import React from 'react';
import axios from 'axios';

function Counter() {
  const [counter, setCounter] = React.useState(0);
  const [comment, setComment] = React.useState('');
  const checkDecrementCount = () => {
    if (counter > 0) return setCounter(counter - 1);
  };
  const fetchComment = async () => {
    let response = await axios.get(
      'https://jsonplaceholder.typicode.com/comments/1',
    );
    setComment(response.data.body);
  };
  return (
    <div>
      <h1>This is counter app</h1>
      <div id="counter-value">{counter}</div>
      <button id="increment-btn" onClick={() => setCounter(counter + 1)}>
        {'+'}
      </button>
      <button id="decrement-btn" onClick={() => checkDecrementCount()}>
        {'-'}
      </button>
      <button id="fetch-comment" onClick={() => fetchComment()}>
        {'Fetch Comment'}
      </button>
      <pre>{comment ? comment : ''}</pre>
    </div>
  );
}

export default Counter;
