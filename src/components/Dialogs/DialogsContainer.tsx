import React from 'react';
import {sendMessageCreator, updateNewMessageCreator} from "../../Redux/dialogs-reducer";
import {ReduxStoreType} from "../../Redux/redux-store";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    store: ReduxStoreType
    //state:MessagePageType
    //dispatch: (action:ActionsTypes)=>void
}

const DialogsContainer = (props: DialogsPropsType) => {
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
};

export default DialogsContainer;