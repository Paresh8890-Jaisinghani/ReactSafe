import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Container } from 'react-bootstrap';
import sand2 from './images/sand2.png'
import traffic from './images/traffic.png'
import running from './images/running.png'
import speed from './images/speed.png'
import about5 from './images/about5.png'
import Footer from './footer'
import './stylesheet/about.css'
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect} class=" ">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sand2}
            alt="First slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Reaction Time Test</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={traffic}
            alt="Second slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Rapid Quiz</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={running}
            alt="Third slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Running circle</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={about5}
            alt="Fourth slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Precision Timer Challenge</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={speed}
            alt="Fifth slide"
          />
          <Carousel.Caption className="carousel-caption-custom">
            <h3>Speed Adjustment Challenge</h3>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <hr className='line'></hr>

      <Container className="about-container">
        <h2>Elevating Road Safety Through Assessment</h2>
        <p>
          Welcome to ReactSafe, a purpose-driven application focused on assessing and improving drivers' reaction times while promoting road safety awareness.
        </p>
        <p>
          Our platform provides a straightforward yet powerful solution for evaluating driver performance, assigning scores based on their reaction times, and instilling a culture of safe driving.
        </p>
        <p>
          We strive to meet the needs of our users and continuously improve our website to provide
          a seamless and enjoyable experience.
        </p>
      </Container>


      <hr className='line'></hr>
      <div className='text'>
        {/* First Featurette */}
        <div className="row featurette">
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={sand2} alt="Placeholder: 500x500" />
          </div>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              Reaction Time Test
            </h2>
            <p className="lead">The Reaction Time Test for drivers assesses their ability to swiftly respond to visual or auditory cues, mimicking real driving scenarios. It measures the time taken to react to sudden stimuli, crucial for avoiding accidents. Results inform drivers of their cognitive abilities, aiding in skill enhancement and promoting road safety.</p>
          </div>
        </div>
        <hr className='line'></hr>

        {/* Second Featurette */}
        <div className="row featurette">
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={traffic} alt="Placeholder: 500x500" />
          </div>
          <div className="col-md-7 ">
            <h2 className="featurette-heading fw-normal lh-1">
              Rapid Quiz
            </h2>
            <p className="lead">
              The Rapid Quiz Test on traffic signals evaluates drivers' knowledge and response speed to traffic signals and signs. It presents rapid-fire questions on road regulations, signs, and signals, enhancing drivers' awareness and decision-making skills. Quick answers reinforce traffic rules comprehension, fostering safer driving habits and reducing accidents on the road.</p>
          </div>
        </div>
        <hr className='line'></hr>

        {/* Third Featurette */}
        <div className="row featurette">
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={running} alt="Placeholder: 500x500" />
          </div>
          <div className="col-md-7" >
            <h2 className="featurette-heading fw-normal lh-1">
              Running circle
            </h2>
            <p className="lead">The Running Circle game simulates real-life driving scenarios, challenging drivers to navigate a circular track while avoiding obstacles and maintaining speed. It enhances spatial awareness, reflexes, and control under pressure, promoting safer driving habits. The game's dynamic nature offers practical training for handling unexpected situations on the road, ensuring driver preparedness.</p>
          </div>
        </div>
        <hr className='line'></hr>

        {/* Fourth Featurette */}
        <div className="row featurette">
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={about5} alt="Placeholder: 500x500" />
          </div>
          <div className="col-md-7 ">
            <h2 className="featurette-heading fw-normal lh-1">
              Precision Timer Challenge
            </h2>
            <p className="lead">The Precision Timer Challenge game for drivers demands accuracy and speed in executing movements within strict time limits. By navigating through obstacles with precision, drivers enhance their control and decision-making skills. This simulated practice fosters quick reflexes and improves driving proficiency, promoting safer and more confident driving on the road.</p>
          </div>
        </div>
        <hr className='line'></hr>


        {/* Fifth Featurette */}
        <div className="row featurette">
          <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={speed} alt="Placeholder: 500x500" />
          </div>
          <div className="col-md-7" >
            <h2 className="featurette-heading fw-normal lh-1">
              Speed Adjustment Challenge
            </h2>
            <p className="lead">The Speed Adjustment Challenge tests drivers' ability to adapt speed to changing road conditions swiftly and safely. Negotiating various scenarios, from sudden stops to unexpected obstacles, drivers refine their judgment and response skills. This exercise cultivates attentiveness and fosters responsible driving habits, ensuring better road safety for all.</p>

            <div>
              <br></br>
              <br></br>
            </div>
          </div>
          <div className="button">

            <p>Please Fill in your details here <FaArrowRight /> &nbsp;
              <a href='/contact'>
                <button className='bttn'>
                  Click
                </button>

              </a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
};

export default CarouselComponent;
