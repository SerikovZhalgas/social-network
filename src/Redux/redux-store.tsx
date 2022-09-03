import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    messagePage:dialogsReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth: authReducer
})

type ReducersType = typeof rootReducer
export type AppStoreType = ReturnType<ReducersType>

let store = createStore(rootReducer)

export default store

// @ts-ignore
window.store = store;