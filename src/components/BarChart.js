
import React, { useState } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register (
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
);

function BarChart() {
const data = {
    labels: ['11 UMi b', '17 Sco b', '91 Aqr b', 'COCONUTS-2b', '14 Her b', 'DP Leo b', 'GJ 15 A c', 'HD220689b'],
    datasets: [ {
        label: 'Orbital Period',
        data: [516.21, 578.38, 181.40, 4020.0, 1765.03, 1022.0, 7600.0, 2266.4 ],
        backgroundColor: [
        'rgba(204, 204, 255)',
        'rgba(157, 154, 181)',
        'rgba(87, 43, 158)',
        'rgba(189, 181, 213)',
        'rgba(81, 60, 107)',
        'rgba(48, 12, 92)',
        'rgba(123, 96, 209)',
        'rgba(93, 63, 211)',
        ],
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: '1',
        },
    ],
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        }, title: {
            display: true, 
            text: 'Planet Orbital Period',
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'Orbit Period'
            }
        },
        x: {
            title: {
                display: true,
                text: 'Planet Name',
            }
        }
    },
};

return (
    <div style={{ height: '400px', width: '100%',  }}>
        <Bar data={data} options={options} />
    </div>
);
}

export default BarChart;
