import FormRadio from '../form-radio/FormRadio';
import * as styles from './Position.css';

interface PositionProps {
	next: () => void;
	updateState: (key: string, value: string) => void;
}

const positionData = [
	'프론트엔드',
	'백엔드',
	'디자인',
	'IOS',
	'안드로이드',
	'Product Owner',
];

const Position = ({ next, updateState }: PositionProps) => {
	return (
		<section className={styles.container}>
			<h2 className={styles.subTitle}>지원 정보</h2>
			<FormRadio
				name="position"
				label="지원하고 싶은 분야를 선택해주세요."
				options={positionData.map((position) => ({
					id: position,
					label: position,
				}))}
				updateState={updateState}
				next={next}
			/>
		</section>
	);
};

export default Position;
