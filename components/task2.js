import React from "react";
import './stylesheet/task2.css'

const Task2 = () => {
    return (
        <div className="body">


            <div class="contain">
                <h1>Rapid Quiz</h1>

                <div class="instructions">

                    <ul>
                     
                    <li className="instruct">Instructions :</li>
                        <li>This test measures your knowledge and accuracy in answering traffic-related questions in a limited time.</li>
                        <li>Please insure to answer each and every questions in a given amount of time.</li>
                        <li>Answer each question as quickly as possible without sacrificing accuracy.</li>
                        <li>You have to provide an answer to the current question before progressing to the next one.</li>
                        <li>Your final score will be based on your total correct answers.</li>


                    </ul>
                </div>
                <div class="button-container">
                    <a href="http://127.0.0.1:5502/"><button class="next-button">Play</button>
                    </a>
                </div>
            </div>
        </div>
    )
}



export default Task2;