import {combineReducers, createStore, EmptyObject, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionsTypes} from "./store";
import usersReducer from "./users-reducer";


let rootReducer = combineReducers({
    profilePage:profileReducer,
    messagePage:dialogsReducer,
    sidebar:sidebarReducer,
    users:usersReducer
})

type ReducersType = typeof rootReducer
export type AppStoreType = ReturnType<ReducersType>

let store = createStore(rootReducer)

export default store