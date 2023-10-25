import React from 'react';
import './Footer.css';
// import {FaIcons}from 'react-icons/fa';
import 'font-awesome/css/font-awesome.css';
import logo2 from "../assets/logo2.png"
import {Link} from "react-router-dom";
const Footer = () => {
 return (
    <footer className="footer">
     <div className="container">
		<div className="row">
            <div className="footer-col">
                <h1 className="log">
                <img className="img"src={logo2} alt="LOGO2"/>
                </h1>
            </div>
			<div className="footer-col">
				<h4>Company</h4>
				<ul>
					<li><Link to="/About">About Us</Link></li>
					<li><a href="#">Our Services</a></li>
					<li><a href="#">Privacy Policy</a></li>
					<li><a href="#">Affiliate Program</a></li>

				</ul>
			</div>

			<div className="footer-col">
				<h4>Get Help</h4>
				<ul>
					<li><a href="#">FAQ</a></li>
					<li><a href="#">Shipping</a></li>
					<li><a href="#">Returns</a></li>
					<li><a href="#">Order Status</a></li>
					<li><a href="#">Payment Options</a></li>


				</ul>
			</div>
			<div className="footer-col">
				<h4>Online Shop</h4>
				<ul>
					<li><a href="#">Bag</a></li>
					<li><a href="#">Dress</a></li>
					<li><a href="#">Watch</a></li>
					<li><a href="#">Shoes</a></li>


				</ul>
			</div>
			<div className="footer-col">
				<h4>Follow US</h4>
				<div className="social-links">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-instagram"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>


				</div>
			</div>
		</div>
	</div>
    </footer>
 );
};

export default Footer;
