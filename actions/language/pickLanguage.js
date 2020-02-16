const chooseLang = lang => {
    if(lang === "english"){
        return "LANGUAGE_ENGLISH"
    }else if(lang === "kurdish"){
        return "LANGUAGE_KURDISH"
    }else if(lang === "syrian"){
        return "LANGUAGE_SYRIAN"
    }
}

export const pickLanguage = lang => {
    return {
        type: chooseLang(lang)
    }
}