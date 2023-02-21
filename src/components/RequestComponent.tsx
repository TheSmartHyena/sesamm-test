import { useEffect } from "react";
import axios from 'axios'

import { useStore } from "../hooks/useStore";
import { City } from "../types/City";
import { Weather } from "../types/Weather";
import { ReducerActionList } from "../reducer/actionList";

type GetCityResponse = {
    data: City[];
  };
  
  type GetWeatherResponse = {
    data: Weather
  };

export const RequestComponent = () => {
    const [state, dispatch] = useStore();

    useEffect(() => {
        if (state.city.length > 0 && state.token.length > 0) {
          axios.get<GetCityResponse>(`http://api.openweathermap.org/geo/1.0/direct?q=${state.city}&limit=10&appid=${state.token}`)
          .then(res => {
            dispatch({ type: ReducerActionList.SET_CITY_LIST, payload: res.data });
          })
          .catch(err => {
            dispatch({ type: ReducerActionList.SET_ERROR, payload: err });
          })
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [state.triggerSearch]);
    
      useEffect(() => {
        if (state.cityIndex > -1) {
          axios.get<GetWeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?lat=${state.cityList[state.cityIndex].lat}&lon=${state.cityList[state.cityIndex].lon}&appid=${state.token}&units=metric`)
          .then(res => {
            dispatch({ type: ReducerActionList.SET_WEATHER, payload: res.data });
          })
          .catch(err => {
            dispatch({ type: ReducerActionList.SET_ERROR, payload: err });
          })
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [state.cityIndex])

    return <></>
}