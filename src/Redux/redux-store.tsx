import {combineReducers, createStore, EmptyObject, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionsTypes} from "./store";


let reducers = combineReducers({
    profilePage:profileReducer,
    messagePage:dialogsReducer,
    sidebar:sidebarReducer
})

type ReducersType = typeof reducers
export type AppStoreType = ReturnType<ReducersType>

export type ReduxStoreType = Store<EmptyObject & AppStoreType, ActionsTypes>

let store = createStore(reducers)


export default store