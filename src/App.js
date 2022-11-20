import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({ posts: json }))
  }
  render() {
    const { posts } = this.state;
    return (
      <div className="container">
        <div class="jumbotron">
          <br></br>
          <h1 class="my-app-header" >MY INVENTORY APP</h1>
          <br></br>
        </div>
        <div className="jumbotron">
          {posts.map((post) => (
            <div className="card" key={post.id}>
              <div className="card-header">
                Product ID: {post.id}
              </div>
              <div className="card-body">
                <p className="card-text"><h3>Product Description: </h3>{post.body}</p>
              </div>
              <div><a href='#' class="btn btn-primary">Additional product details </a></div>
              <div className="card-footer">{process.env.REACT_APP_TEST_VAR}</div>            
              </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;