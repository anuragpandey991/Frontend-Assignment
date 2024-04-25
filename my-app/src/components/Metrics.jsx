import React, { useState, useEffect } from 'react';
import { MimicMetrics } from '../api-mimic.js';
import Chart1 from './Chart.jsx';

function calculateDelta(input) {
  if (input === "5m") {
    return 5 * 60 * 1000;
  } else if (input === "1h") {
    return 60 * 60 * 1000;
  } else if (input === "1d") {
    return 24 * 60 * 60 * 1000;
  } else {
    // Handle invalid input
    return null;
  }
}

const Metrics = ({ metricType, duration }) => {
  const [data, setData] = useState(null);
  const [selectduration, setSelectDuration] = useState(duration);

  const fetchData = async (startTs, endTs) => {
    try {
      const metrics = await MimicMetrics.fetchMetrics({ startTs, endTs });
      setData(metrics); // Set the entire metrics array
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    let delta = calculateDelta(selectduration);
    //console.log(delta);
    const fetchDataAndSetData = async () => {
      const endTs = new Date().getTime();
      const startTs = endTs - delta; // Last 5 minutes
      await fetchData(startTs, endTs);
    };
    
    fetchDataAndSetData();
    setSelectDuration(duration);
  }, [Date.now()]);
  // console.log(data);
  return (
    <div style={{display: 'inline-block'}}>
      {data && data.length > 0 && (
        <Chart1 data={data} metricType={metricType} />
      )}
    </div>
  );
};

export default Metrics;











// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { MimicMetrics } from '../api-mimic.js';

// import Chart from 'chart.js/auto';
// import { CategoryScale } from 'chart.js'; 
// Chart.register(CategoryScale);


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


// const Metrics = ({ metricType, duration }) => {
//   const [data, setData] = useState(null);
//   const [selectduration, setselectDuration] = useState(duration);

//   const fetchData = async (startTs, endTs) => {
//     try {
//       const metrics = await MimicMetrics.fetchMetrics({ startTs, endTs });
//       setData(metrics); // Set the entire metrics array
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };



//   useEffect(() => {
//     let delta = calculateDelta(selectduration);
//     console.log(delta);
//     const fetchDataAndSetData = async () => {
//       const endTs = new Date().getTime();
//       const startTs = endTs - delta; // Last 5 minutes
//       await fetchData(startTs, endTs);
//     };
    
//     fetchDataAndSetData();
//     setselectDuration(duration);
//   }, [Date.now()]);
//   return (
//     <div>
//       {data && data.length > 0 && data.filter(item => item.name === metricType).map((graph, index) => (
//         <div key={index}> {/* Add a key to each graph container */}
//           <Line
//             data={{
//               labels: graph.graphLines[0].values.map(point => new Date(point.timestamp).toLocaleTimeString()),
//               datasets: graph.graphLines.map(line => ({
//                 label: line.name,
//                 data: line.values.map(point => point.value),
//                 // borderColor: '#' + ((Math.random() * 0xFFFFFF) << 0).toString(16), // Random color for each line
//                 fill: false,
//               })),
//             }}
//             options={{
//               responsive: true,
//               maintainAspectRatio: false,
//             }}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Metrics;




















// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { MimicMetrics } from '../api-mimic'; // Assuming api-mimic.js is in the same directory

// import Chart from 'chart.js/auto';
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);

// const CpuChartUsage = () => {
//   const [chartData, setChartData] = useState(null);
//   const [selectedRange, setSelectedRange] = useState('last5mins');

//   const fetchData = async () => {
//     const now = Date.now();
//     let startTs, delta;
    
//     if (selectedRange === 'last5mins') {
//       delta = 5 * 60 * 1000;
//     } else if (selectedRange === 'last1hour') {
//       delta = 60 * 60 * 1000;
//     } else if (selectedRange === 'last24hours') {
//       delta = 24 * 60 * 60 * 1000;
//     }
    
//     startTs = now - delta;

//     const endTs = now;
//     const { data } = await MimicMetrics.fetchMetrics({ startTs, endTs });
//     console.log(data); // Log the fetched data
//     // const cpuData = data[0].graphLines.map(line => ({
//     //   name: line.name,
//     //   values: line.values.map(({ timestamp, value }) => ({ x: timestamp, y: value }))
//     // }));

//     // setChartData(cpuData);
//   };

//   useEffect(() => {
//     fetchData();
//   }, [selectedRange]);

//   const handleRangeChange = (e) => {
//     setSelectedRange(e.target.value);
//   };

//   return (
//     <div>
//       <h2>CPU Usage</h2>
//       <div>
//         <select value={selectedRange} onChange={handleRangeChange}>
//           <option value="last5mins">Last 5 mins</option>
//           <option value="last1hour">Last 1 hour</option>
//           <option value="last24hours">Last 24 hours</option>
//         </select>
//       </div>
//       {chartData && (
//         <Line
//           data={{
//             datasets: chartData.map((line, index) => ({
//               label: line.name,
//               data: line.values,
//               borderColor: `rgba(${index * 100}, 0, 0, 1)`, // Just for different colors
//               fill: false,
//             })),
//           }}
//           options={{
//             scales: {
//               xAxes: [{
//                 type: 'time',
//                 time: {
//                   unit: 'minute' // Adjust this based on the selected range
//                 }
//               }],
//               yAxes: [{
//                 ticks: {
//                   beginAtZero: true,
//                 },
//               }],
//             },
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default CpuChartUsage;


// import React, { useState, useEffect } from 'react';
// import { Line } from 'react-chartjs-2';
// import { MimicMetrics } from '../api-mimic.js';

// import Chart from 'chart.js/auto';
// import {CategoryScale} from 'chart.js'; 
// Chart.register(CategoryScale);

// const CpuChartUsage = () => {
//   const [data, setData] = useState(null);

//   const fetchData = async (startTs, endTs) => {
//     try {
//       const metrics = await MimicMetrics.fetchMetrics({ startTs, endTs });
//       setData(metrics[0]);
//       // setData(data[0]);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  
//   console.log(data)
//   useEffect(() => {
//     const fetchDataAndSetData = async () => {
//       const endTs = new Date().getTime();
//       const startTs = endTs - 5 * 60 * 1000; // Last 5 minutes
//       await fetchData(startTs, endTs);
//     };
    
//     fetchDataAndSetData();
//   }, []);
//   return (
//     <div>
//       {data && data.length > 0 && data.graphLines && data.graphLines.length > 0 && (
//         <Line
//           data={{
//             labels: data.graphLines[0].values.map((point) => new Date(point.timestamp).toLocaleTimeString()),
//             datasets: data.map((graph) => ({
//               label: graph.name,
//               data: graph.graphLines.find((line) => line.name === 'Used').values.map((point) => point.value),
//               borderColor: '#' + ((Math.random() * 0xFFFFFF) << 0).toString(16), // Random color for each line
//               fill: false,
//             })),
//           }}
//           options={{
//             responsive: true,
//             maintainAspectRatio: false,
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default CpuChartUsage;