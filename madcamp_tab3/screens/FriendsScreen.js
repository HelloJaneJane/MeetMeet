import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { Content,Title,Card, CardItem, Container } from 'native-base';
import { Ionicons } from '@expo/vector-icons'

import MyFriendElement from '../Components/MyFriendElement';

export default class FriendsScreen extends Component {

    
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        <Ionicons name={'ios-people'} style={{ fontSize:30,color: tintColor }} />
    )
}

  render() {
    return (
      <Container style={{backgroundColor: '#efefef'}}>
            <Content>
            {/* <Card style={{alignItems: 'center', backgroundColor: '#be1323'}}>
             <CardItem header>
                 <Ionicons name={"ios-heart"} style={{color:'white'}}/>
                 {/* <Title color="white">Your Friends List</Title> */}
                 {/* <Text color="white">Your Send List</Text>
                 <Ionicons name={"ios-heart"} style={{color:'white'}}/>
             </CardItem>
             </Card> */} 
                <MyFriendElement
                username="김소연"
                statusLine="나는 항상 배고프다"/>
                 <MyFriendElement
                username="김세림"
                statusLine="오늘 1000일"/>
                 <MyFriendElement
                username="김맥주"
                statusLine="맥주와 함께라면"/>
                 <MyFriendElement
                username="조맥주"
                statusLine=""/>
                 <MyFriendElement
                username="조혜빈"
                statusLine="매드캠프 짱"/>
                 <MyFriendElement
                username="이제인"
                statusLine="남자친구 생겼습니다"/>
                 <MyFriendElement
                username="이치킨"
                statusLine="치킨먹고 싶다"/>
                 <MyFriendElement
                username="백설기"
                statusLine="떡아님"/>
                 <MyFriendElement
                username="조맥주"
                statusLine="맥주다"/>
                 <MyFriendElement
                username="조혜빈"
                statusLine="매드캠프 짱"/>
                 <MyFriendElement
                username="이제인"
                statusLine="남자친구 생겼습니다"/>
                 <MyFriendElement
                username="이치킨"
                statusLine="치킨먹고 싶다"/>
                 <MyFriendElement
                username="김맥주"
                statusLine="맥주와 함께라면"/>
                 <MyFriendElement
                username="조맥주"
                statusLine=""/>
                 <MyFriendElement
                username="조혜빈"
                statusLine="매드캠프 짱"/>
                 <MyFriendElement
                username="이제인"
                statusLine="남자친구 생겼습니다"/>
                 <MyFriendElement
                username="이치킨"
                statusLine="치킨먹고 싶다"/>
            </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#fff',
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex:1,
  },

  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor:'#fff',
    borderBottomWidth:1,
    padding: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding:8,
    backgroundColor:'yellow',
    borderRadius:5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'yellow',
  },
  name: {
    paddingLeft: 10,
  },
  
});