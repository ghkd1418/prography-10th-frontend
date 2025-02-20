import { useForm } from 'react-hook-form';

import ResponseField from '../response-field/ResponseField';
import * as styles from './FormRadio.css';

interface FormRadioProps {
	name: string;
	label: string;
	options: { id: string; label: string }[];
	updateState: (key: string, value: string) => void;
}

const FormRadio = ({ name, label, options, updateState }: FormRadioProps) => {
	const { register } = useForm<{ [key: string]: string }>();

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		updateState(name, event.target.value);
	};

	return (
		<form className={styles.wrapper}>
			<ResponseField label={label} require>
				{options.map((option) => (
					<label
						key={option.id}
						htmlFor={`field-${option.id}`}
						className={styles.label}
					>
						<input
							{...register(name, { required: '동의 여부를 선택해주세요.' })}
							type="radio"
							value={option.id}
							id={`field-${option.id}`}
							className={styles.input}
							name={name}
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
