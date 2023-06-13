import React from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from "./components/Nav/Nav.jsx";
import Home from "./components/Home/Home.jsx";
import Article from "./components/Article/Article.jsx";
import Category from "./components/Category/Category.jsx";
import Footer from "./components/Footer/Footer.jsx";


function App() {
  return (
    // <Routes>
    //   {/* <Nav></Nav> */}
    //   <Home></Home>
    //   {/* <Article></Article> */}
    //   {/* <Category></Category>  */}
    //   {/* <Footer></Footer>  */}
    // </Routes>
    <Routes>
      <Route path='/article' element={<Article/>}/>
    </Routes>
  )
}

export default App