import React, { useState, useEffect } from 'react';
import { MimicLogs } from '../api-mimic';
import styled from 'styled-components';  

export const LiveLog = (props) => {

// const Li = styled.li`
//   margin : 2px;
//   border :1px solid red;
// `;
// const H1 = styled.h1`
//   color:red;
// `;
let start = Date.now()-30000
const [startTs1, setStartTs1] = useState(start);
const [endTs1, setEndTs1] = useState(Date.now());
function formatDate(date) {
  const options = {
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: 'IST' // Change this if you want to use a different time zone
  };

  const dateString = new Date(date).toLocaleDateString('en-US', options);
  // const timeString = new Date(date).toLocaleTimeString('en-US', options);

  return `${dateString}`;
}

  const [logs, setLogs] = useState([]);
  const [selectedRange, setSelectedRange] = useState('5m');
  const [count, setCount] = useState(0);

  const timeStamp1 = (time) =>{
    return new Date(time);
  }
  const fetchLogs = async () => {
    const now = Date.now();
    let startTs, delta;

    switch (selectedRange) {
      case '5m':
        delta = 5 * 60 * 1000; // 5 minutes in milliseconds
        break;
      case '1h':
        delta = 60 * 60 * 1000; // 1 hour in milliseconds
        break;
      case '1d':
        delta = 24 * 60 * 60 * 1000; // 1 day in milliseconds
        break;
      default:
        delta = 5 * 60 * 1000; // Default to last 5 minutes
        break;
    }

    startTs = now;

    const fetchedLogs = await MimicLogs.fetchPreviousLogs({
      startTs,
      endTs: now-delta,
      limit: 200,
    });
    //const liveLogs = await MimicLogs.subscribeToLiveLogs();
    setStartTs1(now-delta);
    setEndTs1(now);
    setLogs(fetchedLogs);
    setSelectedRange(props.duration);
  };

  useEffect(() => {
    // setSelectedRange(props.duration);
    fetchLogs();
    if(count === 200){
      setCount(199);
    }else{
      setCount(count+1);
    }
}, [Date.now()]);
// }, [props.duration]);


//new Date(log.timestamp).toLocaleString()
  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  return (
    <div style={{position: 'relative', padding:'0px 20px 20px 20px', border: '1px solid #CEE0F8', borderRadius: '8px'}}>
      <div style={{ height: '36px', width: '100%', display: 'flex', backgroundColor: '#F0F7FF'}}>
      <p style={{color: '#1C2A42', fontSize:'12px', lineHeight: '16.8px', fontWeight: '500', fontFamily: 'Work Sans', marginTop: '10px', paddingLeft: '1030px'}}>showing logs for {new Date(startTs1).toLocaleString()} -> {new Date(endTs1).toLocaleString()}</p>
      </div>
      <div style ={{background: '#090F17'}}>
      <p style={{color: '#82A0CE', paddingLeft: '580px', fontFamily: 'Fira Code', fontSize: '10px',fontWeight: '450', lineHeight: '14px',textAlign: 'left'}}><img></img> Loading previous {logs.length-count} logs</p>
      <ul>
        {logs.map((log) => (
          <li key={log.timestamp} style={{fontFamily: 'Fira Code', fontSize: '12px', fontWeight: '450', lineHeight: '16.8px', textAlign: 'left', display:'inline-block', margin: '4.5px 8px 4.5px 8px'}}>
            <span style={{display: 'inline', marginRight: '5px', color: '#5E7BAA'}}><svg width="2" height="17" xmlns="http://www.w3.org/2000/svg"><rect width="2" height="17" fill="#60A5FA" /></svg> <b>  </b>{formatDate(new Date(log.timestamp))} [info]  </span>
            <span style={{display: 'inline', color: '#A8C3E8'}}>{log.message}</span>
          </li>
         ))}
      </ul>
      </div>
      <button id="blue-icon" class="blue-icon" onClick={scrollToBottom} style={{cursor:'pointer', position: 'fixed', bottom:'70px', right: '70px', height: '50px', width: '50px', border: 'none', borderRadius: '50%'}}><img src='./pictures.png'></img></button>
    </div>
  );
};