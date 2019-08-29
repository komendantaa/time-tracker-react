import React from 'react';

const Modal = ({ isOpen, children }: {isOpen: boolean, children: any, handleClose?: () => void}) => {
	const showHideClassName = isOpen ? "modal display-block" : "modal display-none";
	return(
    <div className={showHideClassName}>
			<section className='modal-main'>
				{ children }
			</section>
		</div>
  )
}

export default Modal;