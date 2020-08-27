import React, { Component } from 'react';
import ModeSwitchComponent from "../components/ModeSwitchComponent";
class ModeSwitchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<ModeSwitchComponent></ModeSwitchComponent>);
    }
}

export default ModeSwitchContainer;