import React from 'react';
import { Link } from "react-router-dom";
import SideBar from './components/side-bar/side-bar';

function App() {
  return (
    <div className="App">
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <SideBar />
      </nav>
    </div>
  );
}

export default App;
