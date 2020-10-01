// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import Navigation from './Navigation';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
				initialRouteName={'Navigation'}
			>
				<Stack.Screen name="Home" component={Main} />
				<Stack.Screen name="Navigation" component={Navigation} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;