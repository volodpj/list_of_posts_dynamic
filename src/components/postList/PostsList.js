import React from 'react';
import Post from '../post/Post';
import stylePostList from '../postList/stylePostList.module.css'

class PostsList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            filterPosts: [],
        };
    }

    giveFindText = (event) => {
        const text = event.target.value.toLowerCase();
        const filtersPost = this.props.posts.filter((post) => {
            return post.title.indexOf(text) > -1;
        })
        this.setState({
            filterPosts: filtersPost,
        })   
    }
    
    render() {
        return (
            <div>
                filter by title<input type='text' className={stylePostList.findText}
                    onChange={this.giveFindText}
                ></input> 
                <ul>
                    {this.state.filterPosts.length === 0 ? 
                    this.props.posts.map((post) => {
                        return <Post key={post.id} post={post}/>
                    }) : 
                    this.state.filterPosts.map((post) => {
                        return <Post key={post.id} post={post}/>
                    })}
                </ul>
            </div>
        )
    }
    
};

export default PostsList

                    