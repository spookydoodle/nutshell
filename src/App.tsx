import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Pages from "./pages";
import "./App.css";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: <Pages.NutshellDashboard />,
      ErrorBoundary: Pages.ErrorBoundary
    },
    {
      path: '/solar-system',
      element: <Pages.NutshellSolar />,
      ErrorBoundary: Pages.ErrorBoundary
    },
    {
      path: '/need-for-nutshell',
      element: <Pages.NutshellNFS />,
      ErrorBoundary: Pages.ErrorBoundary
    },
    {
      path: '/',
      element: <Pages.Landing />,
      ErrorBoundary: Pages.ErrorBoundary
    }
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<Pages.ErrorBoundary />} />
    </React.StrictMode>
  );
}

export default App;
