import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Error404Page from "./pages/error";
import AuthLayout from "./layout/AuthLayout";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import PublicRoute from "./route/PublicRoute";
import ProtectedRoute from "./route/ProtectedRoute";
import Destination from "./pages/Destination";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Booking from "./pages/Booking";
import ProfilePage from "./pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/auth",
    Component: () => (
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>
    ),
    children: [
      { path: "login", Component: LogIn },
      { path: "signup", Component: SignUp }
    ]
  },
  {
    path: "/",
    Component: () => (
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, Component: Home },
      { path: "/desitnations", Component: Destination },
      { path: "/hotels", Component: Hotels },
      { path: "/flights", Component: Flights },
      { path: "/bookings", Component: Booking },
      { path: "/profile", Component:ProfilePage  },
    ]
  },
  { path: "*", Component: Error404Page }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
