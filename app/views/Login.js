import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Avatar from 'react-native-user-avatar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import LoginService from '../services/LoginService';

export default function Login({ navigation }) {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function showalert() {
        
        const data = await LoginService.login(userName, password);
        console.log('updated session ')
        console.log('updated session ', data.token)
        await sessionStorage.setItem('token', data.token);
        await sessionStorage.setItem('userid', data.userInfo.profileId);
        await sessionStorage.setItem('mailId', data.userInfo.mailId);
        navigation.navigate('Home')
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.icons}>
                <Avatar source={{
                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                }}
                />
            </View>

            <Input style={styles.inputs}
                placeholder='User name'
                value={userName}
                onChangeText={(e) => { setUserName(e) }}
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
                errorStyle={{ color: 'red' }}
                errorMessage=''
                textContentType='emailAddress'
            />

            <Input style={styles.inputs} placeholder="Password" secureTextEntry={true}
                onChangeText={(e) => { setPassword(e) }}
                leftIcon={
                    <Icon
                        name='lock'
                        size={24}
                        color='black'
                    />
                } />
            <Button
                onPress={showalert}
                title="Login"
            />

        </View>
        </>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            margin: 25,
        },
        inputs: {
            alignItems: 'center',
            padding: 10,
            margin: 25,
        },
        icons: {
            alignItems: 'center',
            justifyContent: 'center',
            padding: 25,
            margin: 25,
        }
    }
);