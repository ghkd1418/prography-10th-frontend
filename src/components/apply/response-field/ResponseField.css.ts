import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const description = style([
	sprinkles({
		display: 'flex',
	}),
	{
		alignContent: 'center',
		fontWeight: 600,
		marginBottom: '0.5rem',
	},
]);

export const requireMark = style([
	{
		color: 'red',
	},
]);
