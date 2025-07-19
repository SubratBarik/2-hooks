//useContext() => It allows you to share the  value of a variable across the entire component tree without having to pass props down manually at every level. It is used to avoid prop drilling.

import React from 'react';

function PracUseContext(props){
    return (
        <>
          <h5 className="mt-5">{props.title}</h5>
          <hr />
          <div className="container">
            <div className="row">
                <div className="col-md-12">

                </div>
            </div>
          </div>
        </>
    );
}

export default PracUseContext;