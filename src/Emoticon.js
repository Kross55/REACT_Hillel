import React, { useState } from 'react';

function Emoticon(props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <span>{props.emoticon}</span>
      <button onClick={handleClick}>Vote ({count})</button>
    </div>
  );
}

export default Emoticon;