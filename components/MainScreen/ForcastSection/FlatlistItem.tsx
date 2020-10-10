import {observer} from 'mobx-react'
import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const FlatlistItem = observer((data: { time: string, icon: string, text: number }) => (
    <View style={[styles.component]}>
        <Text style={[styles.componentTitleText]}>{data.time}</Text>
        <Image
            style={styles.imageView}
            source={{ uri: `http://openweathermap.org/img/wn/${data.icon}@2x.png` }}
        />
        <Text style={[styles.componentBottomText]}>{data.text}°</Text>
    </View>
))

export default FlatlistItem

const styles = StyleSheet.create({
    component: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: 120,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#EBEBEB",
        marginLeft: 10,
        marginRight: 10
    },
    componentTitleText: {
        color: "#fff",
        fontSize: 15,
        paddingBottom: 5,
    },
    componentIcon: {
        paddingBottom: 10,
    },
    componentBottomText: {
        color: "#fff",
        fontSize: 15,
        paddingBottom: 5,
    },
    imageView: {
        width: 50,
        height: 50,
    }
})
