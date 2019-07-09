import React from 'react';
import './App.css';
import PostsList from './components/postList/PostsList'

const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
};

const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
}

const getComments = () => {
  return fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      postsWithUser: [],
      showList: false,
      isLoad: false,
    };

    this.startList = () => {
      this.setState((prevState) => ({
        showList: !prevState.showList,
      }))
    }

  }

async componentDidMount(){
  const posts = await getPosts();
  const users = await getUsers();
  const comments = await getComments();
  const initArray = this.getPostsWidthUser(posts, users, comments)
  this.setState({
    postsWithUser: initArray,
    isLoad: true,
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
          {!this.state.showList ? (
            <button onClick={this.startList}>Load List</button>
          ) : (this.state.isLoad ? (
            <PostsList posts={this.state.postsWithUser} />
            ) : (
            <div>Loadin...</div>
          ))}
      </div>
    );
  }
}

export default App;
