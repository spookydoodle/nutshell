import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SalesSlideshow } from "./slideshow/sales/sales-slideshow";
import { SolarSlideshow } from "./slideshow/solar/solar-slideshow";
import { NfsSlideshow } from "./slideshow/nfs/nfs-slideshow";
import nutshellData from "./slideshow/sales/nutshell-data";
import { createStateData } from "./slideshow/solar/solar-data";
import { NEED_FOR_SPEED } from "./slideshow/nfs/data";
import * as Pages from "./pages";
import "./App.css";

const salesSlideshow = new SalesSlideshow(nutshellData, { play: false });
const solarSlideshow = new SolarSlideshow(createStateData(), { play: false });
const nfsSlideshow = new NfsSlideshow(NEED_FOR_SPEED, {
    play: true,
    animationsInitialized: true,
    duration: 30000,
    showTicker: false,
});

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
