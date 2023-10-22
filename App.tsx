import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/views/Header';
import Body from './app/views/Body';
import Footer from './app/views/Footer';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NearByFriends from './app/views/NearByFriends';
import KnowYourFriends from './app/views/KnowYourFriends';
import FreindsList from './app/views/FriendsList';
import Interests from './app/views/Interests';
import Fitness from './app/views/Fitness';
import Privacy from './app/views/Privacy';
import Settings from './app/views/Settings';
import Login from './app/views/Login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Body} />
        <Stack.Screen name="Near by friends" component={NearByFriends} />
        <Stack.Screen name="Know your frieds" component={KnowYourFriends} />
        <Stack.Screen name="Freinds List" component={FreindsList} />
        <Stack.Screen name="Interests" component={Interests} />
        <Stack.Screen name="Fitness" component={Fitness} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      </NavigationContainer>
    // <View style = {styles.container}>
    //   <Header/>
    //   <Body/>
    //   <Footer/>
    // </View>
  );
}

const styles  = StyleSheet.create({
  
    container:{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#ffffff'
    }
});


