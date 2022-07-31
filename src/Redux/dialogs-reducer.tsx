import {v1} from "uuid";
import {ActionsTypes, MessagePageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state:MessagePageType,action:ActionsTypes) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            const body = state.newMessageBody
            state.newMessageBody = ''
            state.messageData.push({
                id: v1(),
                message: body,
                myMessage: true,
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPe1CYBenBgbZwWb48ifu7G4BodcYUy3eAyX1K5a-OnWpWN7XIUDmX2XJIoZmRf3fZSo&usqp=CAU'
            })
            return state
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewCreator = (body:string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY,body:body} as const)

export default dialogsReducer