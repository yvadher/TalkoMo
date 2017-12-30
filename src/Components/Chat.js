import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Api from '../Backend/Api';

export default class Chat extends React.Component{

  state = {
    messages: [],
  };


  render(){
    return(
        <GiftedChat
          messages={this.state.messages}
          onSend={(message) => {
            Api.sendMessage(message);
          }}
          user={{
            _id: Api.getUid(),
            name: this.props.chatName,
          }}
        />
    )
  }

  componentDidMount(){
    Api.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }

  componentWillUnmount(){
    Api.closeChat();
  }
}

Chat.defultProps = {
  name: 'Yagnik',
};
