import React, { useState, useEffect } from "react";
import logo from "./images/instameter.png";
import {Link} from 'react-router-dom'
//import image1 from "./images/rrr.jpg";
import style from "../styles/style.css";
const Postview = () => {
  const [userdetails, setuserdetails] = useState([]);

  useEffect(() => {
    fetch("https://instaclone-backend-wq4r.onrender.com/")
      .then((res) => {
        return res.json();
      })
      .then((userList) => {
        console.log(userList);
        setuserdetails(userList);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <span>
            <img src={logo} alt="logo" className="logo-img" />
          </span>
          <span className="logo-title">Insta meter</span>
        </div>
        <div className="nav-icon">
          <Link to="/Addpost"><i className="fa-solid fa-camera fa-3x"></i></Link>
        </div>
      </div>
      
      {userdetails.map((result, i) => {
        return (
          <div key={i}>
            <main className="card-container">
              <div className="card">
                <div className="top">
                  <div className="user">
                    <h3>{result.author}</h3>
                    <h5>{result.location}</h5>
                  </div>
                  <div className="user">
                    <i className="fa-solid fa-ellipsis fa-2x"></i>
                  </div>
                </div>
                <div>
                  <img
                    src={result.image}
                    alt="img1"
                    className="user-image"
                  />
                </div>
                <div className="bottom1">
                  <div>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-paper-plane"></i>
                  </div>
                  <h4>{result.date}</h4>
                </div>
                <div>
                  <h5>{result.likes} likes</h5>
                </div>
                <div>
                  <h3>{result.description}</h3>
                </div>
              </div>
            </main>
          </div>
        );
      })}
    </div>
  );
};

export default Postview;
