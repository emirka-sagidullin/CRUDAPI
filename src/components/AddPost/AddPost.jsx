import React from 'react';

const AddPost = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.id.value, e.target.title.value, e.target.body.value);
    console.log(e.target.title.value);
    console.log(e.target.body.value);
    console.log(e.target.id.value);
    e.target.title.value = '';
    e.target.body.value = '';
    e.target.id.value = '';
    console.log();
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <h3>Add Post</h3>
      <input type="text" placeholder="Title" name="title" />
      <input type="text" placeholder="Body" name="body" />
      <input type="number" placeholder="Id" name="id" />
      <button onSubmit={handleOnSubmit}>Add</button>
      <hr />
    </form>
  );
};

export default AddPost;
