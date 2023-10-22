import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import InterestsService from '../services/InterestsService';
import { FlatList } from 'react-native-gesture-handler';

export default function Interests()
{

    let interestslist = [];
    const [lists, setItems] = useState(interestslist);

    useEffect(() => {
        let list = InterestsService.getInterests();
        list.then(resp => {
            interestslist = resp;
            setItems(interestslist);
        });
    }, []);

    return(
        <View style={styles.container}>

        <FlatList
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(setkey) => setkey.interestId.toString()}
            data={lists}
            renderItem={({ item }) => {
                return <View style={styles.profiles}>
                    <Text style={styles.item}>
                        {item.interest}
                    </Text >
                </View>
            }} />
    </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
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