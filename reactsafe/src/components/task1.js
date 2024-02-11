import React from "react";
import Footer from "./footer";
import "./stylesheet/task1.css"


const Task1 = () => {
    return (
        <div className="body">


            <div class="contain">
                <h1>Reaction Time</h1>

                <div class="instructions">
                    <h2>Instructions</h2>
                    <ul>
                        <li>This test measures the time taken for you to press the <strong>Right</strong> key after the background color changes.</li>
                        <li>Click the <strong>Right</strong> key on the green screen when you are ready for the test.</li>
                        <li>Click agian the <strong>Right</strong> key as quickly as possible after the background color changes.</li>
                        <li>You will be provided with <strong>Three</strong> chances for the test.</li>
                        <li>The <strong>Minimum Time</strong> will be taken as your final score.</li>

                    </ul>
                </div>
                <div class="button-container">
                   <a href="#"> <button class="prev-button">Previous</button>
                   </a>
                   <a href="/reaction"><button class="next-button">Next</button>
                   </a>
                </div>
            </div>
        </div>
    )
}


export default Task1;