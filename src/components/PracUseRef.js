import { useRef, useState } from "react";

function PracUserRef(props) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <>
     <h5 className="mt-5">{props.title}</h5>
            <hr />
      Counter: {count}<br/>
      <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default PracUserRef
