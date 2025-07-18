import React, {useState, useEffect} from "react";

function PracUseEffect(props){

    const [count, setCount] = useState(0);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [])

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

    return (
        <>
            <h5 className="mb-5">{props.title}</h5>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>Count: {count}</h5>
                        <button onClick={countBtn}>SUBMIT</button>
                    </div>
                    <div className="col-md-6">
                        <p>Window Width: {width}</p>
                        <p>Window Height: {height}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PracUseEffect;
