import { useNavigate } from 'react-router';

import * as styles from './Complete.css';

const Complete = () => {
	const navigate = useNavigate();

	const handleSurveyComplete = () => {
		navigate('/', { replace: true });
	};

	return (
		<section className={styles.container}>
			<h2 className={styles.subTitle}>지원이 완료되었습니다!</h2>
			<p className={styles.description}>
				프로그라피 10기에 지원해주셔서 감사합니다. <br />
				서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
			</p>
			<button onClick={handleSurveyComplete} className={styles.button}>
				홈으로 돌아가기
			</button>
		</section>
	);
};

export default Complete;
