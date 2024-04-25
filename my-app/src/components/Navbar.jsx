import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import Dropdown from './Dropdown';

function Navbar({onDurationChange, OnClick}) {
  const [isActive, setIsActive] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [selectedValue, setSelectedValue] = useState("5m"); // State to store the selected value
  const [isLive, setIsLive] = useState(false);


  const handleDurationChange = (value) => {
    setSelectedValue(value);
    onDurationChange(value);
  };

  function handleClick(){
    setIsLive(true);
    OnClick(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <div className={`${styles.title}`}>
            <img src='./pictures/logo.png' className={`${styles.logo}`} />
            <a href='#'><h4>truefoundry</h4></a>
          </div>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li className={`${hover1 ? styles.hover : styles.none}`} onMouseOver={() => { setHover1(true) }} onMouseLeave={() => { setHover1(false) }}>
              <img src='./pictures/logo.png' className={`${styles.logo}`} />
              <Link to='https://frontend-assignment-5kb8.vercel.app/metrics' className={`${styles.navLink}`}>Metrics</Link>
            </li>
            <li className={`${hover2 ? styles.hover : styles.none}`} onMouseOver={() => { setHover2(true) }} onMouseLeave={() => { setHover2(false) }}>
              <img src='./pictures/logo.png' className={`${styles.logo}`} />
              <Link to='https://frontend-assignment-5kb8.vercel.app/logs' className={`${styles.navLink}`}>Logs</Link>
            </li>
          </ul>
          <div className={`${styles.dropdown}`}><Dropdown onDurationChange={handleDurationChange} /></div>
          <div id='btn' className={`${styles.button}`}><button id='btn' onClick={handleClick}>subscribe to live logs</button></div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
