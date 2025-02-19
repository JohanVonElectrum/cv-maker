import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function currentTheme(): Theme {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useTheme() {
    const [theme, setTheme] = useState<Theme>(currentTheme());

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return [theme, setTheme] as const;
}

export default useTheme;
