import FormRadio from '../form-radio/FormRadio';
import * as styles from './PrivacyPolicy.css';

interface PrivacyPolicyProps {
	next: () => void;
	updateState: (key: string, value: string) => void;
}

const PrivacyPolicy = ({ next, updateState }: PrivacyPolicyProps) => {
	const handleNext = () => {
		next();
	};

	return (
		<section className={styles.container}>
			<h1 className={styles.title}>개인정보 수집 동의</h1>
			<div className={styles.content}>
				<span className={styles.description}>
					수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내
					<br />
					수집 항목: 이름,이메일, 핸드폰번호, 학교 정보 및 직장 정보
					<br />
					보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기
				</span>
			</div>
			<FormRadio updateState={updateState} />
			<button onClick={handleNext} className={styles.button}>
				다음
			</button>
		</section>
	);
};

export default PrivacyPolicy;
