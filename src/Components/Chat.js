import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import Api from '../Backend/Api';

export default class Chat extends React.Component{

  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello I am enes!! ',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://scontent.fyvr3-1.fna.fbcdn.net/v/t1.0-9/12932940_10209278711794757_4508306595214004184_n.jpg?oh=0254a5e0ca442c8cf353b264d5e5e1bf&oe=5AF80ACF',
          },
        },
      ],
    });
  }

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
