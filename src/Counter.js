import React from 'react';
import axios from 'axios';
import '../src/App.css';

function Counter() {
  const [counter, setCounter] = React.useState(0);
  const [comment, setComment] = React.useState('');
  const [disableButton, setDisableButton] = React.useState(false);
  const checkDecrementCount = () => {
    if (counter > 0) return setCounter(counter - 1);
  };
  const fetchComment = async () => {
    let response = await axios.get(
      'https://jsonplaceholder.typicode.com/comments/1',
    );
    setComment(response?.data?.body);
    setDisableButton(true);
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
      <div className="col-12 mt-5 mb-5">
        <button
          id="fetch-comment"
          onClick={() => fetchComment()}
          disabled={disableButton}
        >
          {'Fetch Comment'}
        </button>

        <img
          alt="refresh the page"
          src="/refresh.svg"
          className={'img'}
          onClick={() => {
            window.location.reload();
          }}
        />
      </div>
      <p>{comment ? comment : ''}</p>
    </div>
  );
}

export default Counter;
