import React from "react";
import Footer from "./footer";
import "./stylesheet/task1.css"


const Task1 = () => {
    return (
        <div className="body">


            <div class="contain">
                <h1>Reaction Time</h1>

                <div class="instructions">
                   
                    <ul>
                        <li className="instruct">Instructions :</li>
                        <li>This test measures the time taken for you to press anywhere on the screen when the background color changes.</li>
                        <li>Click anywhere on the <strong>Blue</strong> screen when you are ready for the test.</li>
                        <li>Click again as quickly as possible after the background color changes to <strong>Green</strong>.</li>
                        <li>You will be provided with one <strong>Trial</strong> and <strong>Three</strong> chances for the test.</li>
                        <li>The <strong>Average Time</strong> will be taken as your final score.</li>

                    </ul>
                </div>
                <div class="button-container">
                   <a href="http://127.0.0.1:5501/index.html"><button class="next-button">Play</button>
                   </a>
                </div>
            </div>
        </div>
    )
}


export default Task1;