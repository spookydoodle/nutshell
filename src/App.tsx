import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SalesSlideshow } from "./slideshow/sales/sales-slideshow";
import { SolarSlideshow } from "./slideshow/solar/solar-slideshow";
import { NfsSlideshow } from "./slideshow/nfs/nfs-slideshow";
import * as Pages from "./pages";
import nutshellData from "./slideshow/sales/nutshell-data";
import { createStateData } from "./slideshow/solar/solar-data";
import { NEED_FOR_SPEED } from "./slideshow/nfs/data";
import "./App.css";

const salesSlideshow = new SalesSlideshow(nutshellData);
const solarSlideshow = new SolarSlideshow(createStateData());
const nfsSlideshow = new NfsSlideshow(NEED_FOR_SPEED);

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
