import React from 'react';
import {Line} from 'react-chartjs-2';

var data = {
  labels: ['Aug 16','Oct 16', 'Dec 16', 'Feb 17', 'April 17', 'June 17','Aug 17'],
   datasets: [
     {
       label: 'UX Design',
       fill: false,
       lineTension: 0.1,
       backgroundColor: 'rgba(75,192,192,0.4)',
       borderColor: 'rgba(75,192,192,1)',
       borderCapStyle: 'butt',
       borderDash: [],
       borderDashOffset: 0.0,
       borderJoinStyle: 'miter',
       pointBorderColor: 'rgba(75,192,192,1)',
       pointBackgroundColor: '#fff',
       pointBorderWidth: 1,
       pointHoverRadius: 5,
       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
       pointHoverBorderColor: 'rgba(220,220,220,1)',
       pointHoverBorderWidth: 2,
       pointRadius: 1,
       pointHitRadius: 10,
       data: [10, 20, 20, 10, 5, 20, 20]
     },

     {
       label: 'Javascript',
       fill: false,
       lineTension: 0.1,
       backgroundColor: 'rgba(75,20,192,0.4)',
       borderColor: 'rgba(75,20,192,1)',
       borderCapStyle: 'butt',
       borderDash: [],
       borderDashOffset: 0.0,
       borderJoinStyle: 'miter',
       pointBorderColor: 'rgba(75,192,192,1)',
       pointBackgroundColor: '#fff',
       pointBorderWidth: 1,
       pointHoverRadius: 5,
       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
       pointHoverBorderColor: 'rgba(220,220,220,1)',
       pointHoverBorderWidth: 2,
       pointRadius: 1,
       pointHitRadius: 10,
       data: [5, 10, 10, 30, 20, 20, 40]
     },

     {
       label: 'Java/Android',
       fill: false,
       lineTension: 0.1,
       backgroundColor: 'rgba(190,19,5,0.4)',
       borderColor: 'rgba(190,19,5,1)',
       borderCapStyle: 'butt',
       borderDash: [],
       borderDashOffset: 0.0,
       borderJoinStyle: 'miter',
       pointBorderColor: 'rgba(75,192,192,1)',
       pointBackgroundColor: '#fff',
       pointBorderWidth: 1,
       pointHoverRadius: 5,
       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
       pointHoverBorderColor: 'rgba(220,220,220,1)',
       pointHoverBorderWidth: 2,
       pointRadius: 1,
       pointHitRadius: 10,
       data: [0, 0, 0, 0, 35, 40, 10]
     },
     {
       label: 'React/React-Native',
       fill: false,
       lineTension: 0.1,
       backgroundColor: 'rgba(214, 221, 6, .4)',
       borderColor: 'rgba(214, 221, 6, 1)',
       borderCapStyle: 'butt',
       borderDash: [],
       borderDashOffset: 0.0,
       borderJoinStyle: 'miter',
       pointBorderColor: 'rgba(75,192,192,1)',
       pointBackgroundColor: '#fff',
       pointBorderWidth: 1,
       pointHoverRadius: 5,
       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
       pointHoverBorderColor: 'rgba(220,220,220,1)',
       pointHoverBorderWidth: 2,
       pointRadius: 1,
       pointHitRadius: 10,
       data: [0, 0, 0, 0, 5, 15, 40]
     }
   ]
 };

const LineChart = () =>{

    return (
      <Line
      	data={data}
        width={200}
        height={300}
      	options={{
      		maintainAspectRatio: false
      	}}
      />
    );
}

export default LineChart;
