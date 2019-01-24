import React from "react";
import axios from 'axios';
import { Chart } from 'react-google-charts'
import { Button, Grid, Row, Col } from "react-bootstrap";


export default class LabelSafeSearch extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
      };
  }

  async componentDidMount() {
        const data = await this.getData();
        this.setState({data: data});
    }

    async getData() {
        const res = await axios.get('http://127.0.0.1:5000/api/LabelSafeSearch');
        console.log('Response', res)
        res.data.forEach((arr) => {
            if (arr[1] !== 'Adult') {
              arr[1] = parseFloat(arr[1]);
              arr[2] = parseFloat(arr[2]);
              arr[3] = parseFloat(arr[3]);
              arr[4] = parseFloat(arr[4]);
              arr[5] = parseFloat(arr[5]);
            }
        })
        console.log(res.data);
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
                    title: 'Percentage of Safe Search Content Likelihood',
                    max: 720
                  },
                  vAxis: {
                    title: 'Top 34 Labels',
                    max: 90
                  },
                }}
                rootProps={{ 'data-testid': '1' }}
              />
          </div>
      );
  }
}