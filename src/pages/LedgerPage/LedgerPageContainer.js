import React, { Component } from 'react';
import LedgerPageComponent from "./components/LedgerPageComponent";
import HeaderContainer from "../../common/containers/HeaderContainer";
class LedgerPageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        }
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
                <LedgerPageComponent></LedgerPageComponent>
            </div>
        );
    }
}

export default LedgerPageContainer;