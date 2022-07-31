import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, MessagePageType} from "../../Redux/state";
import {sendMessageCreator, updateNewCreator} from "../../Redux/dialogs-reducer";

type DialogsPropsType = {
    state:MessagePageType
    dispatch: (action:ActionsTypes)=>void
}

const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements =  props.state.dialogsData.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)
    const messageElements = props.state.messageData.map(m => <Message id={m.id} message={m.message} myMessage={m.myMessage} avatar={m.avatar}/>)
    const newMessageBody = props.state.newMessageBody

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.target.value
        props.dispatch(updateNewCreator(body))
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