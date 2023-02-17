import React from 'react';

const Post = ({ id, posts }) => {
  const result = posts.map((post) => {
    if (post.id === id) {
      return (
        <div>
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
        </div>
      );
    }
  });
  return <div>{result}</div>;
};

export default Post;
