import socket from './ws-client';
import {ChatForm, ChatList} from './dom';

const FORM_SELECTOR = '[data-chat="chat-form"]';
const INPUT_SELECTOR = '[data-chat="message-input"]';
const LIST_SELECTOR = '[data-chat="message-list"]';

class ChatApp {
  constructor(){
    this.ChatForm = new ChatForm(FORM_SELECTOR, INPUT_SELECTOR);
    this.chatList = new ChatList(LIST_SELECTOR, 'Nader');

    socket.init('ws://localhost:8000');
    socket.registerOpenHandler(() => {
      //let message = new ChatMessage({ message: 'Hello there'});
      this.ChatForm.init((data) => {
        let message = new ChatMessage(data);
        this.chatList.drawMessage(message.serialize());
      });
    });
    socket.registerMessageHandler((data) => {
      console.log(data);
      let message = new ChatMessage(data);
      this.chatList.drawMessage(message.serialize());
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
