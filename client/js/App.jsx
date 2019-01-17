import React from "react";
import CatChart from "./CatChart";

require('../css/styles.css');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Sarah'
        }
    }

    render() {
        return (
            <div>
            <h1>Hello {this.state.name}</h1>
            <CatChart
                name={this.state.name}
            />
            </div>
        );
    }
}
