import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState("");
  const [posts, setPosts] =useState("");
  // user ko get karna hai, get kaise karte hai - axios se request bhejna hai - ek function banayenge and usko call kar denge.
  const getusers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // inital time par run karwane ke liye useEffect hook ka use karenge
  const getPosts = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // console.log(data);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getusers();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className="text-center">Post User App</h1>
        <button className="btn btn-success" onClick={getPosts}>Load Posts</button>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            {posts &&
            posts.map((post) => (
              <div className="card p-3 mt-2" key={post.id}>
                <p>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body}</p>
                
              </div>
            ))}
            </div>
            <div className="col-md-6">
            {users &&
            users.map((user) => (
              <div className="card p-3 mt-2" key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.phone}</p>
              </div>
            ))}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default App;
