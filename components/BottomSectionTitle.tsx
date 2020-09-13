import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";

const BottomSectionTitle = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleBarIcon}>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Previous 7 days
                </Text>
                <Icon
                    name='ellipsis-h'
                    type='font-awesome-5'
                    color='#5C5C5C'
                    size={30}
                    onPress={() => console.log('hello')} />
            </View>
        </View>
    )
}

export default BottomSectionTitle

const styles = StyleSheet.create({
    container: {

    },
    titleBarIcon:{ 
        height:20
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    titleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#5C5C5C"
    }
})
