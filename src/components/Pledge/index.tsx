import React from 'react';
import { Button } from '../Button';

import './styles.scss';

interface PledgeProps {
	title: string;
	price: number;
	left: number;
	description: string;
}

export function Pledge({ title, price, left, description }: PledgeProps) {
	return (
		<div className={'pledge ' + (!left ? 'pledge--disabled' : '')}>
			<div className='pledge__header'>
				<h3 className='pledge__title'>{title}</h3>
				<span className='pledge__price'>Pledge ${price} or more</span>
			</div>
			<div className='pledge__body'>
				<p className='pledge__description'>{description}</p>
			</div>
			<div className='pledge__footer'>
				<div className='pledge__left'>
					<span>{left}</span>
					<span>left</span>
				</div>
				<Button
					title={left ? 'Select Reward' : 'Out of Stock'}
					disabled={left ? false : true}
				/>
			</div>
		</div>
	);
}
