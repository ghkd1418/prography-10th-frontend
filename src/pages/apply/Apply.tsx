import Position from '@/components/apply/position/Position';
import PrivacyPolicy from '@/components/apply/privacy-policy/PrivacyPolicy';
import useFunnel from '@/hooks/useFunnel';

import * as styles from './Apply.css';

const steps = ['privacyPolicy', 'profile', 'position', 'complete'] as const;

const Apply = () => {
	const [Funnel, setStepHandler, state, updateState, step] = useFunnel(
		steps,
		'privacyPolicy',
	);
	console.log('🚀 ~ Apply ~ state:', state, step);

	return (
		<div className={styles.container}>
			<h1>Prography 10기 지원서</h1>

			<Funnel>
				<Funnel.Step name="privacyPolicy">
					<PrivacyPolicy
						next={() => setStepHandler('position')}
						updateState={updateState}
					/>
				</Funnel.Step>
				<Funnel.Step name="position">
					<Position
						next={() => setStepHandler('position')}
						updateState={updateState}
					/>
				</Funnel.Step>
			</Funnel>
		</div>
	);
};
export default Apply;
