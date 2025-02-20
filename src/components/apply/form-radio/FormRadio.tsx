import { useForm } from 'react-hook-form';

import ResponseField from '../response-field/ResponseField';
import * as styles from './FormRadio.css';

interface FormData {
	agreement: 'agree' | 'disagree';
}

interface FormRadioProps {
	updateState: (key: string, value: string) => void;
}

const responseOptions = [
	{ id: 'agree', label: '개인정보 수집여부에 동의합니다.' },
	{ id: 'disagree', label: '개인정보 수집여부에 동의하지 않습니다.' },
];

const FormRadio = ({ updateState }: FormRadioProps) => {
	const { register } = useForm<FormData>();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateState('개인정보수집', event.target.value);
	};

	return (
		<form className={styles.wrapper}>
			<ResponseField
				label="개인정보 수집여부 동의 여부를 체크해주세요."
				require
			>
				{responseOptions.map((option) => (
					<label
						key={option.id}
						htmlFor={`field-${option.id}`}
						className={styles.label}
					>
						<input
							{...register('agreement', {
								required: '동의 여부를 선택해주세요.',
							})}
							type="radio"
							value={option.id}
							id={`field-${option.id}`}
							className={styles.input}
							name="agreement"
							onChange={handleChange}
						/>
						{option.label}
					</label>
				))}
			</ResponseField>
		</form>
	);
};

export default FormRadio;
