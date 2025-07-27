//useEffect() => It is a hook that allows you to perform side effects in function components. It can be used for data fetching, subscriptions, or manually changing the DOM in React components. It runs after every render by default, but you can control when it runs by passing a dependency array.

import React, {useState, useEffect} from "react";

function PracUseEffect(props){

    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        document.title = `Count: ${count}`;
    }) // use ,[] to render it only once

    const countBtn = () => {
        setCount(count+1);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");
        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Event listener added");
        };
    }, []);

    // useEffect(() => {
    //     document.title = `Size: ${width} x ${height}`;
    // }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    useEffect(() => {
        const interValId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return() => {
            clearInterval(interValId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <>
            <h5 className="mt-5">{props.title}</h5>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Count: {count}</h5>
                        <button onClick={countBtn}>SUBMIT</button>
                    </div>
                    <div className="col-md-4">
                        <p>Window Width: {width}</p>
                        <p>Window Height: {height}</p>
                    </div>
                    <div className="col-md-4">
                        <p><strong>Digital Clock</strong></p>
                        <span style={{background: "red", padding: "5px 10px", fontWeight: "bold", fontSize: "20px", color: "white"}}>{formatTime()}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PracUseEffect;
