import React from 'react'
import "./style.css"
const todo = () => {
  return (
    <>
      <div className="main-div">
      <div className="child-div">
        <figure>
            <img src="./images/todo.svg" alt="todologo"/>
            <figcaption>Add Your List Here✌️</figcaption>
        </figure>
        <div className="addItem">
            <input
             type="text"
             placeholder='✍️ Add Item'
             className='form-control'
             />
        </div>
      </div>
      </div>
    </>
  )
}

export default todo
