import React from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class Chat extends React.Component{

  render(){
    return(
      <View>
        <Text>
          sdfsdf {this.props.name}!
        </Text>

      </View>
    )
  }

}
