import React, { useState } from "react";

function PracUseState(props) {

    const [name, setName] = useState("Subrat Kumar Barik");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);
    const [count, setCount]= useState(0);

    const updateName = () => {
        setName("Shreya Rani Barik");
    }

    const updateAge = () => {
        setAge(age + 5);
    }

    const updateEmployment = () => {
        setIsEmployed(!isEmployed);
    }

    const incrementCount = ()  => {
        setCount(count + 1);
    }

     const decrementCount = ()  => {
        setCount(count - 1);
    }

    const resetCount = ()  => {
        setCount(0);
    }

    return (
        <>
            <h5 className="mb-5">{props.title}</h5>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-5">
                        <h3>Name: {name}</h3>
                        <button onClick={updateName}>Set Name</button>
                    </div>
                    <div className="col-md-6 mb-5">
                        <h3>Age: {age}</h3>
                        <button onClick={updateAge}>Set Age</button>
                    </div>
                    <div className="col-md-6 mb-5">
                        <h3>Is Employed: {isEmployed ? "Yes" : "No"}</h3>
                        <button onClick={updateEmployment}>Set Employment</button>
                    </div>
                    <div className="col-md-6 mb-5">
                        <h3>Counter: {count}</h3>
                        <button onClick={incrementCount} className="mx-2">Increment</button>
                        <button onClick={decrementCount}>Decrement</button>
                        <button onClick={resetCount} className="mx-2">Reset</button>
                    </div>
                </div>
            </div>            
        </>
    );
}

export default PracUseState;
