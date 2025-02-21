import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import ResponseField from '../response-field/ResponseField';
import * as styles from './Profile.css';

const formSchema = z.object({
	name: z.string().min(2, '이름을 2글자 이상 입력해주세요.'),
	email: z.string().email('유효한 이메일 주소를 입력해주세요.'),
	phone: z
		.string()
		.regex(/^010-\d{4}-\d{4}$/, '휴대폰 번호 형식이 올바르지 않습니다.'),
});

type FormData = z.infer<typeof formSchema>;

const FormInput = ({
	label,
	type,
	placeholder,
	register,
	name,
	error,
}: {
	label: string;
	type: string;
	placeholder: string;
	register: any;
	name: keyof FormData;
	error?: string;
}) => (
	<div className="mb-4">
		<ResponseField label={label} require>
			<input type={type} placeholder={placeholder} {...register(name)} />
			{error && <p className={styles.errorMessage}>{error}</p>}
		</ResponseField>
	</div>
);

interface PrivacyPolicyProps {
	next: () => void;
	updateState: (key: string, value: FormData) => void;
}

const Profile = ({ next, updateState }: PrivacyPolicyProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = (data: FormData) => {
		updateState('profile', data);
		next();
	};

	return (
		<section className={styles.container}>
			<h2 className={styles.subTitle}>기본 정보</h2>
			<p className={styles.description}>연락 가능한 정보를 입력해주세요.</p>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.content}>
				<FormInput
					label="성함을 입력해주세요"
					type="text"
					placeholder=""
					register={register}
					name="name"
					error={errors.name?.message}
				/>
				<FormInput
					label="이메일 주소를 입력해주세요"
					type="email"
					placeholder="예시 : prography@gmail.com"
					register={register}
					name="email"
					error={errors.email?.message}
				/>
				<FormInput
					label="휴대폰 번호를 입력해주세요"
					type="text"
					placeholder="예시 : 010-1234-5678"
					register={register}
					name="phone"
					error={errors.phone?.message}
				/>

				<button className={styles.button} type="submit">
					다음
				</button>
			</form>
		</section>
	);
};

export default Profile;
