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
                <p>For the past three weeks, the Winterns: Starasia, Savana, Wadgma, Sandy, and Urooj,
                have worked collaboratively with the Kargo Software Engineering Team to complete the challenge project. 
                The challenge project was to use Kargo creatives (i.e..advertisements) and various analytics
                tools to build a creative evaluation analytics report.</p>
                <p>The Winternship was broken down into three parts:
                    <ul>
                        <li><h4>Data Population:</h4>Query and feed creatives to evaluator;aggregate data using Google Vision API and Python</li>
                        <li><h4>Analysis:</h4>Identify features/data to formulate and perform analysis using Google Sheets</li>
                        <li><h4>Reporting:</h4>Create frontend one-pager of analytics using React and JavaScript.</li>
                    </ul>
                </p>
                <p>The Winterns are proud to debut their not only their data population and analysis, but two frontend projects!
                With only two days of the Winternship remaining, Savana, Wadgma and Urooj decided to create a webpage using HTML/CSS 
                and JavaScript, while Sandy and Starasia worked with React.</p>
                <p>Below are four graphs with their accompanying insights on Label Detection, Safe Search and Text Detection.</p>

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
