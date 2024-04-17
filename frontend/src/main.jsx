import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Started from "./pages/Started.jsx";

import { TransactionsProvider } from './context/TransactionContext.jsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/get-started",
        element: <Started />
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <TransactionsProvider>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>,
    </TransactionsProvider>
)

//Primary color - #798068
//Secondary color -#d0fc65
/*
Fonts- Albert Sans



 */