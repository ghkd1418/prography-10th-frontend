import type { PropsWithChildren } from 'react';

import * as styles from './GlobalLayout.css';

const GlobalLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>{children}</main>
		</div>
	);
};

export default GlobalLayout;
