import React from 'react';
import {View, StyleSheet, Text, TouchableHighlight} from 'react-native';

export default function Header()
{
    return(
        <View style={styles.container}>
            <View >
            <Text>
                Logo
            </Text>
            </View>
            <View>
            <Text style={{paddingLeft:42}}>
                GeoLinks
            </Text>    
            </View>
            <View>
            <Text>
                Notification
            </Text>    
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        flex:1,
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#23899b',
        alignItems:'center',
        justifyContent:"space-evenly",
        borderBottomWidth:1,

    },
    logo:
    {
        justifyContent:'space-between',
        alignItems:'center'
    }
});