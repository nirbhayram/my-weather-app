import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import BottomSheet from 'reanimated-bottom-sheet';
import { LinearGradient } from "expo-linear-gradient";
import { getCityAtmosphereDetails } from "./components/utils/RestUtils";
import { AxiosError } from "axios";
import { City } from "./components/pojo/City";
import BottomSection from './components/bottomSheet/BottomSection';
import MainScreen from './components/MainScreen';

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
		<BottomSection />
	);

	const sheetRef = React.useRef(null);

	return (
		<>
			<LinearGradient colors={["#4064e0", "#b6c5fb"]} style={styles.container}>
				<SafeAreaView style={styles.container}>
					<MainScreen />
				</SafeAreaView>
			</LinearGradient>
			<BottomSheet
				initialSnap={2}
				ref={sheetRef}
				snapPoints={[`75%`, `12%`, `12%`]}
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
	}
});


export default App;