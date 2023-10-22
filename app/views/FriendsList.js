import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FriendsService from '../services/FriendService';
import { FlatList } from 'react-native-gesture-handler';
import SearchBar from '../components/SearchBar';
import { Avatar } from 'react-native-elements';

export default function FreindsList() {
    let friendslist = [];
    const [lists, setItems] = useState(friendslist);

    useEffect(() => {

        let list = FriendsService.getFriends(7);
        list.then(resp => {
            friendslist = resp;
            setItems(friendslist);
        });
    }, []);

    const navigateToProfile = () => {

    }

    return (
        <>
            <SearchBar />
            <View style={styles.container}>

                <FlatList
                    // horizontal={true}
                    // showsHorizontalScrollIndicator={false}
                    keyExtractor={(setkey) => setkey.friendProfileId.toString()}
                    data={lists}
                    renderItem={({ item }) => {
                        return <View style={styles.profiles}>
                            <Text>
                                <Avatar source={{
                                    uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                                }}
                                />
                            </Text>
                            <Text style={styles.item}>
                                {item.fName}
                            </Text >
                                <Button  title="Follow" onPress={navigateToProfile} />
                        </View>
                    }} />
            </View>
        </>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',

        },
        item: {
            fontSize: 18,
            borderColor: '#2b1c1c',
            paddingLeft:50,
            marginRight:50
        },
        profiles: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor:'#e5e3e4',
            margin:10,
            padding:15
        },
    }
);