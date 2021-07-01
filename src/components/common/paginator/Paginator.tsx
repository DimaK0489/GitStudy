import React, {useState} from "react";
import style from './Paginator.module.css'

export type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    onPageChanged: (p: number) => void
    currentPage: 10
}

export const Paginator = (props: PaginatorPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    const [portionPages, setPortionPages] = useState<number>(1);
    const leftPortionPageNumber = (portionPages - 1) * props.pageSize + 1;
    const rightPortionPageNumber = portionPages * props.pageSize

    return (
        <div className={style.cursor}>
            {portionPages > 1 && <button onClick={() => setPortionPages(portionPages - 1)}>Prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return <span key={p} className={props.currentPage === p ? style.selectedPage : ''}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            {pagesCount > portionPages && <button onClick={() => setPortionPages(portionPages + 1)}>Next</button>}
        </div>
    )
}


