import React, { Component } from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import '../../utils/css/headerComponent.css'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="header-component container-fluid">
                <div className="banner"></div>
                <div className="content row">
                    <div className="slogan d-flex col-sm-6 col-2 align-items-center">
                        <span className="name">
                            哈利记账
                        </span>
                    </div>
                    <div className="detail d-flex col-sm-6 col-10">
                        <div className="date-section col-12 col-sm-6 d-flex align-items-center justify-content-center">
                            选择日期：
                            <DatePicker onChange={console.log("TODO: datechange")} picker="month" />
                        </div>
                        <div className="summary col-12 col-sm-6 d-flex justify-content-around align-items-center">
                            <div className="income-summary">收入: ¥10000</div>
                            <div className="outcome-summary">支出: ¥3432</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;