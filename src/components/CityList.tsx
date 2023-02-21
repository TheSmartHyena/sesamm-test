import { useStore } from "../hooks/useStore"
import { ReducerActionList } from "../reducer/actionList";
import { City } from "../types/City";

export const CityList = () => {
    const [state, dispatch] = useStore();

    const handleCityIndexChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch({ type: ReducerActionList.SET_CITY_INDEX, payload: e.target.value });
    }

    console.log('Poney A', state);

    return (
        <select value={state.cityIndex} onChange={handleCityIndexChange} disabled={state.token?.length === 0 || state.loadingCities || state.loadingCity}>
            <option value="-1">Choisir une ville</option>

            {state.cityList.map((item: City, index: number) => {
              return <option key={index} value={index}>{`${item.name} ${item.country} ${item.state}`}</option>
            })}
          </select>
    )
}