import React from 'react';
import Post from '../post/Post'

class PostsList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            findText: '',
            filter
        };

      
    }
    giveFindText = (event) => {
        const text = event.target.value;
        this.setState({
            findText: text
        })
    }
    

    render() {
        console.log(this.state.findText)
        return (
            <div>
                <input type='text' style={{width: '500px', borderRadius: "7px"}} 
                    onChange={this.giveFindText}
                ></input> 
                <ul>
                    {this.props.posts.map((post) => {
                        return <Post key={post.id} post={post}/>
                    })}
                </ul>
            </div>
        )
    }
    
};

export default PostsList