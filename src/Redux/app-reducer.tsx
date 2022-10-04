import {AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export type AppReducerActionsType = ReturnType<typeof initializedSuccess>
export const initializedSuccess = () =>
    ({type: SET_INITIALIZED} as const)

export const initializeApp = ()
    : AppThunk => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())
        Promise.all([promise]).then(()=>{
            dispatch(initializedSuccess())
        })
    }
}