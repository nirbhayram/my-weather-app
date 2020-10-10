import {Spinner} from 'native-base'
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import useGetCity from "../../../hooks/useGetCity";
import {City} from "../../../utils/typeDef";


const Title = () => {
    const city: City | undefined = useGetCity();
    return (
        <View style={[styles.textContainer]}>
            {
                city ? (
                    <>
                        <Text style={styles.primary_title}>{city?.name}</Text>
                        <Text style={styles.secondary_title}> {new Date(city?.dt * 1000).toString()} </Text>
                    </>

                ) : (
                    <Spinner color='white'/>
                )
            }
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    textContainer: {
        flex: 0.7,
        flexBasis: 'auto',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    primary_title: {
        fontSize: 20,
        color: "#ffffff",
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
