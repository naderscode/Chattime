import socket from './ws-client'

class ChatApp {
  constructor(){
    console.log('ChatApp constructor');
    socket.init('ws://localhost:8000');
  }
}

class ChatMessage {
  constructor({
    message: m,
    user: u='Nader',
    timestamp: t=(newDate()).getTime()
  }) {
    this.message=message;
    this.user=user;
    this.timestamp=timestamp;
  }
  serialize(){
    return {
      message: this.message,
      user: this.user,
      timestamp: this.timestamp

    };
  }
}


//new ChatApp();
export default ChatApp;
