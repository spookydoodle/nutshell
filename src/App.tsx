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
        ErrorBoundary: () => <Pages.ErrorBoundary slideshow={salesSlideshow} />
    },
    {
        path: '/solar-system',
        element: <Pages.NutshellSolar slideshow={solarSlideshow} />,
        ErrorBoundary: () => <Pages.ErrorBoundary slideshow={solarSlideshow} />
    },
    {
        path: '/need-for-nutshell',
        element: <Pages.NutshellNFS slideshow={nfsSlideshow} />,
        ErrorBoundary: () => <Pages.ErrorBoundary slideshow={nfsSlideshow} />
    },
    {
        path: '/',
        // TODO: Fix - this prop not needed - use default theme
        element: <Pages.Landing slideshow={salesSlideshow} />,
        ErrorBoundary: () => <Pages.ErrorBoundary slideshow={salesSlideshow} />
    }
]);

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<Pages.ErrorBoundary slideshow={salesSlideshow} />} />
    </React.StrictMode>
  );
}

export default App;
