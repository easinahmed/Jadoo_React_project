import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Error404Page from "./pages/error";


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home},
      {path: "*", Component:Error404Page}


    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App