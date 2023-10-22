import { Text, StyleSheet, View } from "react-native";
import React from 'react'
import { Input } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';


const SearchBar = () => {
    return <Input
        leftIcon={
            <Icon
                name='search'
                size={24}
                color='black'
            />
        }
    />

}

const styles = StyleSheet.create({
    searchBar:
    {
        borderRadius: 5,
        backgroundColor: '#f2f4f4',
    }
});

export default SearchBar;