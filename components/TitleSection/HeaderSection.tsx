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
    console.log('city name' + city.name);
    console.log('city lat ' + city.lat);
    console.log('city lon '+city.lon);
    console.log('city weather id '+city.weather.id);
    console.log('city weather main '+city.weather.main);
    console.log('city weather description '+city.weather.description);
    console.log('city weather icon '+city.weather.icon);
    console.log('city temperature '+city.temperature);
    console.log('city temprature min '+city.temperature_min);
    console.log('city temprature max '+city.temperature_max);
    console.log('city presure '+city.pressure);
    console.log('city humidity'+city.humidity);
    console.log('city sea level'+city.sea_level);
    console.log('city ground level'+city.grnd_level);
    console.log('city visibility '+city.visibility);
    console.log('city wind speed '+city.wind_speed);
    console.log('city wind degree '+city.wind_degree);
    console.log('city hourly data time '+city.hourlyData[0].time.toString());
    console.log('city hourly data temperature '+city.hourlyData[0].temperature);
    console.log('city hourly data pressure '+city.hourlyData[0].pressure);
    console.log('city hourly data humidity '+city.hourlyData[0].humidity);
    console.log('city hourly data clouds '+city.hourlyData[0].clouds);
    console.log('city hourly data visibility '+city.hourlyData[0].visibility);
    console.log('city hourly data wind speed '+city.hourlyData[0].wind_speed);
    console.log('city hourly data wind degree '+city.hourlyData[0].wind_deg);
    console.log('city hourly data weather id '+city.hourlyData[0].weather.id);
    console.log('city hourly data weather main '+city.hourlyData[0].weather.main);
    console.log('city hourly data weather description '+city.hourlyData[0].weather.description);
    console.log('city hourly data weather icon '+city.hourlyData[0].weather.icon);
    console.log('city hourly data probability precepitation '+city.hourlyData[0].probablity_precipitation);
    console.log('city hourly data rain '+city.hourlyData[4].rain);
    console.log('city daily data date'+city.dailyData[0].date.toString());
    console.log('city daily data sunrise'+city.dailyData[0].sunrise.toString());
    console.log('city daily data sun set '+city.dailyData[0].sunset.toString());
    console.log('city daily data temperature day '+city.dailyData[0].temperature_day);
    console.log('city daily data temperature min '+city.dailyData[0].temperature_min);
    console.log('city daily data temperature max '+city.dailyData[0].temperature_max);
    console.log('city daily data temperature evening '+city.dailyData[0].temperature_evening);
    console.log('city daily data temperature night '+city.dailyData[0].temperature_night);
    console.log('city daily data temperarure morning '+city.dailyData[0].temperature_morning);
    console.log('city daily data pressure '+city.dailyData[0].pressure);
    console.log('city daily data humidity '+city.dailyData[0].humidity);
    console.log('city daily data dew drops '+city.dailyData[0].dew_drops);
    console.log('city daily data wind speed '+city.dailyData[0].wind_speed);
    console.log('city daily data wind degree '+city.dailyData[0].wind_deg);
    console.log('city daily data weather id '+city.dailyData[0].weather.id);
    console.log('city daily data weather main '+city.dailyData[0].weather.main);
    console.log('city daily data weather description '+city.dailyData[0].weather.description);
    console.log('city daily data weather icon '+city.dailyData[0].weather.icon);
    console.log('city daily data clouds '+city.dailyData[0].clouds);
    console.log('city daily data probability of precipitation '+city.dailyData[0].probablity_precipitation);
    console.log('city daily data rain '+city.dailyData[0].rain);
    console.log('city daily data uvi '+city.dailyData[0].uvi);
};

const onError = (error: AxiosError) => {
    console.log(error);
};

const HeaderSection = () => {
    return (
        <View style={[styles.navigationControl,{width:Dimensions.get('window').width}]}>
            <Icon
                name='navicon'
                type='font-awesome'
                color='#fff'
                onPress={()=>{getCityDetails('kodinar')}}
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
        flexBasis:'auto',
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
})
