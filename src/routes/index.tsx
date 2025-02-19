import GlobalLayout from '@/layout/GloabalLayout';
import NotFound from '@/pages/NotFound';
import Home from '@/pages/home/Home';
import { createBrowserRouter } from 'react-router';

export const routers = createBrowserRouter([
	{
		errorElement: <NotFound />,
	},
	{
		path: '/',
		element: (
			<GlobalLayout>
				<Home />
			</GlobalLayout>
		),
	},
	{ path: '/apply', element: <></> },
]);
