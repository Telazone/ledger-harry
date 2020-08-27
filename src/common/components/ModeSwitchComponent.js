import React, { Component } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
    PieChartOutlined,
    UnorderedListOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import "../../utils/css/modeSwitchComponent.css"

const { Sider } = Layout;

class ModeSwitchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { collapsed: false, }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        return (
            <div className="mode-switch-component d-flex flex-column">
                <Sider color="#1a7575" theme="light" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <Button type="primary" icon={<PlusCircleOutlined />}>
                        {this.state.collapsed ? "" : "创建新的记账记录"}
                    </Button>
                    <Menu defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                            列表模式
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PieChartOutlined />}>
                            图表模式
                        </Menu.Item>
                    </Menu>
                </Sider>
            </div>
        );
    }
}

export default ModeSwitchComponent;