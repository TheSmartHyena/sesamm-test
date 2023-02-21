import { useStore } from "../hooks/useStore"
import { ReducerActionList } from "../reducer/actionList";

export const TokenComponent = () => {
    const [state, dispatch] = useStore();

    const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: ReducerActionList.SET_TOKEN, payload: e.target.value });
    }

    return (
        <>
            <p>Token: </p>
            <input type="text" value={state.token} onChange={handleTokenChange} disabled={state.loadingCities} />
        </>
    )
}