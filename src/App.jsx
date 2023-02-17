import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Post from './components/Post/Post';
import AddPost from './components/AddPost/AddPost';
import uuid from 'react-uuid';

function App() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState();
  function Id() {
    return uuid();
  }
  async function fetchPosts() {
    setTimeout(async () => {
      const data_posts = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await data_posts.json();
      setPosts(posts);
    }, 1);
  }
  useEffect(() => {
    fetchPosts();
  }, []);
  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setPosts(
            posts.filter((post) => {
              return post.id !== id;
            }),
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onAdd = async (id, title, body) => {
    const data_posts = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((body) => {
        setPosts([...posts, body]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onUpdate = async (id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({name: 'React Hooks PUT Request Example'})
    };
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, requestOptions);
    const data = await response.json();
    console.log(data)
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Main posts={posts} id={id} setId={setId} onDelete={onDelete} />}
        />
        <Route path="/posts/:id" element={<Post id={id} onUpdate={onUpdate} posts={posts} />} />
        <Route
          path="/addPost"
          element={<AddPost onAdd={onAdd} posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
