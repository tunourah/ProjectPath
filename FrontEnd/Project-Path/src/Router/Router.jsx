import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ErrorPage from "../Pages/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
export default Router;
