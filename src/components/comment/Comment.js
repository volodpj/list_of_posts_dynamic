import React from 'react';
import styleComment from '../comment/styleComment.module.css'

const Comment = ({comment}) => {
    return (
        <li className={styleComment.commentBox}>
            <div className={styleComment.commentBody}>{comment.body}</div>
            <div className={styleComment.commentAutor}><span>Autor email </span>{comment.email}</div>
        </li>
    )
}

export default Comment