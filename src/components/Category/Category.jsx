import React from 'react'
import './Category.css';
import catvector1 from "../../assets/catvector1.svg"
import catvector2 from "../../assets/catvector2.svg"
import catvector3 from "../../assets/catvector3.svg"
import catvector4 from "../../assets/catvector4.svg"
import catvector5 from "../../assets/catvector5.svg"
import catvector6 from "../../assets/catvector6.svg"
import catvector7 from "../../assets/catvector7.svg"
import catvector8 from "../../assets/catvector8.svg"
import catvector9 from "../../assets/catvector9.svg"
import catvector10 from "../../assets/catvector10.svg"
import catvector11 from "../../assets/catvector11.svg"
import catvector12 from "../../assets/catvector12.svg"
import catvector13 from "../../assets/catvector13.svg"

const Category = () => {
  return (
    <section className="category-section">
      <div className="category-heading">
        <h1>Categories</h1>
      </div>
    <div className="category-container">
        <div className="category-column">
          <div className="category-box">
            <img src={catvector1} alt="" />
            <h2>Business Modeling and Operations Documentation</h2>
            <p className="category-para">Articles 4</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector2} alt="" />
            <h2>Financial Literacy</h2>
            <p className="category-para">Articles 1</p>
            <p className="category-date">25 Oct 2021</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector3} alt="" />
            <h2>SECP Structures of Ownership</h2>
            <p className="category-para">Articles 9</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector4} alt="" />
            <h2>Revenue Scaling</h2>
            <p className="category-para">Articles 2</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector5} alt="" />
            <h2>Woman-Led Initiatives</h2>
            <p className="category-para">Articles 1</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector6} alt="" />
            <h2>Marketing</h2>
            <p className="category-para">Articles 11</p>
            <p className="category-date">25 Oct 2021</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector7} alt="" />
            <h2>Payment Processing and Collection</h2>
            <p className="category-para">Articles 3</p>
            <p className="category-date">25 Oct 2021</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector8} alt="" />
            <h2>Pre-requisites For Business & Trademark</h2>
            <p className="category-para">Articles 2</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector9} alt="" />
            <h2>Business Bank Account</h2>
            <p className="category-para">Articles 1</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector10} alt="" />
            <h2>Success Factors To Sustain Initiatives</h2>
            <p className="category-para">Articles 1</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector11} alt="" />
            <h2>Drafting Raw Financial Statements</h2>
            <p className="category-para">Articles 1</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector12} alt="" />
            <h2>Analyzing Working Capital Requirements</h2>
            <p className="category-para">Articles 1</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
        <div className="category-column">
          <div className="category-box">
            <img src={catvector13} alt="" />
            <h2>Smart Financing and Appropriate Banking Products</h2>
            <p className="category-para">Starts at</p>
            <p className="category-date">12 Jan 2022</p>
          </div>
        </div>
      </div>
    
    </section>
  )
}

export default Category
