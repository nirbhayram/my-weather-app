import { Label } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";

const HeroSection = () => {
    return (
        <View style={styles.container}>
            <View style={styles.labelView}>
                <Icon
                    name='sun-o'
                    type='font-awesome'
                    color='#EBEBEB'
                    size={25}
                    onPress={() => console.log('hello')} />
                <View style={styles.labelViewTextView}>
                    <Text style={styles.labelViewTextViewText}>
                        6:15 am
                    </Text>
                </View>
            </View>
            <View style={styles.labelView}>
                <Icon
                    name='sun'
                    type='font-awesome-5'
                    color='#EBEBEB'
                    size={25}
                    onPress={() => console.log('hello')} />
                <View style={styles.labelViewTextView}>
                    <Text style={styles.labelViewTextViewText}>
                        5:26 pm
                    </Text>
                </View>
            </View>
            <View style={styles.labelView}>
                <Icon
                    name='wind'
                    type='font-awesome-5'
                    color='#EBEBEB'
                    size={25}
                    onPress={() => console.log('hello')} />
                <View style={styles.labelViewTextView}>
                    <Text style={styles.labelViewTextViewText}>
                        17 km/hr
                    </Text>
                </View>
            </View>
            <View style={styles.labelView}>
                <Icon
                    name='cloud-sun-rain'
                    type='font-awesome-5'
                    color='#EBEBEB'
                    size={25}
                    onPress={() => console.log('hello')} />
                <View style={styles.labelViewTextView}>
                    <Text style={styles.labelViewTextViewText}>
                        11%
                    </Text>
                </View>
            </View>
            <View style={styles.labelView}>
                <Icon
                    name='bolt'
                    type='font-awesome-5'
                    color='#EBEBEB'
                    size={25}
                    onPress={() => console.log('hello')} />
                <View style={styles.labelViewTextView}>
                    <Text style={styles.labelViewTextViewText}>
                        UV: 3
                    </Text>
                </View>
            </View>
            <View style={styles.labelView}>
                <Icon
                    name='tint'
                    type='font-awesome'
                    color='#EBEBEB'
                    size={25}
                    onPress={() => console.log('hello')} />
                <View style={styles.labelViewTextView}>
                    <Text style={styles.labelViewTextViewText}>
                        17%
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default HeroSection

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 10,
        width: "80%",
        height: "80%",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(99, 128, 226,0.6)',
        flexWrap:"wrap",
        alignContent:"center",
        flexGrow:3
        // shadowOpacity:1,
        // backgroundColor:"#6380e2"
    },
    labelView: {
        minWidth:"25%",
        flexDirection: "column",
        flex: 1,
        paddingTop:20,
        paddingBottom:20,
        // backgroundColor:"#000",
        // borderWidth:5,
        // borderColor:"#fff"
    },
    labelViewTextView: {
        justifyContent: "center",
        alignItems: "center"
    },
    labelViewTextViewText: {
        color: "#EBEBEB",
        fontSize: 15,
        padding: 10
    }
})
