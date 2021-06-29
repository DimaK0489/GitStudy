import axios from "axios";
import {ProfileType} from "../redux/Types";

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
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)

    },
    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}
export const profileAPI = {
    getProfile(userId: number) {
        return instance.get("profile/" + userId)
    },
    getStatus(userId: number) {
        return instance.get("profile/status/" + userId)
    },
    updateStatus(status: string) {
        return instance.put("profile/status", {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance.put("profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put(`profile`, profile);
    }

}

export const authAPI = {
    me () {
        return instance.get("auth/me")
    },
    login(email: string, password: string, rememberMe= false) {
        return instance.post("auth/login", {email, password, rememberMe})
    },
    logOut() {
        return instance.delete("auth/login")
    }
}


