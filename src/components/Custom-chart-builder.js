import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

function TrimItems(input){
  var array = input.split(',');
  var trimmedArray = array.map(function(item) {
    return item.trim();
  });
  return trimmedArray;
}

class CustomChartBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: '',
      labels: '',
      colors: '',
      title: '',
      data: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    console.log(this.state.data);
    event.preventDefault();
    if(TrimItems(this.state.labels).length !== TrimItems(this.state.values).length){
      alert("You must have the same number of labels and values to create a proper chart. Make sure each label corresponds to a particular value.")
    }else {
      this.setState({data:{
        labels: TrimItems(this.state.labels +''),
         datasets: [
           {
             label: this.state.title,
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
             data: TrimItems(this.state.values +'')
           }
         ]
       }});
       console.log(this.state.data);
    }
}
  render() {
    return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              Enter chart title:
              <input
                value = {this.state.title}
                onChange = { event => this.setState({title: event.target.value})}/>
            </div>
            <div>
              Enter comma separated values:
              <input
                value = {this.state.values}
                onChange = { event => this.setState({values: event.target.value})}/>
            </div>
            <div>
              Enter comma separated labels:
              <input
                value = {this.state.labels}
                onChange = { event => this.setState({labels: event.target.value})}/>
            </div>
            <input type="submit" value="Submit" />
          </form>
          <Line
            data={this.state.data}
            width={200}
            height={300}
            options={{
              maintainAspectRatio: false
            }}
          />

        </div>
    )
  };


};
 export default CustomChartBuilder;
