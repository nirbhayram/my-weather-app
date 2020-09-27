import { observer } from 'mobx-react';
import { Spinner } from 'native-base';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Icon } from "react-native-elements";
import store from '../../store/mobx/CityStore';

const BottomSectionTitle = observer(() => {
    return (
        <View style={styles.container}>
            {
                store.isEmpty ? (
                    <Spinner color='#5C5C5C' />
                ) : (<>
                    <View style={styles.titleBarIcon}></View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>
                            Next 7 days
                        </Text>
                        <Icon
                            name='ellipsis-h'
                            type='font-awesome-5'
                            color='#5C5C5C'
                            size={30} />
                    </View>
                </>)
            }

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
        borderBottomColor: '#EBEBEB',
        borderBottomWidth: 4,
        paddingTop: 10,
        marginBottom: 20,
        width: "20%",
        justifyContent: "center",
        alignItems: "center"
    },
    titleContainer: {
        width: "100%",
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
