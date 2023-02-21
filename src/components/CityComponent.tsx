import { useStore } from "../hooks/useStore";
import { ReducerActionList } from "../reducer/actionList";

export const CityComponent = () => {
    const [state, dispatch] = useStore();

    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ReducerActionList.SET_CITY, payload: e.target.value });
    }

    return (
        <>
            <p>Ville: </p>
            <input type="text" value={state.city} onChange={handleCityChange} disabled={state.token?.length === 0 || state.loadingCities} />
        </>
    )
}