import React from 'react';
import Post from '../post/Post'

const PostsList = ({posts}) => {
    return (
        <div>
            <input itemType='text' style={{width: '500px', borderRadius: "7px"}}></input> 
            <ul>
                {posts.map((post) => {
                    return <Post key={post.id} post={post}/>
                })}
            </ul>
        </div>
    )
};

export default PostsList