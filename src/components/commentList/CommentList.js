import React from 'react';
import Comment from '../comment/Comment';
import styleCommentList from '../commentList/styleCommentList.module.css'

const CommentList = ({comments}) => {
    return (
        <ul className={styleCommentList.commentListBox}>
            {comments.map((comment) => {
                return <Comment key={comment.id} comment={comment} />
            })}
        </ul>
    )
}

export default CommentList