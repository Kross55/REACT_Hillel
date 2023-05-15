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
      winningEmoticon: [],
      show: false
    };
  }

  handleClick = (emoticonId) => {
    const { emoticons } = this.state;
    
    this.setState({
      emoticons: emoticons.map(emoticon => emoticon.id === emoticonId ? { ...emoticon, count: emoticon.count + 1 } : emoticon)
    })
  };

  handleShowResults = () => {
    /*const { emoticons } = this.state;
    let maxCount = 0;
    let winningEmoticon = null;

    emoticons.forEach((e) => {
      if (e.count > maxCount) {
        maxCount = e.count;
        winningEmoticon = e;
      }
    });*/
    const { emoticons, winningEmoticon } = this.state;
    const [winner] = winningEmoticon ? emoticons.sort((a, b) => b.count - a.count) : [null];

    this.setState({ winningEmoticon: winner });
    this.setState({ show: true });
  };

  render() {
    const { emoticons, winningEmoticon, show } = this.state;
    console.log(show)

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
        {show && (
          <h3>Winning Emoticon: {winningEmoticon.name}</h3>
        )}
        {/*{winningEmoticon && (
          <h3>Winning Emoticon: {winningEmoticon.name}</h3>
        )}*/}
      </div>
    );
  }
}

export default EmoticonList;
