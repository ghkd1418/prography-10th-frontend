import { ReactNode } from 'react';

import * as styles from './ResponseField.css';

interface ResponseFieldProps {
	children: ReactNode;
	label: string;
	require?: boolean;
}

const ResponseField = ({ children, label, require }: ResponseFieldProps) => {
	return (
		<>
			<div className={styles.description}>
				<p>{label}</p>
				{require && <span className={styles.requireMark}>*</span>}
			</div>
			{children}
		</>
	);
};

export default ResponseField;
