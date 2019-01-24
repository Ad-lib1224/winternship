import React from "react";
import CatChart from "./CatChart";

require('../css/styles.css');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Kargo Engineering Team'
        }
        this.updateName=this.updateName.bind(this)
    }

    updateName(){
        this.setState({name: 'Geetha'});
    }
    render() {
        return (
            <div>
            <CatChart
                name={this.state.name}
                changeName={this.updateName}
            />
            </div>
        );
    }
}
