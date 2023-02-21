import { useStore } from "../hooks/useStore"
import { ReducerActionList } from "../reducer/actionList";

export const SearchButtonComponent = () => {
    const [state, dispatch] = useStore();

    const handleTriggerSearch = () => {
        dispatch({ type: ReducerActionList.TRIGGER_SEARCH });
    }

    return (
        <button type="button" onClick={handleTriggerSearch} disabled={state.loadingCity || state.loadingCities || state.city.length === 0}>Chercher</button>
    )
}