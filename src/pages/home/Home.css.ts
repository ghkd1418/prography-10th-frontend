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

export const title = style([
	sprinkles({ fontSize: '4x' }),
	{ fontWeight: 900 },
]);

export const name = style([{ fontWeight: '900' }]);

export const logo = style([
	{
		alignSelf: 'center',
	},
]);

export const highlight = style([
	sprinkles({
		color: 'primary',
		fontSize: '3x',
	}),
	{ fontWeight: 'bold' },
]);

export const description = style([
	sprinkles({
		fontSize: '2x',
	}),
]);

export const list = style([
	sprinkles({
		fontSize: '2x',
		display: 'flex',
		flexDirection: 'column',
		gap: '1x',
	}),
]);

export const quote = style([
	sprinkles({ fontSize: '4x', color: 'primary' }),
	{ fontWeight: 'bold', marginBottom: '1rem' },
]);

export const links = style([
	sprinkles({
		fontSize: '2x',
		color: 'primary',
		display: 'flex',
		flexDirection: 'column',
		gap: '1x',
	}),
	{ fontWeight: 'bold' },
]);

export const applyButton = style([
	sprinkles({
		borderRadius: '2x',
		background: 'primary',
		padding: '2x',
		color: 'white',
		fontSize: '3x',
	}),
	{
		border: 'solid 1px',
		width: 'min(25%, 50%)',
		alignSelf: 'center',
		fontWeight: 'bold',
	},
]);
