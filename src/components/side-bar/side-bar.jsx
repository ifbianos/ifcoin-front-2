import React, { useState } from 'react';
import './side-bar.css';
import data from '../../jsons/side-bar-data.json';
import SideBarItem from '../side-bar-item/side-bar-item';

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className='side-bar-container'>
      <div className='side-bar-items'>
      {   
        data.map((item, index) => { 
          return <SideBarItem
            name={item.name}
            key={index} 
            id={item.id}
            path={item.path}
            selectedItem={selectedItem} 
            setSelectedItem={setSelectedItem}
          />
        })
      }
      </div>
    </div>
  );
};

export default SideBar;