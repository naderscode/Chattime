import socket from './ws-client'

class ChatApp {
  constructor(){
    socket.init('ws://localhost:8000');
    socket.registerOpenHandler(() => {
      let message = new ChatMessage({ message: 'Hello there'});
      socket.sendMessage(message.serialize());
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
    });
  }
}

class ChatMessage {
  constructor({
    message: m,
    user: u='Nader',
    timestamp: t=(new Date()).getTime()
  }) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  serialize(){
    return {
      message: this.message,
      user: this.user,
      timestamp: this.timestamp

    };
  }
}

export default ChatApp;
