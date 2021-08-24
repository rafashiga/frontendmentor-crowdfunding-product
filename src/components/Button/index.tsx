import React from 'react';
import './styles.scss';

interface ButtonProps {
	title: string;
	disabled?: boolean;
	click?: () => void;
}

export function Button({ title, disabled, click }: ButtonProps) {
	return (
		<button
			type='button'
			className='button'
			onClick={click}
			disabled={disabled}
		>
			{title}
		</button>
	);
}
