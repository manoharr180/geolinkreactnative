import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function NearByFriends()
{
    return(
        <View style={styles.container}>
            <Text>
                Near By friends
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