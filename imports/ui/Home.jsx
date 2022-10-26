import React from "react";
import './../../client/css/home.css';
import { Alert } from "./Alert";

const severity = "success";
const title = "Success";
const info = "This is a success alert — check it out!";

export const Home = () => {
  return (
    <div className="home">
      <Alert severity={severity} title={title} info={info}></Alert>
      <h1>Home</h1>
      
    </div>
  );
};
  
