import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "bf0875ba-8463-481a-87a8-643832194416"
    }
})

export const usersAPI = {
    getUsers (currentPage: number | string, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    },
    getProfile(userId: number) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0//profile/` + userId)

    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    }
}


