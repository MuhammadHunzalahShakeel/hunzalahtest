import React from 'react'
import './Home.css';
import Nav from "../Nav/Nav.jsx";
import Category from "../Category/Category.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  return (
    <section id='home'>
      <Nav></Nav>
      <div className="home">
      <div className="home-section">
        <h1>PayPro Knowledge Portal</h1>
        <p>Everything you need to know about starting your own business</p>
        <input type="search" placeholder='Search'/>
      </div>
      </div>
      <Category></Category>
      <Footer></Footer>
    </section>
  )
}

export default Home
