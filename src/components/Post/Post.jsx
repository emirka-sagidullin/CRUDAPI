import React from 'react';

const Post = ({ id, posts, onUpdate }) => {
  const handleUpdate = () => {
    onUpdate(id);
  }
  const result = posts.map((post) => {
    if (post.id === id) {
      return (
        <div>
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
          <button onClick={handleUpdate}>Edit</button>
        </div>
      );
    }
  });
  return <div>{result}</div>;
};

export default Post;
