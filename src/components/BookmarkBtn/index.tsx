import React, { useState } from 'react';

import bookmarkSvg from '../../assets/images/icon-bookmark.svg';
import './styles.scss';

export function BookmarkBtn() {
	const [active, setActive] = useState(false);

	const toggleActive = () => setActive(!active);

	return (
		<button
			type='button'
			onClick={toggleActive}
			className={'bookmark-btn ' + (active ? 'bookmark-btn--active' : '')}
		>
			<img
				src={bookmarkSvg}
				alt='bookmark icon'
				className='bookmark-btn__icon'
			/>
			<span className='bookmark-btn__title'>
				{active ? 'Bookmarked' : 'Bookmark'}
			</span>
		</button>
	);
}
