import React, { useState } from "react";
import { StyleSheet, View, Text, Image, SafeAreaView, FlatList  } from "react-native";
import music_data from './music-data.json'
import SongCard from './Components/SongCard'
import SearchBar from "./Components/SearchBar";

function App (){
  
  const renderSong = ({item}) => <SongCard song = {item}></SongCard>
  const renderSeperator = () => <View style = {styles.seperator}></View>
  const [list, setList] = useState(music_data);

  const handleSearch = (text) => {
    const filteredList = music_data.filter((song) => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.includes(searchedText);

    });
    setList(filteredList);
  }

  return (

    <SafeAreaView style = {styles.container}>
        <SearchBar onSearch = {handleSearch}></SearchBar>
        <FlatList 
        keyExtractor={item => item.id}
        data={list} 
        renderItem = {renderSong}
        ItemSeparatorComponent = {renderSeperator}
        />

    </SafeAreaView>

  )
}

export default App;

const styles = StyleSheet.create({
  container : {
    flex : 1
  },
  seperator : {
    borderWidth : 1,
    borderColor : '#e0e0e0'
  }
})