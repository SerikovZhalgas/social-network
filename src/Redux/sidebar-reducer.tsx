import {v1} from "uuid";
import {ActionsTypes, MessagePageType, SidebarType} from "./store";

let initialState = {
    friends: [
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
    ]
}

const sidebarReducer = (state:SidebarType=initialState,action:ActionsTypes) => {

    return state
}

export default sidebarReducer
