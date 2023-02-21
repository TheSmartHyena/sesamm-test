import { useStore } from "../hooks/useStore";

export const WeatherDisplay = () => {
    const [state] = useStore();

    return (
        <div>
            Température actuelle en degrés celsius: {state.weather.main.temp}
        </div>
    );
}