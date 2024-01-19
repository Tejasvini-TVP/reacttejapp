import React,{ useState } from 'react'
import "./style.css"
const Todo = () => {
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState([]);

    // add the items function

    const addItem = () => {
        if (!inputdata) {
       alert("plz fill the data");
        }else{
            const myNewInputData = {
                id: new Date().getTime().toString(),
                name: inputdata,
            }
            setItems([...items, myNewInputData ])
            setInputData("")
        }
    }
    // how to delete item section
    const deleteItem = (index) => {
        const updateItem = items.filter((curElem) => {
            return curElem.id !== index;
        }) 
        setItems(updateItem)
    }
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
             value={inputdata }
             onChange={(event) => setInputData(event.target.value)}
             />
             <i className='fa fa-plus add-btn' onClick={addItem}></i>  
        </div>

        {/* show our items */}
        <div className='showItems'>
            {items.map((curElem) => {
                return(
            <div className='eachItem' key={curElem.id}>
                <h3>{curElem.name}</h3>
                <div className='todo-btn'>
                <i className="fa fa-plus add-btn"></i>  
                <i className="fa fa-plus add-btn"onClick={() => deleteItem(curElem.id)}></i>  

                </div>
            </div>
                )
            })}
        </div>
                 {/* Remove all button */}
        <div className='showItems'>
            <button className="btn effect04" data-sm-link-text="Remove All"onClick={removeall}>
                <span>CHECK LIST</span>
            </button>

        </div>
      </div>
    
      </div>
    </>
  )
}

export default Todo
