import React, { useState } from 'react';
import RightBox from "./RightBox";
import LeftBox from "./LeftBox";

const App = () => {

    let [feedBack,setfeedBack]=useState([]);
    
    return (
        <>
        <div className="main">
            <LeftBox setfeedBack={setfeedBack}/>
            <RightBox feedBack={feedBack}/>
            </div>
        </>
    )
};
export default App;