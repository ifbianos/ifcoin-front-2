import React, { useState } from 'react';
import './side-bar.css'
import data from '../../jsons/side-bar-data.json'
import SideBarItem from '../side-bar-item/side-bar-item';

import { faAngleLeft, faAnglesDown, faAnglesLeft, faAnglesRight, faAnglesUp, faBars, faCalendar, faCentSign, faCommentDollar, faCommentsDollar, faFrancSign, faHouse, faListCheck, faRectangleList, faUser, faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const getIcon = ( type ) => {
	switch (type) {
		case 'Início':
			return faHouse;
		case 'Eventos':
			return faCalendar;
		case 'Cadastros Pendentes':
			return faListCheck;
		case 'Carteira':
			return faWallet;
		case 'Meu Perfil':
			return faUser;

	}
}

const SideBar = () => {
	const [selectedItem, setSelectedItem] = useState(0);
	const [openModal, setOpenModal] = useState(true)
	return (
		<>
			<div className={`side-bar-container	top`}>
					<div className='side-bar-items'>
						<div className='side-bar-top'>
							<div className='logo'>
								<FontAwesomeIcon id='logo' icon={faFrancSign} />
								<FontAwesomeIcon id='logo' icon={faCentSign} />
							</div>
							<FontAwesomeIcon onClick={() => setOpenModal(!openModal)} id='close' icon={ openModal ? faAnglesUp : faAnglesDown} />
						</div>
					</div>
				<div className={`side-bar-container ${openModal ? 'slide-in' : 'slide-out'}`}>
					{
						data.map((item, index) => {
							return <SideBarItem
								name={item.name}
								key={index}
								id={item.id}
								path={item.path}
								icon={getIcon(item.name)}
								selectedItem={selectedItem}
								setSelectedItem={setSelectedItem}
							/>
						})
					}
				</div>
			</div>
		</>
	)
}

export default SideBar;