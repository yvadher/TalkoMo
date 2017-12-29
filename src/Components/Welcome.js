import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { Actions, }  from 'react-native-router-flux'

export default class Welcome extends React.Component{
  componentDidMount() {
    setInterval(() => {
      Actions.Login();
    }, 2000);
  }


  render(){
    return(
      <View style={styles.wrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>TalkoMo</Text>
        </View>
        <View>
          <Text style={styles.footer}>Powered By TolkoMo</Text>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#2c3e50',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title:{
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },
  footer: {
    color: 'white',
  },
  titleWrapper: {
    flex:1,
    justifyContent: 'center',
  }
});
