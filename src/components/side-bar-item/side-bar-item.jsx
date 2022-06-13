import React from 'react';
import './side-bar-item.css';
import { Link } from "react-router-dom";

const SideBarItem = (props) => {
    const {
        id,
        path, 
        name, 
        selectedItem, 
        setSelectedItem
    } = props

    return (
        <div className={`side-bar-item ${path === selectedItem ? 'selected-item' : ''}`}>
            {/* <a onClick={() => setSelectedItem(path)}>{name}</a> */}
            <Link to={path}>{name}</Link><br/>
        </div>
    )
}

export default SideBarItem;