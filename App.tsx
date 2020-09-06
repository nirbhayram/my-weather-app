import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Button,
  Text,
} from "native-base";
import axios, { AxiosRequestConfig } from "axios";

export default function App() {
  const [place, setPlace] = useState("pune");

  const call = (cityName:string) => {
    let config: AxiosRequestConfig = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c1e64b484782aada5e07d493b0c358fb&units=metric`,
      headers: {},
    };
    console.log(`getting value for ${cityName}`)
    axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Header />
      <Content>
        <Item regular>
          <Input
            placeholder="Regular Textbox"
            onChangeText={(text) => {
              setPlace(text);
            }}
          />
        </Item>
        <Button block success onPress={()=>{
          call(place)
        }}>
          <Text>Success</Text>
        </Button>
      </Content>
    </Container>
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
