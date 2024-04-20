import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import App from './App.jsx';
import './index.css';
import Started from "./pages/Started.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import {TransactionsProvider} from './context/TransactionContext.jsx';
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
	},
	{
		path: "/get-started",
		element: <Started/>
	}, {
		path: "/dashboard",
		element: <Dashboard/>
	}, {
		path: "/register",
		element: <Register/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<TransactionsProvider>
		<React.StrictMode>
			<RouterProvider router={router}/>
		</React.StrictMode>,
	</TransactionsProvider>
)

//Primary color - #798068
//Secondary color -#d0fc65
/*
Fonts- Albert Sans



 */