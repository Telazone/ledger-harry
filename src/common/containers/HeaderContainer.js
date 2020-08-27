import React, { Component } from 'react';
import HeaderComponent from "../components/HeaderComponent";
class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<HeaderComponent></HeaderComponent>);
    }
}

export default HeaderContainer;