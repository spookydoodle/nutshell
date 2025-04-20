import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SalesSlideshow } from "./slideshow/sales-slideshow";
import { SolarSlideshow } from "./slideshow/solar-slideshow";
import { NfsSlideshow } from "./slideshow/nfs-slideshow";
import * as Pages from "./pages";
import "./App.css";

const salesSlideshow = new SalesSlideshow();
const solarSlideshow = new SolarSlideshow();
const nfsSlideshow = new NfsSlideshow();

const router = createBrowserRouter([
    {
        path: '/dashboard',
        element: <Pages.NutshellDashboard slideshow={salesSlideshow} />,
        ErrorBoundary: Pages.ErrorBoundary
    },
    {
        path: '/solar-system',
        element: <Pages.NutshellSolar slideshow={solarSlideshow} />,
        ErrorBoundary: Pages.ErrorBoundary
    },
    {
        path: '/need-for-nutshell',
        element: <Pages.NutshellNFS slideshow={nfsSlideshow} />,
        ErrorBoundary: Pages.ErrorBoundary
    },
    {
        path: '/',
        element: <Pages.Landing />,
        ErrorBoundary: Pages.ErrorBoundary
    }
]);

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<Pages.ErrorBoundary />} />
    </React.StrictMode>
  );
}

export default App;
