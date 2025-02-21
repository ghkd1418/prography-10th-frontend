import * as styles from './Error.css';

const NotFound = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>페이지를 찾을 수 없습니다! 😩</h1>
			<button
				className={styles.button}
				onClick={() => (window.location.href = '/')}
			>
				홈으로
			</button>
		</div>
	);
};

export default NotFound;
