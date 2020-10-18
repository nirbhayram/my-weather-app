// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createClient, Provider } from 'urql';
import Main from './components/Main';
import Navigation from './components/NavigationBar';
import { GRAPHQL_URL } from './utils/stylesConstants';

const client = createClient({ url: GRAPHQL_URL });

const Stack = createStackNavigator();

function App() {
    return (
        <Provider value={client}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                    initialRouteName="Navigation"
                >
                    <Stack.Screen name="Home" component={Main} />
                    <Stack.Screen name="Navigation" component={Navigation} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default App;
