import React, { Component } from 'react';
import LedgerPageComponent from "./components/LedgerPageComponent";
import HeaderContainer from "../../common/containers/HeaderContainer";
class LedgerPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="ledger-page-container">
                <HeaderContainer></HeaderContainer>
                <LedgerPageComponent></LedgerPageComponent>
            </div>
        );
    }
}

export default LedgerPageContainer;