import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPagePropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsPagePropsType) => {
    const state = props.messagePage

    const dialogsElements =  state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    const messageElements = state.messageData.map(m => <Message id={m.id} message={m.message} myMessage={m.myMessage} avatar={m.avatar}/>)
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.updateNewMessage(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='enter yout message'/></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;