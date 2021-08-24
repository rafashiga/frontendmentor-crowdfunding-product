import React, { useState } from 'react';
import {
	Card,
	Button,
	BookmarkBtn,
	BackProject,
	Success,
} from '../../components';
import { Pledge } from '../../components/Pledge';

import logoSvg from '../../assets/images/logo-mastercraft.svg';
import './styles.scss';

function Home() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
	const [inputRadioValue, setInputRadioValue] = useState('');

	const handleToggleModal = () => {
		setIsModalOpen((prevState) => !prevState);
		if (!isModalOpen) setInputRadioValue('');
	};

	const handleInputRadio = (value: string) => {
		setInputRadioValue(value);
	};

	const handleShowSuccess = () =>
		setIsModalSuccessOpen((prevState) => !prevState);

	return (
		<div className='home'>
			<Card>
				<img src={logoSvg} alt='logo mastercraft' className='info__logo' />
				<div className='info'>
					<h1 className='info__title'>Mastercraft Bamboo Monitor Riser</h1>
					<p className='info__subtitle'>
						A beautiful & handcrafted monitor stand to reduce neck and eye
						strain.
					</p>
					<div className='info__action'>
						<Button title='Back this project' click={handleToggleModal} />
						<BookmarkBtn />
					</div>
				</div>
			</Card>

			<Card>
				<div className='results'>
					<div className='results__items'>
						<div className='results__item'>
							<h3>$89,914</h3>
							<p>of $100,000 backed</p>
						</div>
						<div className='results__item'>
							<h3>5,007</h3>
							<p>total backers</p>
						</div>
						<div className='results__item'>
							<h3>56</h3>
							<p>days left</p>
						</div>
					</div>
					<div className='results__bar'></div>
				</div>
			</Card>

			<Card>
				<div className='about'>
					<h3 className='about__title'>About this project</h3>
					<p className='about__description'>
						The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
						platform that elevates your screen to a more comfortable viewing
						height. Placing your monitor at eye level has the potential to
						improve your posture and make you more comfortable while at work,
						helping you stay focused on the task at hand.
					</p>
					<p className='about__description'>
						Featuring artisan craftsmanship, the simplicity of design creates
						extra desk space below your computer to allow notepads, pens, and
						USB sticks to be stored under the stand.
					</p>
				</div>
				<div className='pledges'>
					<Pledge
						title='Bamboo Stand'
						price={25}
						left={101}
						description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and 
  you’ll be added to a special Backer member list."
					/>
					<Pledge
						title='Black Edition Stand'
						price={75}
						left={64}
						description='You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer 
					member list. Shipping is included.'
					/>
					<Pledge
						title='Mahogany Special Edition'
						price={200}
						left={0}
						description='You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added 
						to our Backer member list. Shipping is included.'
					/>
				</div>
			</Card>

			<BackProject
				isModalOpen={isModalOpen}
				handleToggleModal={handleToggleModal}
				handleShowSuccess={handleShowSuccess}
				handleInputRadio={handleInputRadio}
				inputRadioChecked={inputRadioValue}
			/>

			<Success
				isOpen={isModalSuccessOpen}
				handleToggleModal={handleShowSuccess}
			/>
		</div>
	);
}

export default Home;
