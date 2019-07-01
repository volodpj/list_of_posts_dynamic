import React from 'react';
import './App.css';
import posts from './api/posts';
import users from './api/users';
import components from './api/comments';
import PostsList from './components/postList/PostsList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      postsWithUser: []
    }
  }

componentDidMount(){
  this.setState({
    postsWithUser: this.getPostsWidthUser(posts, users, components)
  })
}

getPostsWidthUser(posts, users, comments){
  return posts.map((post) => {
    return {
      ...post,
      user: users.find((user) => {
        return user.id === post.userId
      }),
      comments: comments.filter((comment) => {
        return comment.postId === post.id
      })
    }
  })
}

  render(){
    
    return (
      <div className="App">
        <h1>List of posts</h1>
        <PostsList posts={this.state.postsWithUser} />
      </div>
    );
  }

}

export default App;
