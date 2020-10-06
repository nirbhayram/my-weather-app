import {observer} from 'mobx-react';
import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Icon} from "react-native-elements";

const BottomSectionTitle = observer(() => {
    return (
        <View style={styles.container}>
            <View style={styles.titleBarIcon}/>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Next 7 days
                </Text>
                <Icon
                    name='ellipsis-h'
                    type='font-awesome-5'
                    color='#5C5C5C'
                    size={30}/>
            </View>
        </View>
    )
})

export default BottomSectionTitle

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    titleBarIcon: {
        borderBottomColor: '#5c5c5c',
        borderBottomWidth: 4,
        paddingTop: 10,
        marginBottom: 20,
        width: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    titleContainer: {
        alignSelf: 'stretch',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#5C5C5C",
        paddingBottom: 20
    }
})
