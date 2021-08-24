import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logoSvg from '../../assets/images/logo.svg';
import hamburgerSvg from '../../assets/images/icon-hamburger.svg';
import closeSvg from '../../assets/images/icon-close-menu.svg';
import background from '../../assets/images/image-hero-desktop.jpg';
import backgroundMobile from '../../assets/images/image-hero-mobile.jpg';
import './styles.scss';

export function Navbar() {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const handleToggleMenu = () => {
		setIsOpenMenu(!isOpenMenu);
	};

	return (
		<>
			{isOpenMenu && <div className='background-dark' />}

			<nav className='navbar'>
				<div className='navbar__logo'>
					<Link to='/' className='navbar__title' aria-label='crowdfund'>
						<img src={logoSvg} alt='crowdfund' />
					</Link>
					<button
						type='button'
						className='navbar__menu'
						aria-label='menu close'
						onClick={handleToggleMenu}
					>
						{isOpenMenu ? (
							<img src={closeSvg} alt='close icon' />
						) : (
							<img src={hamburgerSvg} alt='hamburger icon' />
						)}
					</button>
				</div>
				<ul
					className={
						'navbar__list ' +
						(isOpenMenu ? 'navbar__list--open' : 'navbar__list--close')
					}
				>
					<li className='navbar__item'>
						<Link to='#'>About</Link>
					</li>
					<li className='navbar__item'>
						<Link to='#'>Discover</Link>
					</li>
					<li className='navbar__item'>
						<Link to='#'>Get Started</Link>
					</li>
				</ul>
			</nav>
			<img
				src={background}
				alt='background'
				className='background background--desktop'
			/>
			<img
				src={backgroundMobile}
				alt='background'
				className='background background--mobile'
			/>
		</>
	);
}
