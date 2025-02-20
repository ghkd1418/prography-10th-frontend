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
			<h2 className={styles.subTitle}>개인정보 수집 동의</h2>
			<div className={styles.content}>
				<span className={styles.description}>
					수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내
					<br />
					수집 항목: 이름,이메일, 핸드폰번호, 학교 정보 및 직장 정보
					<br />
					보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기
				</span>
			</div>
			<FormRadio
				name="개인정보수집"
				label="개인정보 수집여부 동의 여부를 체크해주세요."
				options={[
					{ id: 'agree', label: '개인정보 수집여부에 동의합니다.' },
					{ id: 'disagree', label: '개인정보 수집여부에 동의하지 않습니다.' },
				]}
				updateState={updateState}
			/>
			<button onClick={handleNext} className={styles.button}>
				다음
			</button>
		</section>
	);
};

export default PrivacyPolicy;
