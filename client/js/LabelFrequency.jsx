import React from "react";
import axios from 'axios';
import * as V from 'victory';
import { Chart } from "react-google-charts";
import { Button, Grid, Row, Col } from "react-bootstrap";


export default class FrequencyChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Frequency of Google Vision API Labels',
            data: [],
        };
    }

    async componentDidMount() {
        const data = await this.getData();
        this.setState({data: data});
    }

    async getData() {
        const res = await axios.get('http://127.0.0.1:5000/api/freqData');
        console.log('Response', res)
        res.data.forEach((arr) => {
            if (arr[1] !== 'frequency') arr[1] = parseInt(arr[1]);
        })
        console.log(res.data);
        return res.data;
    }

    render() {
        return (
            <div>
                <Chart
                  width={'800px'}
                  height={'800px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={this.state.data}
                  options={{
                    title: 'Label Frequency',
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
                <hr/>
                <h3>Label Frequency Insights</h3>
                  <p>This chart depicts the top 34 most frequently detected labels returned from Google Vision API.
                  3,676 of the creatives were labeled as text so it would be interesting to see how much traffic these creatives are generating since it's safe to conclude that it is considered as a "text" ad.
                  "Blue" and "product" are the second and third leading labels. So, we could also think about the functionality of the color blue in advertising, especially since twenty-nine of the
                  World's Top 100 famous brands, including, IBM, Samsung, General Electric and Facebook, have blue logos. Does this mean that Kargo should consider more blue creatives?</p>
            </div>
        );
    }
}
