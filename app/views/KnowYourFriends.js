import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function KnowYourFriends()
{
return(
    <View style={styles.container}>
        <Text>
            Know Your friends
        </Text>
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
    }
);