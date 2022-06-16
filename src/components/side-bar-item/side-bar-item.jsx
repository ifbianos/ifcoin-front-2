import React from 'react';
import './side-bar-item.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SideBarItem = (props) => {
	const {
		id,
		path,
		name,
		selectedItem,
		setSelectedItem,
		icon
	} = props

	return (
		<div className={`side-bar-item ${path === selectedItem ? 'selected-item' : ''}`}>
			{/* <a onClick={() => setSelectedItem(path)}>{name}</a> */}
			<div className='side-bar-item-content'>
				<FontAwesomeIcon className='icon' icon={icon} />
				<Link to={path}>{name}</Link><br/>
				{name == 'Cadastros Pendentes'
				?
					<p className='bad'>28</p>
				:
					null
				}
				{name == 'Eventos'
				?
					<p className='good'>25</p>
				:
					null
				}
			</div>
		</div>
	)
}

export default SideBarItem;