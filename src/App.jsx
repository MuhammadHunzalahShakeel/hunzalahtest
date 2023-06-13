import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Article from "./components/Article/Article.jsx";
import Category from "./components/Category/Category.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      {/* <Home></Home> */}
      <Article></Article>
      {/* <Category></Category>  */}
      {/* <Footer></Footer>  */}
    </Router>
  )
}

export default App