import { ADD_STATUS } from "../constants/statusgame.constatn"

export const initialState = {
    rpsGame: "",
    rpsStatusgame: "",
    female_assasin: "",
    iamfastest: "",
    zombieoutbreak: "",
    supermario: "", 
    alienkiller: "",
    warships: "",
    dragonsmagic: "",
    thesims: "", 
}


export const statusGameReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case ADD_STATUS:
            return {
                ...state,
                    ...state = action.payload
            }
        default:
            return state
    }
}