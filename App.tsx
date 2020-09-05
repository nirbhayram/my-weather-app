import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import axios, { AxiosRequestConfig } from 'axios';

export default function App() {


  let config: AxiosRequestConfig = {
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/onecall?lat=20.79&lon=70.7&exclude=minutely&appid=c1e64b484782aada5e07d493b0c358fb',
    headers: {}
  };

  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });


  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
