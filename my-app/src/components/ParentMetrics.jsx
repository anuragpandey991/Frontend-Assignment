import React, { useState } from 'react';
import Metrics from './Metrics';


// function calculateDelta(input) {
//   if (input === "5m") {
//     return 5 * 60 * 1000;
//   } else if (input === "1h") {
//     return 60 * 60 * 1000;
//   } else if (input === "1d") {
//     return 24 * 60 * 60 * 1000;
//   } else {
//     // Handle invalid input
//     return null;
//   }
// }

function ParentMetrics(props) {
  // const [delta, setDelta] = useState("30000");
  // setDelta(calculateDelta(props.duration));
  // let startTs = Date.now();
  // let endTs = startTs-delta;
  return (
    <div style={{margin: '5px 10px 5px 10px', border: '1px solid #CEE0F8', borderRadius: '8px'}}>
    <div style={{padding: '16px 20px 16px 20px', height: '65px', width: '100%', display: 'flex', border: '1px solid #CEE0F8', backgroundColor: '#FFF', borderRadius: '8px'}}>
      <h2 style={{fontWeight: '700', size: '24px', lineHeight: '30px', font: 'Lab Grotesque'}}>Metrics</h2>
      <p style={{color: '#1C2A42', fontSize:'12px', lineHeight: '15px', fontWeight: '500', fontFamily: 'Work Sans', marginTop: '10px', paddingLeft: '5px'}}>some text here</p>
    </div>
    <div style={{display: 'inline-block', border: '1px solid #CEE0F8', borderRadius: '8px', padding: '16px 20px 16px 20px'}}>
      <Metrics metricType="CPU Usage" duration={props.duration} />
      <Metrics metricType="Memory Usage" duration={props.duration} />
      <Metrics metricType="Network Usage" duration={props.duration} />
      <Metrics metricType="Disk IOPS" duration={props.duration} /> 
    </div>
    </div>
  );
}

export default ParentMetrics;

  