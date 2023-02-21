import { useStore } from "../hooks/useStore"
import { ReducerActionList } from "../reducer/actionList";

export const SearchButtonComponent = () => {
    const [, dispatch] = useStore();

    const handleTriggerSearch = () => {
        dispatch({ type: ReducerActionList.TRIGGER_SEARCH });
    }

    return (
        <button type="button" onClick={handleTriggerSearch}>Chercher</button>
    )
}