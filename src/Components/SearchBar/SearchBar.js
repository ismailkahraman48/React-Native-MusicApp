import React from "react";
import { TextInput, View } from "react-native";
import styles from './SearchBar.style'

const SearchBar = (props) => {

    return(
        <View style = {styles.container}>
            <TextInput
            style = {style=styles.text_input} 
            placeholder="Enter a song name.."
            onChangeText={props.onSearch}
            />
        </View>
        
    )
}


export default SearchBar;