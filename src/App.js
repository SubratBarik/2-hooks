//Hooks: useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback

import PracUseEffect from "./components/PracUseEffect";
import PracUseState from "./components/PracUseState";
import PracUseContext from "./components/PracUseContext";
import PracUseReducer from "./components/PracUseReducer";
import PracUseRef from "./components/PracUseRef";

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-5">
            <PracUseState title="useState Hook"/>
            <PracUseEffect title="useEffect Hook"/>
            <PracUseContext title="useContext Hook"/>
            <PracUseReducer title="useReducer Hook"/>
            <PracUseRef title="useRef Hook"/>
          </div>
        </div>
      </div>      
    </>
  );
}

export default App;
