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
import RootLayout from "./Layout/RootLayout";
import Message from "./Pages/Message";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Registration></Registration>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path="/chatting-app" element={<RootLayout></RootLayout>}>

        <Route path="home" element={<Home></Home>}></Route>
        <Route path="message" element={<Message></Message>}></Route>

        </Route>
      </Route>
    )
  )

  return<>

<RouterProvider router={route}></RouterProvider>
<ToastContainer />
</>  
}

export default App;
