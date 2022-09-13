import axios from "axios";

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
    getProfileInfo (userId:number) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfileInfo(userId)
    }
}

export const profileAPI = {
    getProfileInfo (userId:number) {
        return instance.get(`profile/`+ userId)
            .then(response=>response.data)
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus (newStatus:string) {
        return instance.put(`profile/status`, {status: newStatus})
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`).then(response=>response.data)
    }
}