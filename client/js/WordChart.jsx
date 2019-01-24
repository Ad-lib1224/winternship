import React from "react";
import axios from 'axios';
import * as V from 'victory';
import { Chart } from 'react-google-charts'
import { Button, Grid, Row, Col } from "react-bootstrap";


export default class CatChart extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     title: 'Cats that ' + this.props.name + ' has pet:',
        //     data: [],
        // };
        // this.handleClick=this.handleClick.bind(this);
    }

    async componentDidMount() {
        // const data = await this.getData();
       // this.setState({data: data});
    }

    // async getData(endpoint) {
    //     const res = await axios.get('http://127.0.0.1:5000/api/$(endpoint');
    //     console.log('Response', res)
    //     return res.data;
    // }

    // handleClick(){
    //     console.log('hi');
    //     this.props.changeName();
    // }

    render() {
        return (
            <div>
                <Chart
                  chartType="BarChart"
                  spreadSheetUrl="https://docs.google.com/spreadsheets/d/1RkKKFhBvpgFzWpNu4n8SVzeAba8Z992va695koxdlSo/edit#gid=0"
                  height = {'500px'}
                  options={{
                    hAxis: {
                      title: '# of Creatives',
                      max: 720
                      // format: 'short',
                    },
                    vAxis: {
                      title: 'Word Count',
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
