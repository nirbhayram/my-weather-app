import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";

const BottomSectionTitle = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleBarIcon}></View>
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
        // backgroundColor:"#000"
        justifyContent:"center",
        alignItems:"center",
    },
    titleBarIcon: {
        // height: 20,
        borderBottomColor: '#EBEBEB',
        borderBottomWidth: 4,
        paddingTop:10,
        marginBottom: 20,
        width:"20%",
        justifyContent:"center",
        alignItems:"center"
    },
    titleContainer: {
        width:"100%",
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
