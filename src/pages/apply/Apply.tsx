import { assignInlineVars } from '@vanilla-extract/dynamic';

import Complete from '@/components/apply/complete/Complete';
import Position from '@/components/apply/position/Position';
import PrivacyPolicy from '@/components/apply/privacy-policy/PrivacyPolicy';
import Profile from '@/components/apply/profile/Profile';

import useFunnel from '@/hooks/useFunnel';

import { objectToFormData } from '@/shared/utils/objectToFormData';

import * as styles from './Apply.css';

const steps = ['privacyPolicy', 'profile', 'position', 'complete'] as const;

const Apply = () => {
	const [Funnel, setStepHandler, state, updateState, step] = useFunnel(
		steps,
		'privacyPolicy',
	);

	const handlepostApi = () => {
		const formData = objectToFormData(state);
		// http POST
	};

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Prography 10기 지원서</h1>
			<div className={styles.progress}>
				{steps.map((currentStep, index) => {
					const isActive = step === currentStep;

					return (
						<div key={currentStep}>
							<p
								style={assignInlineVars({
									[styles.activeColor]: isActive ? '#1774e9' : '#ddd',
								})}
								className={styles.progressStep}
							>
								{index + 1}
							</p>
						</div>
					);
				})}
			</div>
			<Funnel>
				<Funnel.Step name="privacyPolicy">
					<PrivacyPolicy
						next={() => setStepHandler('profile')}
						updateState={updateState}
					/>
				</Funnel.Step>
				<Funnel.Step name="profile">
					<Profile
						next={() => setStepHandler('position')}
						updateState={updateState}
					/>
				</Funnel.Step>
				<Funnel.Step name="position">
					<Position
						next={() => setStepHandler('complete')}
						updateState={updateState}
					/>
				</Funnel.Step>
				<Funnel.Step name="complete" onEnter={handlepostApi}>
					<Complete />
				</Funnel.Step>
			</Funnel>
		</div>
	);
};
export default Apply;
