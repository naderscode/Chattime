class ChatApp {
  constructor(){
    console.log('ChatApp constructor');
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
