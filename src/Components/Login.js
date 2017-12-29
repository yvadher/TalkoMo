import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Body , Title, Icon  } from 'native-base';
import {
  View,
  StyleSheet,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  state = {
    name: '',
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#2c3e50'}}>
          <Body>

            <Title>TolkoMo</Title>
          </Body>
        </Header>
        <Content st>
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>TalkoMo</Text>
          </View>

          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input onChangeText={(text) => {
                this.setState({
                  name : text,
                });
              }}/>
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button primary style={styles.submit} onPress={
              ()=>{
                //Navigate
                Actions.Chat(this.state.name);
              }
            }><Text> Primary </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  submit: {
      marginTop: 30,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#2c3e50',
   },
   title:{

     color: '#2c3e50',
     fontSize: 60,
     fontWeight: 'bold',
   },
   titleWrapper: {
     alignItems: 'center',
     justifyContent:'center',
   }

});
