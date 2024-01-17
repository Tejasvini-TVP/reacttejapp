import React, { useReducer, useState } from "react";
import "./style.css";

const reducer = (state,action) => {
    if (action.type === "INCR") {
         state = state + 1;
    }
    if (state > 0 && action.type === "DECR") {
        state = state - 1;
   }
   return state;
};
 const UseReducer = () => {

 
    const initialData = 10;
    // const [myNum, setMyNum] = React.useState(0)
   
    const [state,dispatch] = useReducer(reducer,initialData);

    return(
        <>
        <div className="center_div">
            <p>{state}</p>
            <div class="button2" onClick={() => dispatch({type:"INCR"})}>
             <span></span> 
             <span></span> 
             <span></span> 
             <span></span> 
        INCR  
            </div>
            
            <div class="button2"  onClick={() => dispatch({type:"DECR"})}>
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
export default UseReducer ;
