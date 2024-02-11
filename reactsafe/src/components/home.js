import React from 'react'
import {Link} from 'react-router-dom'
import sample from './images/video.mp4'
import './stylesheet/home.css'

export default function Home() {
    return (
        <>
           


            <section class="showcase" >
                <div class="video-container">
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/mp4' />
                </video>
                </div>

                <div class="content">
                    <h1>ReactSafe</h1>
                   
                    <Link  to="/about" class="btn">Get Started</Link >
                </div>
            </section>


        </>
    );
}