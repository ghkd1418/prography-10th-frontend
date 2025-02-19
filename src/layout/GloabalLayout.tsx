import { Outlet } from 'react-router';

import * as styles from './GlobalLayout.css';

const GlobalLayout = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
};

export default GlobalLayout;
