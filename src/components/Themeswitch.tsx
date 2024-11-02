import { createSignal, onMount } from "solid-js";
import '../themes.css'
const Themeswitch = () => {
    const [isDarkMode, setIsDarkMode] = createSignal(false);

    onMount(() => {
        const savedTheme = localStorage.getItem("theme");
        const isDark = savedTheme === "dark";
        setIsDarkMode(isDark);
        document.body.classList.add(isDark ? "dark-mode" : "light-mode");
    });

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode());
        const theme = isDarkMode() ? "dark" : "light";
        localStorage.setItem("theme", theme);
        document.body.classList.toggle("dark-mode", isDarkMode());
        document.body.classList.toggle("light-mode", !isDarkMode());
    };

    return (
        <button onclick={toggleDarkMode}>
            {isDarkMode() ? "☀️" : "🌓"}
        </button>
    );
};

export default Themeswitch;
