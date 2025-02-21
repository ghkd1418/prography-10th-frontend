import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const container = style([
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
		gap: '4x',
		padding: '4x',
	}),
]);

export const subTitle = style([
	sprinkles({}),
	{
		fontSize: '2rem',
		alignSelf: 'flex-start',
	},
]);

export const content = style([
	sprinkles({
		padding: '2x',
		display: 'flex',
		flexDirection: 'column',
		gap: '1x',
	}),
	{
		border: 'solid #e8eaee',
	},
]);

export const description = style([
	{
		textAlign: 'start',
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
		width: 'min(8%, 50%)',
		alignSelf: 'flex-end',
		fontWeight: 'bold',
		minWidth: 'fit-content',
	},
]);

export const errorMessage = style([
	{
		color: 'red',
	},
]);
