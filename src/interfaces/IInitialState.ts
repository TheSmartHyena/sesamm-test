import { City } from "../types/City";
import { Weather } from "../types/Weather";

export interface IInitialState {
    weather: Weather;
    city: string;
    cityList: City[];
    cityIndex: number;
    token: string;
    triggerSearch: number;
    loadingCity: boolean;
    loadingCities: boolean;
    error: any;
}