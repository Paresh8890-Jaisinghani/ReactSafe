import React from "react";
import "./stylesheet/footer.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaInstagramSquare, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="footer ">
			
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
						<p>IIT Hyderabad , India</p>
					</div>
					<div className="Contact">
						<FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
						<h4>+919376491531</h4>
					</div>
					<div className="Mail">
						<FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
						<h4>pareshjaisinghani882@gmail.com</h4>
					</div>
				</div>
				<div className="right">
					<p>Hope you are having a  lovely day</p>
					<p >Created by <span className="color">Paresh</span> || <span className="color">Siddharth</span>|| <span className="color">Lakshya</span></p>

					<div className="social">
						<a className="linkedin cursor-pointer" href=''>
							<FaLinkedin href='' size={25} style={{ color: "white", marginRight: "2rem" }} />
						</a>
						<a className="insta cursor-pointer " href=''>
							<FaInstagram href='' size={25} style={{ color: "white", marginRight: "2rem" }} />
						</a>
						<a className="insta cursor-pointer " href=''>
							<FaGithub href='' size={25} style={{ color: "white", marginRight: "2rem" }} />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;