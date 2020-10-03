// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main';
import Navigation from './components/NavigationBar/Navigation';
import { createClient, Provider } from 'urql';

const client = createClient({ url: 'http://localhost:4000' });

const Stack = createStackNavigator();

function App() {
	return (
		<Provider value={client}>
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
		</Provider>
	);
}

export default App;