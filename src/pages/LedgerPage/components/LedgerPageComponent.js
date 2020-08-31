import React, { Component } from 'react';
import ModeSwitchContainer from "../../../common/containers/ModeSwitchContainer";
import "../../../utils/css/ledgerPageComponent.css"
// import ListModeComponent from "./ListModeComponent";
import ChartModeComponent from "./ChartModeComponent"

class LedgerPageComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="ledger-page-component container-fluid">
                <div className="row">
                    <div className="navigator col-sm-2 col-12">
                        <ModeSwitchContainer></ModeSwitchContainer>
                    </div>
                    {/* <div className="main-content col-sm-10 col-12 d-flex justify-content-center align-items-center">
                        <ListModeComponent></ListModeComponent>
                    </div> */}
                    <div className="main-content col-sm-10 col-12 d-flex justify-content-center align-items-center">
                        <ChartModeComponent></ChartModeComponent>
                    </div>
                </div>
            </div>
        );
    }
}

export default LedgerPageComponent;