

export type PostPropsType = {
    id: string
    message: string
    likesCount: number
}
export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type PhotosType = {
    small: string
    large:string
}
export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website:string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts:ContactsType
    photos: PhotosType
}

export type ProfilePageType = {
    postsData: Array<PostType>
    profile: ProfileType | null
    status: string
}