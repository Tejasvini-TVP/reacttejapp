import React, { useState } from "react";
import "./style.css";


const UseState = () => {
    const initialData = 10;
    const [myNum, setMyNum] = React.useState(0)
   
    return(
        <>
        <div className="center_div">
            <p>{myNum}</p>
            <div class="button2" onClick={() => setMyNum(myNum + 1)}>
             <span></span> 
             <span></span> 
             <span></span> 
             <span></span> 
             
        INCR  
            </div>
            
            <div class="button2"  onClick={() => setMyNum(myNum - 1)}>
              {/* onClick={() => (myNum > 0 ? setMyNum(myNum -1): setMyNum(0))}   ) 0 a stop */}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                DECR
            </div>
            </div>
         
        </>
    )
}
export default UseState;
