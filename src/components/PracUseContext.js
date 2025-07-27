//useContext() => It allows you to share the  value of a variable across the entire component tree without having to pass props down manually at every level. It is used to avoid prop drilling.

//Provider - PracUseContext.js`
//1. import {createContext} from 'react';
//2. export const MyContext = createContext();
//3. <MyContext.Provider value={/* some value */}>...</MyContext.Provider>
//4. const value = useContext(MyContext);

import React, {useState, createContext} from 'react';
import PracUseContextA from './PracUseContextA';

export const userContext = createContext();

function PracUseContext(props){

    const [user, setUser] = useState("Subrat Kumar Barik");

    return (
        <>
          <h5 className="mt-5">{props.title}</h5>
          <hr />
          <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h4>{`Hi ${user}`}</h4>
                    <userContext.Provider value={user}>
                        <PracUseContextA />
                    </userContext.Provider>
                </div>
            </div>
          </div>
        </>
    );
}

export default PracUseContext;