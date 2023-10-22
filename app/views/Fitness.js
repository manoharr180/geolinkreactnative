import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Fitness()
{
    return(
        <View  style={styles.container}>
            <Text>
            Fitness
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