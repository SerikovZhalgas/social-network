import {v1} from "uuid";
import {DialogItemType, MessageType} from "./store";
import {AppActionType} from "./redux-store";

const SEND_MESSAGE = 'SEND_MESSAGE'

export type InitialStateType = {
    messageData: MessageType[]
    dialogsData: DialogItemType[]
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
}

const dialogsReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const body = action.newMessageBody
            return  {
                ...state,
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
export type DialogsReducerAC = ReturnType<typeof sendMessageCreator>
export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)

export default dialogsReducer