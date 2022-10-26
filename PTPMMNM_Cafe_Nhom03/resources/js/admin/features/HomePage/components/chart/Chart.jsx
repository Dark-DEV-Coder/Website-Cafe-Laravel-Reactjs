import React from 'react';
import "./Chart.scss";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'Tháng 2',
        total: 1200
    },
    {
        name: 'Tháng 3',
        total: 2100
    },
    {
        name: 'Tháng 5',
        total: 800
    },
    {
        name: 'Tháng 7',
        total: 500
    },
    {
        name: 'Tháng 8',
        total: 3400
    },
    {
        name: 'Tháng 10',
        total: 900
    },
];
const Chart = () => {

    return (
        <div className='chart'>
            <div className="title">Last 6 Months</div>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ae46" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ae46" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke='gray' />
                    <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
                    <Tooltip />
                    <Area type="monotone" dataKey="total" stroke="#82ae46" fillOpacity={1} fill="url(#total)" />

                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Chart
