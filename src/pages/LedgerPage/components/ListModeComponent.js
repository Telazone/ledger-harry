import React, { Component } from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Table } from 'antd';

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2038134_x884l7lidrq.js',
});
const columns = [
    {
        title: "描述",
        dataIndex: 'name',
        render: (value, row, index) => {
            return (<div className="d-flex align-items-center">{row.icon} {value}</div>)
        }
    },
    {
        title: '花费',
        dataIndex: 'cost',
        sorter: {
            compare: (a, b) => a.cost - b.cost,
            multiple: 2,
        },
    },
    {
        title: '日期',
        dataIndex: 'date',
        sorter: {
            compare: (a, b) => new Date(a.date) - new Date(b.date),
            multiple: 1,
        },
    },
];
const map = {
    FOOD: <IconFont type="icon-Non-staplefood" />,
    TRANSPORT: <IconFont type="icon-landtransportation" />,
    HOME: <IconFont type="icon-home" />,
    SHOPPING: <IconFont type="icon-goumaipianhao" />
}
class ListModeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {
                    icon: map["FOOD"],
                    type: "FOOD",
                    name: "和哥们儿吃饭",
                    cost: "300",
                    date: "2020-08-05"
                },
                {
                    icon: map["SHOPPING"],
                    type: "SHOPPING",
                    name: "买手机",
                    cost: "5000",
                    date: "2020-08-07"
                },
                {
                    icon: map["FOOD"],
                    type: "FOOD",
                    name: "和哥们儿吃饭",
                    cost: "100",
                    date: "2020-08-10"
                },
                {
                    icon: map["FOOD"],
                    type: "FOOD",
                    name: "和哥们儿吃饭",
                    cost: "240",
                    date: "2020-08-12"
                },
                {
                    icon: map["TRANSPORT"],
                    type: "TRANSPORT",
                    name: "打车回家",
                    cost: "50",
                    date: "2020-08-14"
                },
                {
                    icon: map["HOME"],
                    type: "HOME",
                    name: "交电费",
                    cost: "300",
                    date: "2020-08-20"
                },
            ]
        }
    }

    onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }

    render() {
        return (<div className="list-mode-component w-100">
            <Table columns={columns} dataSource={this.state.listData} onChange={this.onChange} />
        </div>);
    }
}

export default ListModeComponent;