import React, { Component } from 'react';
import LedgerPageComponent from "./components/LedgerPageComponent";
import HeaderContainer from "../../common/containers/HeaderContainer";
import store from "../../state/store";
class LedgerPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }
    componentDidMount() {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 576) {
                this.setState({
                    width: window.innerWidth
                })
            }
        })
    }
    render() {
        return (
            <div className="ledger-page-container">
                <HeaderContainer></HeaderContainer>
                <LedgerPageComponent isList={this.state.modeChangeReducer.isList}></LedgerPageComponent>
            </div>
        );
    }

    storeChange() {
        this.setState(store.getState())
    }
}

export default LedgerPageContainer;