import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from '../Pages/Dashboard';
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ErrorPage from "../Pages/ErrorPage";
import AddIdeas from "../Pages/AddIdeas";  
import Ideas from "../Pages/Ideas";
import DashboardStd from "../Pages/DashboardStd";
import TableProject from "../Pages/Tableproject";  
import TableStd from "../Pages/TableStd";
import TableState from "../Pages/TableState";

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
  {
    path: "/ideas",  
    element: <Ideas />,
  },
  {
    path: "/addideas", 
    element: <AddIdeas />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboardstd",
    element: <DashboardStd />,
  },
  {
    path: "/tableproject",
    element: <TableProject />,
  },
  {
    path: "/tablestd",
    element: <TableStd />,
  }, 
   {
    path: "/tablestate",
    element: <TableState />,
   },
  {
    path: "*", 
    element: <ErrorPage />,
  }
]);

export default Router;
