import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";
import BookScreen from "./src/screen/BookScreen";
import DetailScreen from "./src/screen/DetailScreen";
// import { Stack } from "native-base";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BookScreen}
          />
          <Stack.Screen 
            name="Detail"
            component={DetailScreen}
            options={({ route }) => ({ title: route.params.title })} 
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
