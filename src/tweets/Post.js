import React, { Component } from 'react';
class Post extends Component {
  render() {
  return (
    <div className="post">
      <h2 className="post_title">{this.props.post.title}</h2>
  <p className="post_message">{this.props.post.message}</p>
      <img srcSet={this.props.post.foto}/>
        
    </div>
  );
 }
}
export default Post;