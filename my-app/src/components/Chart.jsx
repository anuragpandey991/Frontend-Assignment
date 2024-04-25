import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js'; 
Chart.register(CategoryScale);

const Chart1 = ({ data, metricType }) => {
  // document.getElementById('.btn').style.display = 'hidden';
  return (
    <div style={{ width: '649px', height: '340px', backgroundColor: '#FFF', gap: '13px', borderRadius: '8px 0px 0px 0px', border: '1px 0px 0px 0px', opacity: '0px', margin: '10px 10px 10px 10px'}}>
      {data
        .filter(item => item.name === metricType)
        .map((graph, index) => (
          <div key={index}> {/* Add a key to each graph container */}
            <Line
              data={{
                labels: graph.graphLines[0].values.map((point) => {
                  var currentDate = new Date(point.timestamp);
                  var hours = currentDate.getHours();
                  var minutes = currentDate.getMinutes();
                  hours = hours < 10 ? "0" + hours : hours;
                  minutes = minutes < 10 ? "0" + minutes : minutes;
                  return hours + ":" + minutes;
                }),
                datasets: graph.graphLines.map((line, index) => ({
                  label: line.name,
                  data: line.values.map(point => point.value),
                  borderColor: index === 0 ? '#059669' : (index === 1 ? '#2563EB' : '#DC2626'),
                  backgroundColor: index === 0 ? 'rgba(5, 150, 105)' : (index === 1 ? 'rgba(37, 99, 235)' : 'rgba(220, 38, 38)'),
                })),
              }}
              options={{
                plugins: {
                  title: {
                    display: true,
                    text: metricType, // Display metric type label on the top left
                    position: 'top', // Set the position to top-left
                    align: 'start',
                    font: {weight: '600'},
                  },
                  legend:{
                    labels:{
                      boxWidth: 10,
                      boxHeight: 10,
                      color: '#010202',
                      font:{
                        size: 10,
                        weight: 'bold',
                      },
                      padding: 17,
                    },
                    position: 'bottom',
                    align: 'start',
                  },
                },
                type: 'box',
                layout: {
                  padding: {
                    top: 20, // Adjust top padding to accommodate the title
                    left: 20,
                  }
                },
              }}
            />
          </div>
        ))}
    </div>
  );
};

export default Chart1;
