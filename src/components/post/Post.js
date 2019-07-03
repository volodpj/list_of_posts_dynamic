import React from 'react';
import User from '../user/User';
import CommentList from '../commentList/CommentList';
import stylePost from '../post/stylePost.module.css'

class Post extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            shouComments: false
        }

        this.checkComments = (event) => {
            
            this.setState((prevState) => ({
                shouComments: !prevState.shouComments,
                
            }))
        }
    }

    
    
    render() {
        
        return (
            <li className={stylePost.post}>
                <div className={stylePost.postBox}>
                    <div className={stylePost.postBody}>
                        <div className={stylePost.postTitle}>{this.props.post.title}</div>
                        <div>{this.props.post.body}</div>
                    </div>
                    <User className={stylePost.autorBox} user={this.props.post.user}/>
                    <button onClick={this.checkComments} className={stylePost.btn} >Comments</button>
                </div>
                {this.state.shouComments ? (
                    <CommentList className={stylePost.CommentListBox} comments={this.props.post.comments} />
                ) : (
                    ''
                )}
                
            </li>
        )
    }
    
};

export default Post