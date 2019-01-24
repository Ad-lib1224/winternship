import React from "react";
import axios from 'axios';
import { Chart } from 'react-google-charts'
import { Button, Grid, Row, Col } from "react-bootstrap";


export default class WordChart extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          data: [],
      };
  }

  async componentDidMount() {
    const data = await this.getData('wordcount');
    this.setState({data: data});
  }

  async getData(endpoint) {
      const res = await axios.get(`http://127.0.0.1:5000/api/${endpoint}`);
      const temp = res.data.shift();
      res.data.forEach((arr)=> {
        arr[0]=parseInt(arr[0]);
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
                    title: '# of Creatives',
                    max: 720
                  },
                  vAxis: {
                    title: 'Word Count',
                    max: 90
                  },
                }}
                rootProps={{ 'data-testid': '1' }}
              />
              <h3>Word Chart Insight</h3>
                <p>After analyzing the text data and computing the word count of each ad, we merged the data together to determine the statisitics of how much ads have text
                and how much ads had that amount of words. According to the dataset, 714 of the 10,000 ads do not have text, which had the most frequent ads. This can be due to the human brain hardwired to understand visuals
                better than text, thus poeple remember 80% of what they see compared to the 20% they read. Assuming this logic, we can confirm that this may the reason why most ads have 0-45 words. (Not the complete  dataset due
                to the frequency of higher word count consisting of one to three ads)</p>
          </div>
      );
  }
}
