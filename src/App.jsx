import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
// import Destination from "./pages/Destination";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home},
      { path: "/destination", Component: Destination },
      


    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App