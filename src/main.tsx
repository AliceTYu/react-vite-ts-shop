import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu from './components/pages/Menu/Menu.tsx';
import Cart from './components/pages/Cart/Cart.tsx';
import Error from './components/pages/Error/Error.tsx';
import Layout from './components/layout/Layout/Layout.tsx';

const router = createBrowserRouter([
	{
		path: '/react-vite-ts-shop/',
		element: <Layout/>,
		children: [
			{
				path: '/react-vite-ts-shop/',
		    	element: <Menu/>
			},
			{
				path: '/react-vite-ts-shop/cart',
		    	element: <Cart/>
			}
		]
	},
	{
		path: '*',
		element: <Error/>
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);
