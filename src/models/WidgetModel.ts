import Weather from './WeatherModel';

export default interface Widget {
    title: string;
    id: number;
    weatherInfo: Weather;
}