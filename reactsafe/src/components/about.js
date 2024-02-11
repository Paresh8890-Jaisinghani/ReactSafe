import React from 'react';
import './stylesheet/about.css';  // Import the CSS file
import pic from "./images/pic.png";
import pic2 from "./images/pic2.jpg";
import pic3 from "./images/pic3.jpg";
import Footer from './footer';

const AboutUs = () => {

    return (
        <div>
            <div className="header">
                <h1 id="aboutme">About Us</h1>
            </div>
            <div className="content">
                <div className='section'>
                    <p>Greetings! We are students of the 2021 batch at the Indian Institute of Technology Hyderabad. My journey at IIT Hyderabad has not only equipped me with academic prowess but has also ignited my passion for technology. As a web developer, I recently created a personal website to showcase my projects and experiences. This platform reflects my dedication to innovation, collaboration, and the pursuit of excellence fostered by my time at IIT Hyderabad. Excited about the convergence of technology and creativity, I'm eager to contribute and explore new horizons.</p>
                </div>

                <div className="image-text-section">
                    <div className="image-container">
                        <img className="myself" src={pic} alt="my-self" />
                    </div>
                    <div className="text-container">
                        <h2>Paresh Jaisinghani</h2>
                        <p>Hello, I'm Paresh Jaisinghani. I'm currently studying at Indian Institute Of Technology Hyderabad. I'm excited to share my insights and experiences with you. Explore my website to learn more about my Portfolio. Feel free to Connect on Social Media to start a conversation!</p>
                    </div>
                </div>
                <div className="image-text-section" style={{ backgroundColor: "white" }}>
                    <div className="text-container">
                        <h2>Siddharth Yadav</h2>
                        <p>Hello, I'm Siddharth Yadav. I'm currently studying at Indian Institute Of Technology Hyderabad. I'm excited to share my insights and experiences with you. Explore my website to learn more about my Portfolio. Feel free to Connect on Social Media to start a conversation!</p>
                    </div>
                    <div className="image-container">
                        <img className="myself" src={pic2} alt="my-self" />
                    </div>
                </div>
                <div className="image-text-section">
                    <div className="image-container">
                        <img className="myself" src={pic3} alt="my-self" />
                    </div>
                    <div className="text-container">
                        <h2>Lakshya Mukhija</h2>
                        <p>Hello, I'm Lakshya Mukhija. I'm currently studying at Indian Institute Of Technology Hyderabad. I'm excited to share my insights and experiences with you. Explore my website to learn more about my Portfolio. Feel free to Connect on Social Media to start a conversation!</p>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>

        
    );
}

export default AboutUs;
