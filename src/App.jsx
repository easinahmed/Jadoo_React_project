import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Error404Page from "./pages/error";
import AuthLayout from "./layout/AuthLayout";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";


const router = createBrowserRouter([
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {path: "login", Component: LogIn},
      {path: "signup", Component: SignUp}
      
      
    ]
  },
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home},
      
      
    ]
  },

  {path: "*", Component:Error404Page}
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App