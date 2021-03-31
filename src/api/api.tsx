import axios from "axios";
import {setAuthUserData} from "../redux/auth-reducer";

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
    getHeader() {
        return instance.get(`auth/me`).then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    setAuthUserData(id, email, login);
                }
            });
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0//follow/${userId}`)
    }
}

// export const getPost = (u: UsersType) => {
//     return instance.post(`/follow/${u.id}`).then(response => {
//         if( response.data.resultCode === 0) {
//             follow(u.id)
//         }else{
//             unfollow(u.id)
//         }
//     })
// }
