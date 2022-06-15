import React from 'react';
import SideBar from '../../components/side-bar/side-bar';
import { SideBarProvider } from '../../context/side-bar-context';

import data from '../../jsons/side-bar-data.json'

const HomePage = () => {
  return (
    <div>
      {/* <SideBarProvider> */}
        <SideBar data={data}/>
      {/* </SideBarProvider> */}
    </div>
  );
};

export default HomePage;