import { useState } from 'react'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'
import { Provider } from 'react-redux'
import {store} from './app/store'

function App() {
  
  return (
    
     <Provider store={store}>
    <App />

      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </Provider>
  )
}

export default App