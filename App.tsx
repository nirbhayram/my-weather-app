import * as React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { Input, Icon, Button, Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { getCityAtmosphereDetails } from "./components/utils/RestUtils";
import { AxiosError } from "axios";
import { City } from "./components/pojo/City";
import TitleBanner from "./components/TitleBanner";

const App = () => {
	const [place, setPlace] = React.useState("kodinar");
	const [loading, setLoading] = React.useState(false);
	const [cityValue, setCityValue] = React.useState(Object);

	const getCityDetails = async (cityName: string) => {
		setLoading(true);
		await getCityAtmosphereDetails(cityName, onSuccess, onError);
		setLoading(false);
	};

	const onSuccess = (city: City) => {
		setCityValue(city);
		console.log(city.name);
		console.log(city.lat);
		console.log(city.lon);
		console.log(city.weather.id);
		console.log(city.weather.main);
		console.log(city.weather.description);
		console.log(city.weather.icon);
		console.log(city.temperature);
		console.log(city.temperature_min);
		console.log(city.temperature_max);
		console.log(city.pressure);
		console.log(city.humidity);
		console.log(city.sea_level);
		console.log(city.grnd_level);
		console.log(city.visibility);
		console.log(city.wind_speed);
		console.log(city.wind_degree);
		console.log(city.hourlyData[0].time.toString());
		console.log(city.hourlyData[0].temperature);
		console.log(city.hourlyData[0].pressure);
		console.log(city.hourlyData[0].humidity);
		console.log(city.hourlyData[0].clouds);
		console.log(city.hourlyData[0].visibility);
		console.log(city.hourlyData[0].wind_speed);
		console.log(city.hourlyData[0].wind_deg);
		console.log(city.hourlyData[0].weather.id);
		console.log(city.hourlyData[0].weather.main);
		console.log(city.hourlyData[0].weather.description);
		console.log(city.hourlyData[0].weather.icon);
		console.log(city.hourlyData[0].probablity_precipitation);
		console.log(city.hourlyData[4].rain);
		console.log(city.dailyData[0].date.toString());
		console.log(city.dailyData[0].sunrise.toString());
		console.log(city.dailyData[0].sunset.toString());
		console.log(city.dailyData[0].temperature_day);
		console.log(city.dailyData[0].temperature_min);
		console.log(city.dailyData[0].temperature_max);
		console.log(city.dailyData[0].temperature_evening);
		console.log(city.dailyData[0].temperature_night);
		console.log(city.dailyData[0].temperature_morning);
		console.log(city.dailyData[0].pressure);
		console.log(city.dailyData[0].humidity);
		console.log(city.dailyData[0].dew_drops);
		console.log(city.dailyData[0].wind_speed);
		console.log(city.dailyData[0].wind_deg);
		console.log(city.dailyData[0].weather.id);
		console.log(city.dailyData[0].weather.main);
		console.log(city.dailyData[0].weather.description);
		console.log(city.dailyData[0].weather.icon);
		console.log(city.dailyData[0].clouds);
		console.log(city.dailyData[0].probablity_precipitation);
		console.log(city.dailyData[0].rain);
		console.log(city.dailyData[0].uvi);
	};

	const onError = (error: AxiosError) => {
		console.log(error);
	};

	const renderContent = () => (
		<View
			style={{
				backgroundColor: 'white',
				padding: 16,
				height: `100%`,
			}}
		>
			<Text>Swipe down to close</Text>
		</View>
	);

	const sheetRef = React.useRef(null);

	return (
		<>
			<LinearGradient colors={["#4064e0", "#b6c5fb"]} style={styles.container}>
				<SafeAreaView style={styles.container}>
					<View style={styles.titleBanner}>
						<TitleBanner />
					</View>
					<View style={styles.button}>
						<Button
							title="Submit"
							buttonStyle={{ width: "100%" }}
							loading={loading}
							onPress={() => {
								getCityDetails(place);
							}}
						/>
					</View>
					<View style={styles.textView}>
						{cityValue?.name ? <Text style={[{color:"#fff"}]}>{cityValue?.name}</Text> : <></>}
					</View>
				</SafeAreaView>
			</LinearGradient>
			<BottomSheet
				initialSnap={2}
				ref={sheetRef}
				snapPoints={[`80%`, `12%`, `12%`]}
				borderRadius={20}
				renderContent={renderContent}
			/>
		</>
	);

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 15,
	},
	titleBanner: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 15,
	},
	button: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 15,
	},
	textView: {
		flex: 1,
		fontSize: 20,
		justifyContent: "center",
		alignItems: "center"
	}
});


export default App;