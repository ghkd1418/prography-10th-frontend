import GlobalLayout from '@/layout/GloabalLayout';
import NotFound from '@/pages/NotFound';
import Apply from '@/pages/apply/Apply';
import Home from '@/pages/home/Home';
import { createBrowserRouter } from 'react-router';

export const routers = createBrowserRouter([
	{
		path: '/',
		errorElement: <NotFound />,
		element: <GlobalLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{ path: '/apply', element: <Apply /> },
		],
	},
]);
