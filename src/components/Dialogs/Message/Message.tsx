import React from 'react';
import s from './../Dialogs.module.css'
import {MessageType} from "../../../Redux/store";

const Message = (props: MessageType) => {

    const message = props.myMessage
        ? <div className={s.messagesMe}><span>{props.message}</span><img className={s.messagesAvatar} src={props.avatar} alt='MyAvatar'/></div>
        : <div className={s.messagesAnother}><img className={s.messagesAvatar} src={props.avatar} alt='AnotherAvatar'/><span>{props.message}</span></div>

    return (
        <div className={s.messages}>
            {message}
        </div>
    )
}

export default Message;