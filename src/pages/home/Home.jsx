// import React from 'react'
import Header from "../../components/header/Header";
import "./home.css";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  return (
      <>
          <Header />
          <div className="home">
              <Posts/>
              <Sidebar/>
          </div>
      </>

  );
}
