import { AxiosError } from 'axios';
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import store from '../../store/mobx/CityStore';
import { City } from '../pojo/City';
import { getCityAtmosphereDetails } from '../utils/RestUtils';

const getCityDetails = async (cityName: string) => {
    await getCityAtmosphereDetails(cityName, onSuccess, onError);
};

const onSuccess = (city: City) => {
    store.setCity(city);
    console.log(city.name);
    console.log(city.lat);
    console.log(city.lon);
    console.log(city.weather.id);
    console.log(city.weather.main);
    console.log(city.weather.description);
    console.log(city.weather.icon);
    console.log(city.temperature);
    console.log(city.temperature_min);
    console.log(city.temperature_max);
    console.log(city.pressure);
    console.log(city.humidity);
    console.log(city.sea_level);
    console.log(city.grnd_level);
    console.log(city.visibility);
    console.log(city.wind_speed);
    console.log(city.wind_degree);
    console.log(city.hourlyData[0].time.toString());
    console.log(city.hourlyData[0].temperature);
    console.log(city.hourlyData[0].pressure);
    console.log(city.hourlyData[0].humidity);
    console.log(city.hourlyData[0].clouds);
    console.log(city.hourlyData[0].visibility);
    console.log(city.hourlyData[0].wind_speed);
    console.log(city.hourlyData[0].wind_deg);
    console.log(city.hourlyData[0].weather.id);
    console.log(city.hourlyData[0].weather.main);
    console.log(city.hourlyData[0].weather.description);
    console.log(city.hourlyData[0].weather.icon);
    console.log(city.hourlyData[0].probablity_precipitation);
    console.log(city.hourlyData[4].rain);
    console.log(city.dailyData[0].date.toString());
    console.log(city.dailyData[0].sunrise.toString());
    console.log(city.dailyData[0].sunset.toString());
    console.log(city.dailyData[0].temperature_day);
    console.log(city.dailyData[0].temperature_min);
    console.log(city.dailyData[0].temperature_max);
    console.log(city.dailyData[0].temperature_evening);
    console.log(city.dailyData[0].temperature_night);
    console.log(city.dailyData[0].temperature_morning);
    console.log(city.dailyData[0].pressure);
    console.log(city.dailyData[0].humidity);
    console.log(city.dailyData[0].dew_drops);
    console.log(city.dailyData[0].wind_speed);
    console.log(city.dailyData[0].wind_deg);
    console.log(city.dailyData[0].weather.id);
    console.log(city.dailyData[0].weather.main);
    console.log(city.dailyData[0].weather.description);
    console.log(city.dailyData[0].weather.icon);
    console.log(city.dailyData[0].clouds);
    console.log(city.dailyData[0].probablity_precipitation);
    console.log(city.dailyData[0].rain);
    console.log(city.dailyData[0].uvi);
};

const onError = (error: AxiosError) => {
    console.log(error);
};

const HeaderSection = () => {
    return (
        <View style={styles.navigationControl}>
            <Icon
                name='navicon'
                type='font-awesome'
                color='#fff'
                onPress={()=>{getCityDetails('Kodinar')}}
                size={25} />
            <Icon
                name='bell-o'
                type='font-awesome'
                color='#fff'
                size={25} />
        </View>
    )
}

export default HeaderSection

const styles = StyleSheet.create({
    navigationControl: {
        flex: 0.3,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: Dimensions.get('window').width,
    },
})
