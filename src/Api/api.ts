import axios from "axios";
import {ProfilePageType} from "../Redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'b1702c91-124d-4674-be2a-d1ae08948bf9'
    }
})

export const usersAPI = {
    getUsers(currentPage:number = 1,pageSize:number=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
    },
    getAuthMe () {
        return instance.get(`auth/me`).then(response=>response.data)
    },
    unFollowDelete (userId: string) {
        return instance.delete(`follow/${userId}`).then(response=>response.data)
    },
    followPost (userId: string) {
        return instance.post(`follow/${userId}`).then(response=>response.data)
    },
    getProfileInfo (userId:number | null) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfileInfo(userId)
    }
}

export const profileAPI = {
    getProfileInfo (userId:number | null) {
        return instance.get(`profile/`+ userId)
            .then(response=>response.data)
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus (newStatus:string) {
        return instance.put(`profile/status`, {status: newStatus})
    },
    savePhoto (photoFile:File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
    },
    saveProfile (profile: ProfilePageType){
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
    login (email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout () {
        return instance.delete(`auth/login`)
    },
}