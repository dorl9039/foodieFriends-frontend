import { forwardRef } from 'react';
import { styled } from '@mui/system';
import clsx from 'clsx';

const Backdrop = forwardRef((props, ref) => {
	const { open, className, ...other } = props;
	return (
		<div
			className={clsx({ 'MuiBackdrop-open': open }, className)}
			ref={ref}
			{...other}
		/>
	);
});

Backdrop.displayName = 'Backdrop'

const StyledBackdrop = styled(Backdrop)`
	z-index: -1;
	position: fixed;
	inset: 0;
	background-color: rgb(0 0 0 / 0.5);
	-webkit-tap-highlight-color: transparent;
	`;

export default StyledBackdrop;