import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, Legend, AreaChart, Area, CartesianGrid } from 'recharts';
import "./Dashboard.css"

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='chart'>
            <LineChart width={400} height={300} data={data}>
                <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                <YAxis></YAxis>
                <XAxis dataKey="month"></XAxis>
                <Tooltip />
                <Legend />
            </LineChart>

            <BarChart width={400} height={300} data={data}>
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
                <YAxis></YAxis>
                <XAxis dataKey="month"></XAxis>
                <Tooltip />
                <Legend />
            </BarChart>

            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
        </div>
    );
};

export default Dashboard;