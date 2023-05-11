import React, { useState } from 'react';
import './App.css';
import Emoticon from './Emoticon';

const emoticons = [
  { id: 1, icon: '😊', count: 0 },
  { id: 2, icon: '😂', count: 0 },
  { id: 3, icon: '😍', count: 0 },
  { id: 4, icon: '🤔', count: 0 },
];

function App() {
  return (
    <EmoticonList emoticons={emoticons} />
  );
}

export default App;

function EmoticonList(props) {
  const [emoticons, setEmoticons] = useState(props.emoticons);
  const [winner, setWinner] = useState(null);

  function handleShowResults() {
    let maxCount = -1;
    let winningEmoticon = null;

    emoticons.forEach((emoticon) => {
      if (emoticon.count > maxCount) {
        maxCount = emoticon.count;
        winningEmoticon = emoticon;
      }
    });

    setWinner(winningEmoticon);
  }

  return (
    <div>
      {emoticons.map((emoticon) => (
        <Emoticon key={emoticon.id} emoticon={emoticon.icon} />
      ))}
      <button onClick={handleShowResults}>Show Results</button>
      {winner && <div>Winner: {winner.icon}</div>}
    </div>
  );
}

