import { observer } from 'mobx-react'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import store from '../../store/mobx/CityStore'


const Title = observer(({ primaryText = "South Purwokerto", secondaryText = "Sunday, 13 September" }) => {
    return (
        <View style={[styles.textContainer]}>
            <Text style={styles.primary_title}>{store.listCity.length!=0?store.listCity[0].name:primaryText}</Text>
            <Text style={styles.secondary_title}> {secondaryText} </Text>
        </View>
    )
})

export default Title

const styles = StyleSheet.create({
    textContainer: {
        flex: 0.7,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    primary_title: {
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold",
        alignItems: "center"
    },
    secondary_title: {
        paddingVertical: 7,
        fontSize: 15,
        color: "#C1C1C1",
        alignItems: "center"
    },
})
