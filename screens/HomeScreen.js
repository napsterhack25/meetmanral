import React, { useState } from "react";
import {Dimensions,StyleSheet,FlatList, ScrollView} from 'react-native';
import { Text, View, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const Home = (props) => {
  const [input, setInput] = useState("");


  const data = [
    {id: 'a', value: 'A'},
    {id: 'b', value: 'B'},
    {id: 'c', value: 'C'},
    {id: 'd', value: 'D'},
    {id: 'e', value: 'E'},
    {id: 'f', value: 'F'},
    {id: 'g', value: 'G'},
    {id: 'h', value: 'H'},

  ];
  const numColumns = 2;
  const size = Dimensions.get('window').width/numColumns;

  
  const styles = StyleSheet.create({
    itemContainer: {
      width: size,
      height: size,
    },
    container: {
      flex: 1,
      backgroundColor: "#3B5323",
    },
    item: {
      flex: 1,
      margin: 3,
      backgroundColor: 'lightblue',
    }
  });





  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}> 
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{item.value}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={numColumns} />
      {/* <TextInput
        placeholder="Enter your profile"
        value={input}
        onChangeText={(value) => setInput(value)}
      />
      <Button
        title="Go to Profile"
        color="#006600"
        onPress={() =>
          props.navigation.navigate("Profile", { username: input })
        }
      /> */}
    </View>
    </ScrollView>
  );
};


export default Home;