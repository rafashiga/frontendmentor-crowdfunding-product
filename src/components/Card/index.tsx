import React from 'react';
import './styles.scss';

interface CardProps {
	children: React.ReactNode;
}

export function Card({ children }: CardProps) {
	return <div className='card'>{children}</div>;
}
