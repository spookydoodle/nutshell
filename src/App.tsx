import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Pages from "./pages";
import * as Hooks from "./hooks";
import * as AppState from "./state";

const App: React.FC = () => {
    const [slideshows] = Hooks.useSubjectState(AppState.slideshows$);

    const router = React.useMemo(
        () => createBrowserRouter([
            ...slideshows.map((slideshow) => ({
                path: slideshow.path,
                element: <Pages.NutshellPage slideshow={slideshow} />,
                ErrorBoundary: Pages.ErrorBoundary
            })),
            {
                path: '/',
                element: <Pages.Landing />,
                ErrorBoundary: Pages.ErrorBoundary
            }
        ]),
        [slideshows]
    );

    return (
        <React.StrictMode>
            <RouterProvider router={router} fallbackElement={<Pages.ErrorBoundary />} />
        </React.StrictMode>
    );
}

export default App;
