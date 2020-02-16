export const toggleTheme = flag => {
    return {
        type: flag === "light" ? "TOGGLE_LIGHT_MODE":"TOGGLE_DARK_MODE"
    }
}