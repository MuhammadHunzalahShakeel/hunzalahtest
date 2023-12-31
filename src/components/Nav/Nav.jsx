import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from  "react-router-dom"
import "./Nav.css"
import Logo from "../../assets/Logo.svg"
import Article from "../Article/Article.jsx";
import Home from "../Home/Home.jsx";
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
	const navigate = useNavigate()
	function goToArticle(){
		navigate("/article")
	}
	const navigate2 = useNavigate()
	function goToHome(){
		navigate2("/home")
	}
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
        
	};

	return (
		<navbar>
			<div>
             <img className='Logo' id='Navmenuicon'  src={Logo} ></img>
            </div>
			<nav ref={navRef}>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                    <a onClick={goToHome} href="/home" id="nav">Home</a>
                    <a onClick={goToArticle} href="/article" id="nav">Articles</a>
                    <a href="/#" id="nav">About Us</a>
                    <a href="/#" id="nav-contact">Contact Us</a>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</navbar>
	);
}

export default Navbar;