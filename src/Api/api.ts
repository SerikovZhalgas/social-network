import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        'API-KEY':'1d9bce34-c0e7-4156-809b-69f482b1f466'
    }
})

export const usersAPI = {
    getUsers(currentPage:number = 1,pageSize:number=10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>response.data)
    },
    getProfileInfo (userId:number) {
        return instance.get(`profile/`+ userId)
            .then(response=>response.data)
    },
    getAuthMe () {
        return instance.get(`auth/me`).then(response=>response.data)
    },
    unFollowDelete (userId: string) {
        return instance.delete(`follow/${userId}`).then(response=>response.data)
    },
    followPost (userId: string) {
        return instance.post(`follow/${userId}`).then(response=>response.data)
    }
}