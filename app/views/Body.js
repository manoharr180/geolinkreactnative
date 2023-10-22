import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert, Image } from "react-native";
import UserService from '../services/UserServices';

export default function Body({navigation}) {

    const sendMessage = () => {
        Alert.alert('Hello Manohar');
    }

    const userData = () => {
       return sessionStorage.getItem('mailId')
    }

    useEffect(() =>
    {
        UserService.getUser(userData())
        .then(
            resp =>{
                console.log(resp);
            }
        )
    });

    return (
        <>
            <View style={styles.profilePic}>

                {/* <Image source={require('../sections/img/DSC_0205.png') }
                 style={styles.logo} /> */}
                <Image source={require('../sections/img/ProfilePic.jpg')} style={styles.logo} />

            </View>
            <View style={styles.knowyourfriends}>
                <Text onPress={ () => navigation.navigate('Know your frieds')}>
                    Know your friends
            </Text>
            </View>
            <View style={styles.friendslist} >
                <TouchableHighlight underlayColor='#af2d2d'>
                    <Text onPress={() => navigation.navigate('Near by friends')}>
                        Near By friends
                </Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text onPress={() => navigation.navigate('Freinds List')}>
                        Friends List
                </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.interests}>
                <TouchableHighlight>
                    <Text onPress={() => navigation.navigate('Interests')}>
                        Interests
                </Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text onPress={() => navigation.navigate('Fitness')}>
                        Fitness
                </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.Settings}>
                <TouchableHighlight>
                    <Text onPress={() => navigation.navigate('Privacy')}>
                        Privacy
                </Text>
                </TouchableHighlight>
                <TouchableHighlight>
                    <Text onPress={() => navigation.navigate('Settings')}>
                        Settings
                </Text>
                </TouchableHighlight>
            </View>
            <View style={styles.footer}>
            <TouchableHighlight underlayColor='#637bd3'>
                <Text onPress={() => navigation.navigate('Login')}>
                    Logout
                </Text>
            </TouchableHighlight>
        </View>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    profilePic: {
        flex: 4,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#4b4fa0',
        alignItems: 'center',
        justifyContent: "center",
        borderBottomWidth: 1
    },
    knowyourfriends: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#4b7ea0',
        alignItems: 'center',
        justifyContent: "center",
        borderBottomWidth: 1
    },
    friendslist: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#1458a0',
        alignItems: 'center',
        justifyContent: "space-evenly",
        borderBottomWidth: 1,
    },
    interests: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#2c4e72',
        alignItems: 'center',
        justifyContent: "space-evenly",
        borderBottomWidth: 1
    },
    Settings: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#23899b',
        alignItems: 'center',
        justifyContent: "space-evenly",
        borderBottomWidth: 1
    },
    logo: {
        width: '100%',
        height: '100%'
    },
    footer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3e60d8',
        width:'100%'
      }
});