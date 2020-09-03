import React, { Component } from 'react';
import ModeSwitchComponent from "../components/ModeSwitchComponent";
import store from "../../state/store";
import { enableListPageAction, enableChartPageAction } from "../../state/modeChange/modeChangeAction";
class ModeSwitchContainer extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.enableListPage = this.enableListPage.bind(this);
        this.enableChartPage = this.enableChartPage.bind(this);
    }
    render() {
        return (<ModeSwitchComponent enableListPage={this.enableListPage} enableChartPage={this.enableChartPage}></ModeSwitchComponent>);
    }

    enableListPage() {
        const action = enableListPageAction();
        store.dispatch(action)
    }

    enableChartPage() {
        const action = enableChartPageAction();
        store.dispatch(action)
    }
}

export default ModeSwitchContainer;