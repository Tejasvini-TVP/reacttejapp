import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>react with Chai and share is important</h1>
    <Login  />
    <profile />
    </UserContextProvider>
  )
}

export default App
