const initialState = {
    english: true,
    kurdish: false,
    syrian: false
}

export const changeLanguage = (state = initialState, action) => {
    switch(action.type){
        case "LANGUAGE_ENGLISH":
            return initialState
        case "LANGUAGE_KURDISH":
            return {
                kurdish: true,
                english: false,
                syrian: false
            }
        case "LANGUAGE_SYRIAN":
            return {
                syrian: true,
                english: false,
                kurdish: false
            }
        default:
            return state
    }
}