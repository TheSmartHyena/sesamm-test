import { useStore } from "../hooks/useStore";
import { ReducerActionList } from "../reducer/actionList";

export const CityComponent = () => {
    const [state, dispatch] = useStore();

    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ReducerActionList.SET_CITY, payload: e.target.value });
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter'){
            dispatch({ type: ReducerActionList.TRIGGER_SEARCH });
        }
    }

    return (
        <>
            <p>Ville: </p>
            <input type="text" value={state.city} onChange={handleCityChange} onKeyDown={handleKeyPress} disabled={state.token?.length === 0 || state.loadingCities} />
        </>
    )
}