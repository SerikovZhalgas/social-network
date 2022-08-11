import {v1} from "uuid";
import {ActionsTypes, DialogItemType, MessageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE'

export type InitialStateType = {
    messageData: MessageType[]
    dialogsData: DialogItemType[]
    newMessageBody: string
}

let initialState: InitialStateType = {
    messageData: [
        {
            id: v1(),
            message: 'Hi! Nya Nya!',
            myMessage: false,
            avatar: 'https://png.pngtree.com/png-clipart/20201226/ourlarge/pngtree-red-bow-cat-couple-avatar-png-image_2634265.jpg'
        },
        {
            id: v1(),
            message: 'Pivet, Nya!',
            myMessage: true,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPe1CYBenBgbZwWb48ifu7G4BodcYUy3eAyX1K5a-OnWpWN7XIUDmX2XJIoZmRf3fZSo&usqp=CAU'
        },
        {
            id: v1(),
            message: 'I miss you!',
            myMessage: false,
            avatar: 'https://png.pngtree.com/png-clipart/20201226/ourlarge/pngtree-red-bow-cat-couple-avatar-png-image_2634265.jpg'
        },
        {
            id: v1(),
            message: 'Heeeey :(',
            myMessage: false,
            avatar: 'https://png.pngtree.com/png-clipart/20201226/ourlarge/pngtree-red-bow-cat-couple-avatar-png-image_2634265.jpg'
        },
        {
            id: v1(),
            message: 'I miss you too! :)',
            myMessage: true,
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPe1CYBenBgbZwWb48ifu7G4BodcYUy3eAyX1K5a-OnWpWN7XIUDmX2XJIoZmRf3fZSo&usqp=CAU'
        },
    ],
    dialogsData: [
        {
            id: v1(),
            name: 'Saule',
            avatar: 'https://img.lovepik.com/original_origin_pic/18/08/14/d71f73e125539a27265641dfc4cd85f8.png_wh860.png'
        },
        {
            id: v1(),
            name: 'Zhanat',
            avatar: 'https://png.pngtree.com/png-vector/20191027/ourlarge/pngtree-cute-cat-avatar-with-a-yellow-background-png-image_1873423.jpg'
        },
        {
            id: v1(),
            name: 'Kamila',
            avatar: 'https://png.pngtree.com/png-clipart/20201226/ourlarge/pngtree-red-bow-cat-couple-avatar-png-image_2634265.jpg'
        },
        {
            id: v1(),
            name: 'Zhalgas',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPe1CYBenBgbZwWb48ifu7G4BodcYUy3eAyX1K5a-OnWpWN7XIUDmX2XJIoZmRf3fZSo&usqp=CAU'
        }
    ],
    newMessageBody: ''
}

const dialogsReducer = (state: InitialStateType = initialState, action: DialogsReducerAC): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            const body = state.newMessageBody
            return  {
                ...state,
                newMessageBody:'',
                messageData:[...state.messageData, {
                    id: v1(),
                    message: body,
                    myMessage: true,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAPe1CYBenBgbZwWb48ifu7G4BodcYUy3eAyX1K5a-OnWpWN7XIUDmX2XJIoZmRf3fZSo&usqp=CAU'
                }]
            }
        default:
            return state
    }
}
type DialogsReducerAC = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageCreator>
export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)

export default dialogsReducer