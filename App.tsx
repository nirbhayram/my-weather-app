import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getCityAtmosphereDetails } from "./components/utils/RestUtils";

export default function App() {
  const [place, setPlace] = useState("pune");
  const [loading, setLoading] = useState(false);

  const getCityDetails = async (cityName: string) => {
    setLoading(true);
    await getCityAtmosphereDetails(cityName, onSuccess, onError);
    setLoading(false);
  };

  const onSuccess = (response: AxiosResponse) => {
    console.log(response?.data);
  };
  const onError = (error: AxiosError) => {
    console.log(error);
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
        buttonStyle={{ width: "100%" }}
        loading={loading}
        onPress={() => {
          getCityDetails(place);
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
