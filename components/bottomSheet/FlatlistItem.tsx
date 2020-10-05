import {observer} from 'mobx-react';
import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {getFixedDigitNumber} from '../../utils/utilities';

const FlatlistItem = observer((data: { icon: string, date: string, maxTemperature: number, minTemperature: number }) => (
    <View style={styles.titleContainer}>
        <View style={styles.titleContainerDate}>
            <Image
                style={styles.imageView}
                source={{uri: `http://openweathermap.org/img/wn/${data.icon}@2x.png`}}
            />
            <Text style={{fontSize: 13, paddingLeft: "5%", fontWeight: "bold", color: "#5C5C5C"}}>{data.date}</Text>
        </View>
        <View style={styles.titleContainerTemprature}>
            <Text style={{ fontSize: 17, paddingRight: "5%", fontWeight: "bold", color: "#5C5C5C" }}>{getFixedDigitNumber(data.maxTemperature)}</Text>
            <Text style={{ paddingRight: "5%" }}>{getFixedDigitNumber(data.minTemperature)}</Text>
        </View>
    </View>
));

export default FlatlistItem

const styles = StyleSheet.create({
    imageView: {
        width: 35,
        height: 25
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 5,
        paddingBottom: 5
    },
    titleContainerDate: {
        padding: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    titleContainerTemprature: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    },
})
