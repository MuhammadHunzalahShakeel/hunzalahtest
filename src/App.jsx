import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./components/Home/Home.jsx";
import Category from "./components/Category/Category.jsx";


function App() {
  return (
    <Router>
      {/* <Navbar></Navbar> */}
      {/* {/* <Home></Home> */}
      <Category></Category> 
    </Router>
  )
}

export default App