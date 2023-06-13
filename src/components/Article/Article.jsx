import React from 'react'
import './Article.css';
import ArticleCategory from "../ArticleCategory/ArticleCategory.jsx";
import Footer from "../Footer/Footer.jsx";

const Article = () => {
  return (
    <section id='article'>
    <div className="article">
    <div className="article-section">
      <h1>Articles</h1>
      <input type="search" placeholder='Search'/>
    </div>
    </div>
    <ArticleCategory></ArticleCategory>
    <Footer></Footer>
    </section>
  )
}

export default Article
