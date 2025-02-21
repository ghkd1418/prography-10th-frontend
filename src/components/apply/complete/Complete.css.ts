import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const container = style([
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		gap: '4x',
		padding: '4x',
	}),
]);

export const subTitle = style([
	sprinkles({}),
	{
		fontSize: '2rem',
	},
]);

export const description = style([{}]);

export const button = style([
	sprinkles({
		borderRadius: '2x',
		background: 'primary',
		padding: '1x',
		color: 'white',
		fontSize: '2x',
	}),
	{
		width: 'min(8%, 50%)',
		fontWeight: 'bold',
		minWidth: 'fit-content',
	},
]);
