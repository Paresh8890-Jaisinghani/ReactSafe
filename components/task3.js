import React from "react";
import './stylesheet/task3.css'

const Task3 = () => {
    return (
        <div className="body">


            <div class="contain">
                <h1 className="he">Precision Timer</h1>

                <div class="instructions">

                    <ul>
                    <li className="instruct">Instructions :</li>
                        <li>The objective of the game is to accurately stop the timer at precisely target time after it starts.</li>
                        <li>Click the "Start Timer" button to begin the timer countdown.</li>
                        <li>Once the timer starts, it will be visible for the initial 5 seconds. After 5 seconds, the timer will hide, and you must count internally to keep track of the time.</li>
                        <li>At exactly target time from when the timer started, click the "Stop Timer" button to stop the timer. Your goal is to stop the timer as close to target time as possible.</li>
                        <li> Your score will be based on how close your stop time is to the target time mark. Aim for precision and accuracy to achieve the highest score possible.</li>


                    </ul>
                </div>
                <div class="button-container">
                    <a href="http://127.0.0.1:5500/index.html"><button class="next-button">Play</button>
                    </a>
                </div>
            </div>
        </div>
    )
}





export default Task3;