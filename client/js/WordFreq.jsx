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
                  },
                  vAxis: {
                    title: 'Words',
                  },
                }}
                rootProps={{ 'data-testid': '1' }}
              />
              <h3>Word Frequency Insight</h3>
                <p>Using python, we were able to obtain the frequency of the appearance of each word. By trimming the dataset to contain the 
                top twenty words that appear most frequently, we were able to make a chart showing the data. According to the chart, the word "now" 
                appears the most frequently, with an appearance of 2,134 times compared to the word "the" which appeared 1,896 times. The reason "now"
                most likely appears the most is due to it meaning the present. It's an adverb that draws the attention of someone to a statment, or in 
                this case ads. By attracting the attention of its consumers, these ads promote themselves and may possibly lead to a potential customer. </p>
          </div>
      );
  }

}
