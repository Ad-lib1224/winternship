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
            </div>
        );
    }
}
