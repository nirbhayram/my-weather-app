import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Input, Icon,Button } from "react-native-elements";
import axios, { AxiosRequestConfig } from "axios";

export default function App() {
  const [place, setPlace] = useState("pune");
  const [loading, setLoading] = useState(false)

  const call = (cityName: string) => {
    setLoading(true);
    let config: AxiosRequestConfig = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c1e64b484782aada5e07d493b0c358fb&units=metric`,
      headers: {},
    };
    console.log(`getting value for ${cityName}`);
    axios(config)
      .then((response) => {
        console.log(response.data);
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Input
        placeholder="INPUT WITH CUSTOM ICON"
        leftIcon={<Icon name="sc-telegram" type="evilicon" color="#517fa4" />}
        onChangeText={(text) => {
          setPlace(text);
        }}
      />
      <Button 
        title="Submit" 
        buttonStyle={{width:'100%'}}
        loading={loading}
        onPress={()=>{
          call(place)
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15,
  },
});
