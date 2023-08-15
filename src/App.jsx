import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration></Registration>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword></ForgotPassword>}></Route>
      </Route>
    )
  );

  return<>

<RouterProvider router={route}></RouterProvider>;
<ToastContainer />
</>  
}

export default App;
