import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const wrapper = style([
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
		gap: '1x',
	}),
	{},
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

export const button = style([
	sprinkles({
		borderRadius: '2x',
		background: 'primary',
		padding: '1x',
		color: 'white',
		fontSize: '2x',
	}),
	{
		border: 'solid 1px',
		width: 'min(8%, 50%)',
		alignSelf: 'flex-end',
		fontWeight: 'bold',
		minWidth: 'fit-content',
		cursor: 'pointer',

		':hover': {
			opacity: 0.9,
		},
	},
]);

export const errorMessage = style([
	{
		color: 'red',
	},
]);
