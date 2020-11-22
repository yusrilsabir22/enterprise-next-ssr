import { Screen } from "./types"

export type DefaultState = {
    modal: boolean
}

const defaultState: DefaultState = {
    modal: false
}

const reducers = (state = defaultState, action: any): DefaultState => {
    switch(action.type) {
        case (Screen.MODAL): 
            return {
                ...state,
                modal: action.modal
            }
        default:
            return state
    }
}

export default reducers