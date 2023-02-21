import { useStore } from "../hooks/useStore"

export const ErrorComponent = () => {
    const [state] = useStore();

    return (
        <p>
            {state.error.message}
        </p>
    )
}