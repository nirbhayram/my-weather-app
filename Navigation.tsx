import { AxiosError } from 'axios';
import { LinearGradient } from 'expo-linear-gradient'
import { observer } from 'mobx-react';
import { Button, Spinner } from 'native-base';
import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Input } from 'react-native-elements';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context'
import { Dialog } from 'react-native-simple-dialogs';
import { City } from './components/pojo/City';
import { getCityAtmosphereDetails } from './components/utils/RestUtils';
import store from './store/mobx/CityStore';
import Toast from "react-native-root-toast";

const DATA = [
    {
        cityName: 'kodinar',
        icon: '10d',
        id: 'sdasdasdasd'
    },
    {
        cityName: 'Pune',
        icon: '10d',
        id: 'bvdkavbksdv'
    },
    {
        cityName: 'Ahmedabad',
        icon: '10d',
        id: 'aksfbdkfbakfbk'
    },
];

const Navigation = observer(({ navigation }) => {

    const [dialogVisible, setDialogVisible] = useState(false);

    const [loading, setLoading] = useState(false);

    const goToMainScreen = () => {
        navigation.navigate('Home');
    }

    const Item = (data: Object) => (

        <TouchableOpacity onPress={() => { store.changeCity(data.cityName);goToMainScreen() }}>
            <View style={styles.flatListView}>
                <LinearGradient colors={["#4064e0", "#b6c5fb"]} style={styles.flatListItemView}>
                    <Text style={styles.flatListTextView}>{data.cityName}</Text>
                    <Image
                        style={styles.flatListImageView}
                        source={{ uri: `http://openweathermap.org/img/wn/${data.icon}@2x.png` }}
                    />
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (
        <Item cityName={item.name} icon={item.weather.icon} />
    );

    const DialogBox = () => {

        const [city, setCity] = useState('')

        const getCityDetails = async (cityName: string) => {
            await getCityAtmosphereDetails(cityName, onSuccess, onError);
        };

        const onSuccess = (city: City) => {
            store.setCity(city);
            console.log('city name' + city.name);
            console.log('city lat ' + city.lat);
            console.log('city lon ' + city.lon);
            console.log('city weather id ' + city.weather.id);
            console.log('city weather main ' + city.weather.main);
            console.log('city weather description ' + city.weather.description);
            console.log('city weather icon ' + city.weather.icon);
            console.log('city temperature ' + city.temperature);
            console.log('city temprature min ' + city.temperature_min);
            console.log('city temprature max ' + city.temperature_max);
            console.log('city presure ' + city.pressure);
            console.log('city humidity' + city.humidity);
            console.log('city sea level' + city.sea_level);
            console.log('city ground level' + city.grnd_level);
            console.log('city visibility ' + city.visibility);
            console.log('city wind speed ' + city.wind_speed);
            console.log('city wind degree ' + city.wind_degree);
            console.log('city hourly data time ' + city.hourlyData[0].time.toString());
            console.log('city hourly data temperature ' + city.hourlyData[0].temperature);
            console.log('city hourly data pressure ' + city.hourlyData[0].pressure);
            console.log('city hourly data humidity ' + city.hourlyData[0].humidity);
            console.log('city hourly data clouds ' + city.hourlyData[0].clouds);
            console.log('city hourly data visibility ' + city.hourlyData[0].visibility);
            console.log('city hourly data wind speed ' + city.hourlyData[0].wind_speed);
            console.log('city hourly data wind degree ' + city.hourlyData[0].wind_deg);
            console.log('city hourly data weather id ' + city.hourlyData[0].weather.id);
            console.log('city hourly data weather main ' + city.hourlyData[0].weather.main);
            console.log('city hourly data weather description ' + city.hourlyData[0].weather.description);
            console.log('city hourly data weather icon ' + city.hourlyData[0].weather.icon);
            console.log('city hourly data probability precepitation ' + city.hourlyData[0].probablity_precipitation);
            console.log('city hourly data rain ' + city.hourlyData[4].rain);
            console.log('city daily data date' + city.dailyData[0].date.toString());
            console.log('city daily data sunrise' + city.dailyData[0].sunrise.toString());
            console.log('city daily data sun set ' + city.dailyData[0].sunset.toString());
            console.log('city daily data temperature day ' + city.dailyData[0].temperature_day);
            console.log('city daily data temperature min ' + city.dailyData[0].temperature_min);
            console.log('city daily data temperature max ' + city.dailyData[0].temperature_max);
            console.log('city daily data temperature evening ' + city.dailyData[0].temperature_evening);
            console.log('city daily data temperature night ' + city.dailyData[0].temperature_night);
            console.log('city daily data temperarure morning ' + city.dailyData[0].temperature_morning);
            console.log('city daily data pressure ' + city.dailyData[0].pressure);
            console.log('city daily data humidity ' + city.dailyData[0].humidity);
            console.log('city daily data dew drops ' + city.dailyData[0].dew_drops);
            console.log('city daily data wind speed ' + city.dailyData[0].wind_speed);
            console.log('city daily data wind degree ' + city.dailyData[0].wind_deg);
            console.log('city daily data weather id ' + city.dailyData[0].weather.id);
            console.log('city daily data weather main ' + city.dailyData[0].weather.main);
            console.log('city daily data weather description ' + city.dailyData[0].weather.description);
            console.log('city daily data weather icon ' + city.dailyData[0].weather.icon);
            console.log('city daily data clouds ' + city.dailyData[0].clouds);
            console.log('city daily data probability of precipitation ' + city.dailyData[0].probablity_precipitation);
            console.log('city daily data rain ' + city.dailyData[0].rain);
            console.log('city daily data uvi ' + city.dailyData[0].uvi);
            setLoading(false)
            setDialogVisible(false)
        };

        const onError = (error: AxiosError) => {
            console.log(error);
            setLoading(false);
            setDialogVisible(false)
            Toast.show('Are you sure you spell city correctly?', {
                duration: Toast.durations.SHORT,
                position: Toast.positions.CENTER,
                shadow: true,
                animation: true,
                hideOnPress: true,
                delay: 0,
                onShow: () => {
                },
                onShown: () => {
                },
                onHide: () => {
                },
                onHidden: () => {
                }
            });
        };

        return (
            <View>
                {
                    loading ? (
                        <Spinner color='black' />
                    ) : (
                            <>
                                <Input placeholder='eg: kodinar'
                                    onChangeText={(text) => setCity(text)}
                                >
                                    {city}
                                </Input>
                                <Button block style={{ backgroundColor: "#b6c5fb" }} onPress={() => {
                                    setLoading(true)
                                    getCityDetails(city);
                                }}>
                                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Add city</Text>
                                </Button>
                            </>
                        )
                }

            </View >
        )
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <FlatList
                style={[{ width: Dimensions.get('screen').width }, styles.flatList]}
                data={store.listCity.slice()}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            />
            <View style={styles.inputView}>
                <Button block style={{ backgroundColor: "#b6c5fb" }} onPress={() => {
                    // DATA.push({ cityName: "adasdasdasd", icon: "10d", id: "asdfsadfs" })
                    setDialogVisible(true)
                }}>
                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>Add city</Text>
                </Button>
            </View>
            <Dialog
                visible={dialogVisible}
                title="Which city are you looking for?"
                onTouchOutside={() => setDialogVisible(false)}
                animationType="fade"
            >
                <DialogBox />
            </Dialog>
        </SafeAreaView>
    )
}
)

export default Navigation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 10
    },
    flatList: {
        flex: 1,
        flexShrink: 1,
    },
    inputView: {
        margin: 10,
        alignSelf: 'stretch',
        flexBasis: 'auto',
    },
    flatListView: {
        margin: 5,
        alignSelf: 'stretch',
        borderRadius: 10
    },
    flatListItemView: {
        flexDirection: 'row',
        height: 80,
        alignSelf: 'stretch',
        margin: 5,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    flatListTextView: {
        padding: 30,
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
    },
    flatListImageView: {
        padding: 30,
        width: 60,
        height: 60
    }
})
