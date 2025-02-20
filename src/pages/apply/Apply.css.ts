import { createVar, style } from '@vanilla-extract/css';

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

export const title = style([
	sprinkles({
		fontSize: '3x',
	}),
	{
		fontWeight: 'bold',
	},
]);

export const progress = style([
	sprinkles({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '5x',
	}),
	{},
]);

export const activeColor = createVar();

export const progressStep = style([
	sprinkles({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '2x',
		fontSize: '3x',
	}),
	{
		width: '30px',
		height: '30px',
		borderRadius: '50%',
		backgroundColor: [activeColor],
		color: 'white',
		fontWeight: 'bold',
	},
]);
