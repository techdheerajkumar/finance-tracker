import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import './App.css'
import LoginPage from './assets/pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Expense Tracker</h1>
      <LoginPage />
    </>
  )
}

export default App
