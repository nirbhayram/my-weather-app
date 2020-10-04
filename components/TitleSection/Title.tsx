import { observer } from 'mobx-react'
import { Spinner } from 'native-base'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import store from '../../store/mobx/CityStore'


const Title = observer(() => {
    const fetching = store.fetching;
    const city = store.city
    return (
        <View style={[styles.textContainer]}>
            {
                fetching ?
                    (<>
                        <Spinner color='white' />
                    </>
                    ) : (
                        <>
                            <Text style={styles.primary_title}>{city?.name}</Text>
                            <Text style={styles.secondary_title}> {new Date(city?.dt*1000).toString()} </Text>
                        </>
                    )
            }
        </View>
    )
})

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
