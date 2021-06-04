import React from "react";
import style from './Paginator.module.css'

export type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    onPageChanged: (p: number) => void
    currentPage: any
}

export const Paginator = (props: PaginatorPropsType) => {
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div className={style.cursor}>
                {pages.map(p => {
                    // @ts-ignore
                    return <span className={props.currentPage === p && style.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            </div>
        )
}


