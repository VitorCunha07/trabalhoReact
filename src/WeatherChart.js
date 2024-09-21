import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeatherChart = ({ weatherData }) => {
  const data = {
    labels: weatherData.map((entry) => entry.day), 
    datasets: [
      {
        label: 'Temperatura (°C)',
        data: weatherData.map((entry) => entry.temperature),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Temperatura ao longo dos dias',
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeatherChart;
