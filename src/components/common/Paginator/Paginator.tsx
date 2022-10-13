import React from "react";
import styles from './Paginator.module.css'

type PaginatorType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: PaginatorType) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, index) => {
                return <span
                    key={index}
                    className={currentPage === p ? styles.selectedPage : ''}
                    onClick={() => {
                        onPageChanged(p)
                    }}
                >{p}</span>
            })}
        </div>
    )
}