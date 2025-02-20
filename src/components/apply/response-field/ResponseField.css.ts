import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const description = style([
	sprinkles({
		display: 'flex',
	}),
	{
		alignContent: 'center',
	},
]);

export const requireMark = style([
	{
		color: 'red',
	},
]);
