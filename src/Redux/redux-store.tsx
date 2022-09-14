import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileReducerAC} from "./profile-reducer";
import dialogsReducer, {DialogsReducerAC} from "./dialogs-reducer";
import sidebarReducer, {SidebarActionsTypes} from "./sidebar-reducer";
import usersReducer, {UsersReducerAC} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagePage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

type ReducersType = typeof rootReducer
export type AppStoreType = ReturnType<ReducersType>
export type AppActionType = ProfileReducerAC
    | DialogsReducerAC
    | SidebarActionsTypes
    | UsersReducerAC
    | AuthActionsType

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

// @ts-ignore
window.store = store;