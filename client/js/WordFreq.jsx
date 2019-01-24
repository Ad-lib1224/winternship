import React from "react";
import axios from 'axios';
import { Chart } from 'react-google-charts'
import { Button, Grid, Row, Col } from "react-bootstrap";


export default class WordFreq extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
      };
  }

  async componentDidMount() {
    const data = await this.getData('wordfrequency');
    this.setState({data: data});
  }

  async getData(endpoint) {
      const res = await axios.get(`http://127.0.0.1:5000/api/${endpoint}`);
      const temp = res.data.shift();
      res.data.forEach((arr)=> {
        arr[1]=parseInt(arr[1]);
      });

      res.data.unshift(temp);
      console.log('Response', res)

      return res.data;
  }

  render() {
      return (
          <div>
              <Chart
                chartType="BarChart"
                data ={this.state.data}
                height = {'500px'}
                options={{
                  hAxis: {
                    title: 'Frequency',
                    max: 720
                    // format: 'short',
                  },
                  vAxis: {
                    title: 'Words',
                    max: 90
                    // format: 'decimal',
                    // format:'scientific'
                    // format:'long'
                    // format:'percent'
                  },
                }}
                rootProps={{ 'data-testid': '1' }}
              />
          </div>
      );
  }

}
