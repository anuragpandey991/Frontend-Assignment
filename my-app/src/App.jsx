import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';
import { Log } from './components/Log';
import ParentMetrics from './components/ParentMetrics';
function App() {
  const [selectedValue, setSelectedValue] = useState("5m"); 
  const [isLive, setIsLive] = useState(false)
  
  // Check if the boolean value is true, then scroll to bottom


  const handleDurationChange = (value) => {
    setSelectedValue(value);
  };
  const handleClick = ()=>{
    setIsLive(true);
  }

  return (
    <div style={{backgroundColor: '#F0F7FF'}}>
      <Navbar onDurationChange={handleDurationChange} OnClick = {handleClick}/>
      <Main duration= {selectedValue} live = {isLive}/>
      {/* <ParentMetrics duration = {selectedValue}/> */}
      {/* <Log duration = {selectedValue}/> */}
    </div>
  );
}

export default App;
