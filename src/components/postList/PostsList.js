import React from 'react';
import Post from '../post/Post'

const PostsList = ({posts}) => {
    return (
        <div>
            <ul>
                {posts.map((post) => {
                    return <Post key={post.id} post={post}/>
                })}
            </ul>
        </div>
    )
};

export default PostsList