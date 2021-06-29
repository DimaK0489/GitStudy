import React from "react";
import s from "./Post.module.css";
import {PostPropsType} from "../../../../redux/Types";

function Post(props: PostPropsType){
    return (
        <div className={s.item}>
            <img src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg" alt={""}/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    )
}

export default Post;