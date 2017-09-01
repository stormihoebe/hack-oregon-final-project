import React, { Component } from 'react';
import LineChart from './components/Line-chart';
import CustomChartBuilder from './components/Custom-chart-builder';

class App extends Component {
  render() {
    return (
      <div>
        <CustomChartBuilder />
        <LineChart />
      </div>
    );
  }
}

export default App;
