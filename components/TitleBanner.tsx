import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Icon } from 'react-native-elements'

export default function TitleBanner({ primaryText = "South Purwokerto", secondaryText = "Sunday, 13 September" }) {

    return (
        <View style={[styles.container]}>
            <View style={styles.navigationControl}>
                <Icon
                    name='navicon'
                    type='font-awesome'
                    color='#fff'
                    size={25}
                    onPress={() => console.log('hello')} />
                <Icon
                    name='bell-o'
                    type='font-awesome'
                    color='#fff'
                    size={25}
                    onPress={() => console.log('hello')} />
            </View>
            <View style={[styles.textContainer]}>
                <Text style={styles.primary_title}>{primaryText}</Text>
                <Text style={styles.secondary_title}> {secondaryText} </Text>
            </View>
            <View style={styles.climateStatus}>
                <Icon
                    style={{paddingRight:10}}
                    name='cloud'
                    type='font-awesome'
                    color='#fff'
                    size={100}
                    onPress={() => console.log('hello')} />
                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                    <Text
                        style={
                            {
                                fontSize: 40,
                                color: "#fff",
                                fontWeight: "bold",
                                paddingLeft: 10,
                            }
                        }
                    >27°</Text>
                    <Text
                        style={
                            {
                                fontSize: 25,
                                color: "#ccc",
                                paddingLeft:10
                            }
                        }
                    >cloudy</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    navigationControl: {
        flex: 0.3,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: Dimensions.get('window').width,
        // backgroundColor:"#000"
    },
    textContainer: {
        flex: 0.7,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    climateStatus: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: Dimensions.get('window').width,

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
});
