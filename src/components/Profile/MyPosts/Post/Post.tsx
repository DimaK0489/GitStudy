import React from "react";
import s from "./Post.module.css";

function Post(props: {
    likesCount: number;
    message: string; }) {
    return (
        <div className={s.item}>
            <img src="https://skidka02.ru/wp-content/uploads/instagram-avatarka-razmer_31.jpg"/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>

    );
}

export default Post;