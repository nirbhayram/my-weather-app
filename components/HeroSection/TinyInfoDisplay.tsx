import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'

const TinyInfoDisplay = ({icon="sun-o",text="6:15 am"}) => {
    return (
        <View style={styles.labelView}>
            <Icon
                name={icon}
                type='font-awesome-5'
                color='#EBEBEB'
                size={Dimensions.get('window').width*0.06} />
            <View style={styles.labelViewTextView}>
                <Text style={styles.labelViewTextViewText}>{text}</Text>
            </View>
        </View>
    )
}

export default TinyInfoDisplay

const styles = StyleSheet.create({
    labelView: {
        minWidth: Dimensions.get('window').width*0.20,
        flexDirection: "column",
        flex: 1,
        paddingTop: "5%",
        paddingBottom: "5%",
        flexGrow: 1,
        // backgroundColor:"#000"
    },
    labelViewTextView: {
        justifyContent: "center",
        alignItems: "center"
    },
    labelViewTextViewText: {
        color: "#EBEBEB",
        fontSize: Dimensions.get('window').width*0.04,
        padding: "10%"
    }
})
