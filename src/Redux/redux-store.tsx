import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileReducerAC} from "./profile-reducer";
import dialogsReducer, {DialogsReducerAC} from "./dialogs-reducer";
import sidebarReducer, {SidebarActionsTypes} from "./sidebar-reducer";
import usersReducer, {UsersReducerAC} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";
import {composeWithDevTools} from "redux-devtools-extension";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type ReducersType = typeof rootReducer
export type AppStoreType = ReturnType<ReducersType>
export type AppActionType = ProfileReducerAC
    | DialogsReducerAC
    | SidebarActionsTypes
    | UsersReducerAC
    | AuthActionsType

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>

export default store

// @ts-ignore
window.store = store;