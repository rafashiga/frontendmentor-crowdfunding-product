import React from 'react';
import { Button } from '../Button';
import { ModalComponent } from '../Modal';

import successSvg from '../../assets/images/icon-check.svg';
import './styles.scss';

interface SuccessProps {
	isOpen: boolean;
	handleToggleModal: () => void;
}

export function Success({ isOpen, handleToggleModal }: SuccessProps) {
	return (
		<ModalComponent open={isOpen} handleClose={handleToggleModal}>
			<div className='success'>
				<img src={successSvg} alt='check icon' />
				<h3>Thanks for your support!</h3>
				<p>
					Your pledge brings us one step closer to sharing Mastercraft Bamboo
					Monitor Riser worldwide. You will get an email once our campaign is
					completed.
				</p>
				<Button title='Got it' click={handleToggleModal} />
			</div>
		</ModalComponent>
	);
}
