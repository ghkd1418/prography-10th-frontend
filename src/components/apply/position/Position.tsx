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
		<section className="positionWrapper">
			<h1 className="title">직무를 선택해 주세요.</h1>
			<ul className="selectBtns">
				{positionData.map((position) => {
					return <li key={position}>{position}</li>;
				})}
			</ul>
			<button
				onClick={() => {
					next();
					updateState('직무', '프론트엔드');
				}}
			>
				다음
			</button>
		</section>
	);
};

export default Position;
