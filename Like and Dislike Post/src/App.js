import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BsShare } from 'react-icons/bs';

const App = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const handlelike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  const imgurl =
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";
  return (
    <>
      <div className="main-container">
        <h1 className="text-info">POST LIKE APP</h1>
        <h4>Likes Count : {count}</h4>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-header">
            <i
              class="fa fa-user"
              aria-hidden="true"
              style={{ fontSize: "15px" }}
            ></i>{" "}
            UserName
          </div>
          <img
            src={imgurl}
            alt="posts-img"
            height="300px"
            width="100%"
            onDoubleClick={handlelike}
          />

          <div className="card-footer">
            {like ? (
              <AiFillHeart
                size={30}
                style={{ color: "red", cursor:'pointer' }}
                onClick={handlelike}
              />
            ) : (
              <AiOutlineHeart size={36} onClick={handlelike} />
            )}&nbsp;&nbsp;
            
            <BiComment size={30} style={{cursor:'pointer'}}/>
            &nbsp;&nbsp;
            <BsShare size={30} style={{cursor:'pointer'}}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
