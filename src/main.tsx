import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout/Layout.tsx';
import axios from 'axios';
import { PREFIX } from './helpers/API.ts';
import ErrorPage from './pages/Error/ErrorPage.tsx';

const Menu = lazy(() => import('./pages/Menu/Menu'));
const Cart = lazy(() => import('./pages/Cart/Cart'));
const Product = lazy(() => import('./pages/Product/Product'));

const router = createBrowserRouter([
	{
		path: '/react-vite-ts-shop/',
		element: <Layout />,
		children: [
			{
				path: '/react-vite-ts-shop/',
				element: (
					<Suspense fallback={<>Загрузка...</>}>
						<Menu />
					</Suspense>
				)
			},
			{
				path: '/react-vite-ts-shop/cart',
				element: (
					<Suspense  fallback={<>Загрузка...</>}>
						<Cart />
					</Suspense>)
			},
			{
				path: '/react-vite-ts-shop/product/:id',
				element: (
					<Suspense  fallback={<>Загрузка...</>}>
						<Product />
					</Suspense>),
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return defer ({
						data: new Promise((resolve, reject) => {
							setTimeout(() => {
								axios.get(`${PREFIX}/products/${params.id}`).then(data => resolve(data)).catch(e => reject(e));
							}, 1000);
						})
					});
					
					// return defer ({
					// 	data: await axios.get(`${PREFIX}/products/${params.id}`).then(data => data)
					// });
					
					// await new Promise<void>((resolve) => {
					// 	setTimeout(() => {
					// 		resolve();
					// 	}, 1000);
					// });
					// const { data } = await axios.get(`${PREFIX}/products/${params.id}`);
					// console.log(params.id);
					// return data;
				}
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
