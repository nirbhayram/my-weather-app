export interface CityMapValue {
    icon: string
    cityName: string
}

export interface City {
    name: string
    dt: number
    current: {
        temperature: number
        icon: string
        main: string
        sunrise: number
        sunset: number
        pop: number
        uv: number
        dewDrops: number
        windSpeed: number
        humidity: number
    }
    hourData: {
        time: number
        icon: string
        temperature: number
    }[]
    dailyData: {
        date: number
        icon: string
        minTemperature: number
        maxTemperature: number
    }[]
}