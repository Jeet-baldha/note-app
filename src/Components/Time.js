import React,{useState} from "react";

function Time(){

    var [time,setTime] = useState(new Date().toLocaleTimeString());

    function getTime(){
        setTime(new Date().toLocaleTimeString());
    }

   setInterval(getTime,1000);
    return (
        <div>
            <h1>{time}</h1>
            <button type="button" onClick={getTime}>Get Time</button>
        </div>
    );
}

export default Time;