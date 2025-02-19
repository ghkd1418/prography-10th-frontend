import { style } from '@vanilla-extract/css';

import { sprinkles } from '@/styles/sprinkles.css';

export const container = style([
	sprinkles({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: { mobile: 'none', desktop: '4x' },
	}),
	{
		minHeight: '100dvh',
		margin: '0 auto',
		backgroundColor: '#f0f0f0',
	},
]);

export const main = style([
	sprinkles({
		background: 'white',
	}),
	{
		flexGrow: 1,
		width: '100%',
	},
]);
