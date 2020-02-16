const initialState = {
    light: true,
    dark: false
}

export const currentTheme = (state = initialState, action) => {
    switch(action.type){
        case "TOGGLE_LIGHT_MODE":
            return initialState
        case "TOGGLE_DARK_MODE":
            return {light: false, dark: true}
        default:
            return state
    }
}