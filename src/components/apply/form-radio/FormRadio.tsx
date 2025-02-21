import { useForm } from 'react-hook-form';

import ResponseField from '../response-field/ResponseField';
import * as styles from './FormRadio.css';

interface FormRadioProps {
	name: string;
	label: string;
	options: { id: string; label: string }[];
	updateState: (key: string, value: string) => void;
	next: () => void;
}

const FormRadio = ({
	name,
	label,
	options,
	updateState,
	next,
}: FormRadioProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<{ [key: string]: string }>();

	const onSubmit = (data: { [key: string]: string }) => {
		updateState(name, data[name]);
		next();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.wrapper}>
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
						/>
						{option.label}
					</label>
				))}
			</ResponseField>
			{errors[name] && (
				<p className={styles.errorMessage}>{errors[name]?.message}</p>
			)}
			<button type="submit" className={styles.button}>
				다음
			</button>
		</form>
	);
};

export default FormRadio;
