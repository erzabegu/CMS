import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { DragAndDrop, FileDetails, FilesList } from "reader/pages";

const Routes = () => {
    const routes = [
        {
            path: '*',
            element: <h1>ska sen</h1>,
        },
        {
            path: '/',
            element: <FilesList />
        },
        {
            path: '/:id',
            element: <FileDetails />
        },
        {
            path: '/dnd',
            element: <DragAndDrop />
        },
    ]
    const routing = useRoutes(routes);
    return <>
        {routing}
        <Outlet />
    </>;
}

export default Routes