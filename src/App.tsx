import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
