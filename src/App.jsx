import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Registration from './Pages/Registration';

function App() {

  const route=createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Registration></Registration>}></Route>
  ))

  return (
    <RouterProvider router={route}></RouterProvider>
   
  )
}

export default App
