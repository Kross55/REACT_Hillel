import React from "react";

class EmoticonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emoticons: [
        { id: 1, name: "😀", count: 0 },
        { id: 2, name: "😂", count: 0 },
        { id: 3, name: "😍", count: 0 },
        { id: 4, name: "😎", count: 0 },
        { id: 5, name: "🤔", count: 0 },
      ],
      winningEmoticon: null,
    };
  }

  handleClick = (emoticonId) => {
    const { emoticons } = this.state;
    const index = emoticons.findIndex((e) => e.id === emoticonId);

    this.setState({
      emoticons: [
        ...emoticons.slice(0, index),
        { ...emoticons[index], count: emoticons[index].count + 1 },
        ...emoticons.slice(index + 1),
      ],
    });
  };

  handleShowResults = () => {
    const { emoticons } = this.state;
    let maxCount = 0;
    let winningEmoticon = null;

    emoticons.forEach((e) => {
      if (e.count > maxCount) {
        maxCount = e.count;
        winningEmoticon = e;
      }
    });

    this.setState({ winningEmoticon });
  };

  render() {
    const { emoticons, winningEmoticon } = this.state;

    return (
      <div>
        <h2>Emoticon List</h2>
        <ul>
          {emoticons.map((e) => (
            <li key={e.id}>
              {e.name} - {e.count}
              <button onClick={() => this.handleClick(e.id)}>Vote</button>
            </li>
          ))}
        </ul>
        <button onClick={this.handleShowResults}>Show Results</button>
        {winningEmoticon && (
          <h3>Winning Emoticon: {winningEmoticon.name}</h3>
        )}
      </div>
    );
  }
}

export default EmoticonList;
