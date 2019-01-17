import React from "react";
import axios from 'axios';
import * as V from 'victory';
import { Button, Grid, Row, Col } from "react-bootstrap";


export default class CatChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Cats that ' + this.props.name + ' has pet:',
            data: [],
            chartType: 'barData'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        const data = await this.getData('barData');
        this.setState({data: data});
    }

    async getData(endpoint) {
        const res = await axios.get(`http://127.0.0.1:5000/api/${endpoint}`);
        console.log('Response', res)
        return res.data;
    }

    handleClick(){
        const name = this.props.name === 'Sarah' ? 'Geetha' : 'Sarah';
        const chart = this.state.chartType === 'lineData' ? 'barData' : 'lineData';
        this.props.changeName(name);
        this.setState({
            title: 'Cats that ' + name + ' has pet:',
            chartType: chart
        });
    }

    async componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
           const data = await this.getData(this.state.chartType);
           this.setState({data: data}); 
        }
    }

    render() {
        let chart;
        if (this.state.chartType === 'barData') {
            chart = <V.VictoryBar
                        labelComponent={<V.VictoryTooltip/>}
                        data={this.state.data}
                        style={{ data: { fill: "purple" } }}
                        x="days"
                        y="cats" />;
        } else {
            chart = <V.VictoryLine
                        data={this.state.data}
                        x="days"
                        y="cats"
                        style= {{ data: { stroke: 'blue', strokeWidth: 3} }}
                    />;
        }
        return (
            <div>
                <Button bsSize="large" bsStyle="danger" onClick={this.handleClick}>
                    Switch Chart
                </Button>
                <V.VictoryChart
                    domainPadding={20}
                >
                    <V.VictoryLabel text={this.state.title} x={225} y={30} textAnchor="middle"/>
                    <V.VictoryAxis
                        label='days'
                    />
                    <V.VictoryAxis
                        dependentAxis
                        label='cats'
                    />
                    {chart}

                </V.VictoryChart>
            </div>
        );
    }
}

