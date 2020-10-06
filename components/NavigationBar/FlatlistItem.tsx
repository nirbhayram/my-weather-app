import {LinearGradient} from 'expo-linear-gradient';
import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';
import {useSetCityName} from "../../hooks/useSetCityName";

const FlatlistItem = (data: { cityName: string, icon: string, goToMainScreen: Function }) => {
    return (

        <TouchableOpacity onPress={() => {
            const flag: boolean = useSetCityName(data.cityName)
            if (flag) {
                data.goToMainScreen();
            } else {
                Toast.show('Something went wrong :(', {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.CENTER,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0
                });
            }
        }}>
            <View style={styles.flatListView}>
                <LinearGradient colors={["#4064e0", "#b6c5fb"]} style={styles.flatListItemView}>
                    <Text style={styles.flatListTextView}>{data.cityName}</Text>
                    <Image
                        style={styles.flatListImageView}
                        source={{uri: `http://openweathermap.org/img/wn/${data.icon}@2x.png`}}
                    />
                </LinearGradient>
            </View>
        </TouchableOpacity>
    );
}

export default FlatlistItem

const styles = StyleSheet.create({
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
