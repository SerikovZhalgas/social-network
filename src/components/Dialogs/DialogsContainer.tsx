import React from 'react';
import {InitialStateType, sendMessageCreator, updateNewMessageCreator} from "../../Redux/dialogs-reducer";
import {AppStoreType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStatePropsType = {
    messagePage: InitialStateType
}
type MapDispatchPropsType = {
    updateNewMessage: (body:string)=>void
    sendMessage: ()=>void
}
export type  DialogsPagePropsType = MapStatePropsType & MapDispatchPropsType

/*const DialogsContainer = (props: DialogsPropsType) => {
    let state = props.store.getState().messagePage

    const sendMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const updateNewMessage = (body: string) => {
        props.store.dispatch(updateNewMessageCreator(body))
    }

    return <Dialogs
        messagePage={state}
        sendMessage={sendMessage}
        updateNewMessage={updateNewMessage}
    />;
};*/

let mapStateToProps = (state:AppStoreType):MapStatePropsType => {
    return {
        messagePage: state.messagePage
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