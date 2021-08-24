import React from 'react';
import { ModalComponent } from '../Modal';

import closeSvg from '../../assets/images/icon-close-modal.svg';
import './styles.scss';
import { PledgeOption } from '../PledgeOption';

interface BackProjectProps {
	isModalOpen: boolean;
	inputRadioChecked: string;
	handleToggleModal: () => void;
	handleShowSuccess: () => void;
	handleInputRadio: (value: string) => void;
}

export function BackProject({
	isModalOpen,
	inputRadioChecked,
	handleToggleModal,
	handleShowSuccess,
	handleInputRadio,
}: BackProjectProps) {
	return (
		<ModalComponent open={isModalOpen} handleClose={handleToggleModal}>
			<div className='back-project'>
				<button
					type='button'
					onClick={handleToggleModal}
					className='back-project__close'
				>
					<img src={closeSvg} alt='close' />
				</button>
				<h3 className='back-project__title'>Back this project</h3>

				<p>
					Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
					the world?
				</p>

				<form className='back-project__form'>
					<PledgeOption
						title='Pledge with no reward'
						description='Choose to support us without a reward if you simply believe in our project. As a backer, 
						you will be signed up to receive product updates via email.'
						value='1'
						inputRadioChecked={inputRadioChecked}
						handleCloseModal={handleToggleModal}
						handleShowSuccess={handleShowSuccess}
						handleInputRadio={handleInputRadio}
					/>
					<PledgeOption
						title='Bamboo Stand'
						price={25}
						left={101}
						description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
						you’ll be added to a special Backer member list."
						value='2'
						inputRadioChecked={inputRadioChecked}
						handleCloseModal={handleToggleModal}
						handleShowSuccess={handleShowSuccess}
						handleInputRadio={handleInputRadio}
					/>
					<PledgeOption
						title='Black Edition Stand'
						price={75}
						left={64}
						description='You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
						member list. Shipping is included.'
						value='3'
						inputRadioChecked={inputRadioChecked}
						handleCloseModal={handleToggleModal}
						handleShowSuccess={handleShowSuccess}
						handleInputRadio={handleInputRadio}
					/>
					<PledgeOption
						title='Mahogany Special Edition'
						price={200}
						left={0}
						description='You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
						to our Backer member list. Shipping is included.'
						value='4'
						inputRadioChecked={inputRadioChecked}
						handleCloseModal={handleToggleModal}
						handleShowSuccess={handleShowSuccess}
						handleInputRadio={handleInputRadio}
					/>
				</form>
			</div>
		</ModalComponent>
	);
}
