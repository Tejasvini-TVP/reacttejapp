import React, { useState } from "react";
import "./style.css";


const useEffect = () => {


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
            </div>
         
        </>
    )
}
export default useEffect;
