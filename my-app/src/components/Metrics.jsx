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
      const startTs = endTs - delta;
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
