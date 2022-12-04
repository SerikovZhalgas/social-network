import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPagePropsType} from "./DialogsContainer";
import AddMessageForm, {DialogFormDataType} from "./AddMessageForm/AddMessageForm";

export const Dialogs = (props: DialogsPagePropsType) => {
    const state = props.messagePage

    const dialogsElements =  state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    const messageElements = state.messageData.map(m => <Message id={m.id} message={m.message} myMessage={m.myMessage} avatar={m.avatar}/>)

    const addNewMessage = (formData: DialogFormDataType) => {
        props.sendMessage(formData.newMessageBody)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};