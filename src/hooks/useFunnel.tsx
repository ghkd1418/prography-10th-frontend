import {
	Children,
	ReactElement,
	ReactNode,
	isValidElement,
	useEffect,
	useState,
} from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router';

export type StepsType = Readonly<[string, ...string[]]>;

interface StepProps<Steps extends StepsType> {
	name: Steps[number];
	onEnter?: () => void;
	children: ReactNode;
}

const Step = <Steps extends StepsType>({
	onEnter,
	children,
}: StepProps<Steps>) => {
	useEffect(() => {
		onEnter?.();
	}, [onEnter]);

	return <>{children}</>;
};

const useFunnel = <Steps extends StepsType>(
	steps: Steps,
	initialStep: Steps[number],
) => {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const { pathname } = useLocation();

	const [step, setStep] = useState<Steps[number]>(
		(searchParams.get('funnel-step') as Steps[number]) ?? initialStep,
	);
	const [state, setState] = useState<Record<string, any>>({});

	useEffect(() => {
		const currentStep = searchParams.get('funnel-step');
		if (!currentStep) {
			setSearchParams({ 'funnel-step': initialStep });
		} else {
			setStep(currentStep as Steps[number]);
		}
	}, [searchParams, initialStep, setSearchParams]);

	const updateState = (key: string, value: any) => {
		setState((prev) => ({ ...prev, [key]: value }));
	};

	const setStepHandler = (newStep: Steps[number]) => {
		navigate(`${pathname}?funnel-step=${newStep}`, { replace: true });
		setStep(newStep);
	};

	const Funnel = ({
		children,
	}: {
		children:
			| ReactElement<StepProps<Steps>>
			| Array<ReactElement<StepProps<Steps>>>;
	}) => {
		const validChildren = Children.toArray(children)
			.filter(isValidElement)
			.filter((child) =>
				steps.includes((child.props as StepProps<Steps>).name),
			) as Array<ReactElement<StepProps<Steps>>>;

		const targetStep = validChildren.find((child) => child.props.name === step);
		if (!targetStep) throw new Error(`${step} 스텝을 찾을 수 없습니다.`);

		return targetStep;
	};

	Funnel.Step = Step;

	return [Funnel, setStepHandler, state, updateState, step] as const;
};

export default useFunnel;
