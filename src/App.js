import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: '',
      chat: ['Hola']
    }
    this.controllerWriter = this.controllerWriter.bind(this);
    this.addChat = this.addChat.bind(this);
  }

  controllerWriter (e) {
    this.setState({
      text: e.target.value
    })
  }

  addChat() {
    
    const line = this.state.text;
    this.setState((state) => ({
      chat: [...state.chat, line],
      text: ''
    }))
    console.log(this.state.chat)
  }

  render() {
    const chatList = this.state.chat.map(line => <h3>{line}</h3>);
    return (
      <div>
        {chatList}
        <input 
          type="text" 
          name="name" 
          id="name" 
          onChange={this.controllerWriter}
          placeholder="Write..."
          value={this.state.text}
        />
        <button type="submit" onClick={this.addChat} id="btn">send</button>
      </div>
    );
  }
}

export default App;
