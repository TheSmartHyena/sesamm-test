import { useState, useEffect } from 'react';

/**
 *
 * [read the source](https://usehooks-typescript.com/react-hook/use-debounce)
 * @param {any} value
 * @param {number} delay in seconds
 * @returns {any} value
 *
 * To be used with a useEffect
 */
export default function useDebounce(value, delay = 0.5) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay * 1000);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}
