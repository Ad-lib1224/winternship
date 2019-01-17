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
            chartType: 'bar',
            animal: 'cats'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        const data = await this.getData();
        this.setState({data: data});
    }

    async getData() {
        const endpoint = this.state.chartType === 'bar' ? 'barData' : 'lineData';
        const res = await axios.get(`http://127.0.0.1:5000/api/${endpoint}`);
        console.log('Response', res)
        return res.data;
    }

    handleClick() {
        const name = this.props.name === 'Sarah' ? 'Geetha' : 'Sarah';
        const chart = this.state.chartType === 'bar' ? 'line' : 'bar';
        this.setState({chartType: chart});
        this.props.updateName(name);
    }

    async componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
            const data = await this.getData();
            this.setState({
                data: data,
                title: 'Cats that ' + this.props.name + ' has pet:'
            });
        }
    }

    render() {
        let chart;
        const chartType = this.state.chartType;
        if (chartType === 'bar') {
            chart = <V.VictoryBar
                        labelComponent={<V.VictoryTooltip/>}
                        data={this.state.data}
                        style={{ data: { fill: "purple" } }}
                        x="days"
                        y={this.state.animal} />;
        } else {
            chart = <V.VictoryLine
                        data={this.state.data}
                        x="days"
                        y={this.state.animal}
                        style={{ data: { stroke: "blue", strokeWidth: 3 } }}
                    />
        }
        return (
            <div>
                <Button bsSize="large" bsStyle="danger" onClick={() => { this.handleClick(this.state.chartType)}}>
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


