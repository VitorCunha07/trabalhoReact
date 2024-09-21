import React from 'react';
import './App.css';
import WeatherChart from './WeatherChart';
import logo from './logo.svg'; 

function App() {
  const weatherData = [
    { day: 'Seg', temperature: 22 },
    { day: 'Ter', temperature: 24 },
    { day: 'Qua', temperature: 21 },
    { day: 'Qui', temperature: 25 },
    { day: 'Sex', temperature: 23 },
    { day: 'Sab', temperature: 24 },
    { day: 'Dom', temperature: 25 },
  ];

  return (
    <div className="App">
      <header className="App-header">
      <p className="weather-title">Gráfico de Clima</p>
        <WeatherChart weatherData={weatherData} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;
