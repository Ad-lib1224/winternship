import React from "react";
import FrequencyChart from "./LabelFrequency";
import LabelSafeSearch from './LabelSafeSearch';
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
            <h1>Hello {this.state.name}</h1>
            <FrequencyChart/>
            <hr />
            <LabelSafeSearch />
            <hr />
            <WordChart />
            <hr />
            <WordFreq />
            </div>
        );
    }
}
