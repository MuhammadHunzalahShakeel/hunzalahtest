import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import Article from "./components/Article/Article.jsx";
import Category from "./components/Category/Category.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/article" element={<Article/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App