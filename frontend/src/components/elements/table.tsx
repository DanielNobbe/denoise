'use client'

import React from 'react';
import { ITableProps } from "@/interfaces/common";
import { Content } from "antd/es/layout/layout";
import { Table } from "antd";

export default function TableElement({ columns, data, onClick, expandable, rowClassName, onExpand, expandedRows }: ITableProps) {
    return (
        <Content
            className="site-layout min-w-full shadow-md rounded-md"
            style={{background: "#fff"}}
        >
            <Table
                columns={columns}
                dataSource={data}
                rowClassName={rowClassName}
                onExpand={(expanded, record) => onExpand && onExpand(expanded, record)}
                onRow={(rowIndex) => {
                    return {
                        onClick: () => { onClick && onClick(rowIndex) }
                    }
                }}
                expandable={expandable ? {expandedRowRender: (record: any) => <>{expandable}</>} : undefined}
                expandedRowKeys={expandedRows}
                pagination={{
                    defaultPageSize: 10
                }}
            />
        </Content>
    )
};