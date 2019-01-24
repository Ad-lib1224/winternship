import React from "react";
import WordChart from "./WordChart";
import WordFreq from "./WordFreq";

require('../css/styles.css');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kargo Engineering Team'
        }
    }

    render() {
        return (
            <div>
            <WordChart
                name={this.state.name}
            />
            <WordFreq />
            </div>
        );
    }
}
