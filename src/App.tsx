import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import MultiStepForm from "./components/MultiStepForm";
import RootLayout from "./components/RootLayout";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/fem-multi-step-form" // path="/"
        element={<RootLayout />}
        errorElement={<ErrorBoundary />}
      >
        <Route index element={<Navigate to="/signup" replace={true} />} />
        <Route path="signup" element={<MultiStepForm />} />
        <Route path="*" element={<Navigate to="/signup" replace={true} />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
