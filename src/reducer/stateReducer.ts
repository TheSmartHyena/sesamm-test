import { IInitialState } from "../interfaces/IInitialState";
import { IReducerAction } from "../interfaces/ReducerAction";
import { ReducerActionList } from "./actionList";

export const initialState = {
    weather: {
        main: {
            temp: 0,
            feels_like: 0,
            temp_min: 0,
            temp_max: 0,
            pressure: 0,
            humidity: 0,
            }
    },
    city: '',
    cityList: [],
    cityIndex: -1,
    token: '',
    triggerSearch: 0,   
    loadingCity: false,
    loadingCities: false,
    error: null,
}

export const reducer = (state : IInitialState = initialState, action: IReducerAction) => {
    const { type, payload } = action;

    if (type === ReducerActionList.SET_TOKEN) {
        return {
            ...state,
            token: payload,
          };
    }

    if (type === ReducerActionList.SET_CITY) {
        return {
            ...state,
            city: payload,
          };
    }

    if (type === ReducerActionList.SET_CITY_INDEX) {
        return {
            ...state,
            loadingCity: true,
            cityIndex: payload,
          };
    }

    if (type === ReducerActionList.SET_CITY_LIST) {
        return {
            ...state,
            cityList: payload,
            loadingCities: false,
          };
    }

    if (type === ReducerActionList.TRIGGER_SEARCH) {
        return {
            ...state,
            loadingCities: true,
            triggerSearch: state.triggerSearch + 1,
            cityList: [],
            cityIndex: -1,
            weather: {
                main: {
                    temp: 0,
                    feels_like: 0,
                    temp_min: 0,
                    temp_max: 0,
                    pressure: 0,
                    humidity: 0,
                    }
            },
          };
    }

    if (type === ReducerActionList.SET_WEATHER) {
        return {
            ...state,
            weather: payload,
            loadingCity: false
          };
    }

    if (type === ReducerActionList.SET_ERROR) {
        return {
            ...state,
            error: payload,
            loadingCity: false,
            loadingCities: false,
          };
    }

    return state;
}