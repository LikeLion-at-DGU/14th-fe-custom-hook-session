import { useEffect, useState } from "react";

export const useOwnHook = () => {
    const [isDark, setIsDark] = useState(
        window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        setIsDark(mediaQuery.matches);
        const handleChange = (e) => setIsDark(e.matches);

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return isDark;
}

export default useOwnHook;