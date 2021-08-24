import React from 'react';
import { Button } from '../Button';

import './styles.scss';

interface PledgeOptionProps {
	title: string;
	description: string;
	left?: number;
	price?: number;
	value: string;
	inputRadioChecked: string;
	handleCloseModal: () => void;
	handleShowSuccess: () => void;
	handleInputRadio: (value: string) => void;
}

export function PledgeOption({
	title,
	price,
	description,
	left,
	value,
	inputRadioChecked,
	handleCloseModal,
	handleShowSuccess,
	handleInputRadio,
}: PledgeOptionProps) {
	const handleShowFooter = (event: any) => {
		handleInputRadio(event.target.value);
	};

	const handleContinue = () => {
		handleCloseModal();
		handleShowSuccess();
	};

	return (
		<div
			className={
				'pledge-option ' + (left === 0 ? 'pledge-option--disabled' : '')
			}
		>
			<div className='pledge-option__header'>
				<div className='pledge-option__wrapper'>
					<label htmlFor={`pledge${value}`} className='pledge-option__label'>
						{title}
						<input
							type='radio'
							id={`pledge${value}`}
							name='pledge'
							value={value}
							className='pledge-option__input'
							onChange={handleShowFooter}
						/>
						<span className='pledge-option__checkmark'></span>
					</label>
					{price && (
						<span className='pledge-option__pledge'>
							Pledge ${price} or more
						</span>
					)}
				</div>
				<div className='pledge-option__left'>
					<span>{left}</span>
					{Number.isInteger(left) && <span>left</span>}
				</div>
			</div>
			<p className='pledge-option__description'>{description}</p>

			<div className='pledge-option__left pledge-option__left--mobile'>
				<span>{left}</span>
				{Number.isInteger(left) && <span>left</span>}
			</div>

			{inputRadioChecked === value && (
				<div className='pledge-option__footer'>
					<label>Enter your pledge</label>
					<div>
						<div className='pledge-option__input-price'>
							<span>$</span>
							<input type='text' maxLength={3} />
						</div>
						<Button title='Continue' click={handleContinue} />
					</div>
				</div>
			)}
		</div>
	);
}
