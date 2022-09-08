import React from 'react';
import {InitialStateType, sendMessageCreator, updateNewMessageCreator} from "../../Redux/dialogs-reducer";
import {AppStoreType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    messagePage: InitialStateType
    isAuth: boolean
}
type MapDispatchPropsType = {
    updateNewMessage: (body:string)=>void
    sendMessage: ()=>void
}
export type  DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state:AppStoreType):MapStatePropsType => {
    return {
        messagePage: state.messagePage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchPropsType => {
    return {
        updateNewMessage: (body:string)=> {
            dispatch(updateNewMessageCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;