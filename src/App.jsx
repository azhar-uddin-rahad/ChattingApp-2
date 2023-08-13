import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Registration from './Pages/Registration';

function App() {
  const [count, setCount] = useState(0);
  const route=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Registration></Registration>}></Route>
  ))

  return (
   
  )
}

export default App
