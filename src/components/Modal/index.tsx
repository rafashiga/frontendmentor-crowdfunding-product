import React from 'react';
import { Modal } from '@material-ui/core';

import './styles.scss';

interface ModalProps {
	open: boolean;
	handleClose: () => void;
	children: any;
}

export function ModalComponent({ open, handleClose, children }: ModalProps) {
	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='simple-modal-title'
			aria-describedby='simple-modal-description'
		>
			<div className='modal-card'>{children}</div>
		</Modal>
	);
}
