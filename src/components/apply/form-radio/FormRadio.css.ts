import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const wrapper = style([
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
		gap: '1x',
	}),
	{
		marginBottom: '0.5rem',
	},
]);

export const label = style([
	sprinkles({
		display: 'flex',
		alignItems: 'center',
		padding: '1x',
	}),
	{
		cursor: 'pointer',
		border: '1px solid #ccc',
		borderRadius: '0.5rem',

		':hover': {
			backgroundColor: '#ebebeb',
		},
	},
]);

export const input = style([
	sprinkles({}),
	{
		fontSize: '2x',
	},
]);
