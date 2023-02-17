import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = ({ setId, posts, onDelete }) => {
  const navigate = useNavigate();
  const result = posts.map((post) => {
    const postInfo = (id) => {
      setId(id);
      navigate(`/posts/${id}`);
    };
    return (
      <div key={post.id}>
        {console.log(post)}
        <h2>{post.title}</h2>
        <button
          onClick={() => {
            postInfo(post.id);
          }}>
          Подробнее
        </button>
        <button
          onClick={() => {
            onDelete(post.id);
          }}>
          Delete
        </button>
      </div>
    );
  });
  return <div>{result}</div>;
};

export default Main;
