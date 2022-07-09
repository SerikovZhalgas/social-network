import {v1} from "uuid";
import {PropsType} from "../components/Profile/MyPosts/Post/Post";
import {MessageType} from "../components/Dialogs/Message/Message";
import {DialogItemType} from "../components/Dialogs/DialogItem/DialogItem";
import rerenderEntireTree from "../render";

export type StateProps = {
    profilePage: ProfilePageType
    messagePage: MessagePageType
    sidebar: SidebarType
}
export type ProfilePageType = {
    posts: PropsType[]
    newPostText: string
}
export type MessagePageType = {
    messageData: MessageType[]
    dialogsData: DialogItemType[]
}
export type SidebarType = {
    friends: SidebarItemType[]
}
export type SidebarItemType = {
    name: string
    id: string
    avatar: string
}

let state: StateProps = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hi', likesCount: 0},
            {id: v1(), message: 'How are you?', likesCount: 23},
            {id: v1(), message: 'Ya?', likesCount: 120201001},
            {id: v1(), message: 'What?!', likesCount: -1}
        ],
        newPostText: ''
    },
    messagePage: {
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
        ]
    },
    sidebar: {
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
}

export let addPost = () => {
    const newPost: PropsType = {
        id: v1(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);

}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export default state;