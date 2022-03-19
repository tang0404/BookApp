import React from "react";
import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeBaseProvider } from "native-base";

import Navigation from "./src/navigation";


const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </SafeAreaProvider>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
