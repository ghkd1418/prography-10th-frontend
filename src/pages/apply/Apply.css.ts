import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const container = style([
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
		gap: '4x',
		padding: '4x',
		textAlign: 'center',
	}),
]);

export const progress = style([
	sprinkles({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),
	{
		gap: '10px',
		marginBottom: '20px',
		selectors: {
			'& > span': {
				width: '30px',
				height: '30px',
				borderRadius: '50%',
				backgroundColor: '#ddd',
				fontWeight: 'bold',
			},
		},
	},
]);

export const progressStep = style([
	sprinkles({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}),
	{
		width: '30px',
		height: '30px',
		borderRadius: '50%',
		backgroundColor: '#ddd',
		fontWeight: 'bold',
	},
]);

export const activeStep = style({
	backgroundColor: '#007bff',
	color: 'white',
});
