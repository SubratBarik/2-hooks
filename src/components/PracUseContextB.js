//Consumer - PracUseContextB.js
//1. import {useContext} from 'react';
//2. const value = useContext(MyContext);
//3. <MyContext.Consumer>{value => /* render something based on the context value */

import React, {useContext} from 'react';
import {userContext} from './PracUseContext';

export default function PracUseContextB() {

    const user = useContext(userContext);

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
        <h4>PracUseContextB</h4>
        <h3>{`Hello ${user}`}</h3>
        </div>
    )
}
