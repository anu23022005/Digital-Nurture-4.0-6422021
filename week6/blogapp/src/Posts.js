import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
    };
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data.slice(0, 5) }); // showing first 5 posts
      })
      .catch((err) => {
        console.error('Error loading posts:', err);
        this.setState({ hasError: true });
      });
  }

  componentDidCatch(error, info) {
    alert('Something went wrong: ' + error);
    console.error("Error caught in componentDidCatch: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2 style={{ color: 'red' }}>Unable to load posts.</h2>;
    }

    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Blog Posts</h2>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
