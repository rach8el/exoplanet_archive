import React, { useState } from "react";


import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

ChartJS.register (
    LinearScale,
    PointElement,
    Title,
    Tooltip
);

function ScatterPlot() {
    const data = {
        labels: ['11 UMi b', '17 Sco b', '91 Aqr b', 'COCONUTS-2b', '14 Her b', 'DP Leo b', 'GJ 15 A c', 'HD220689b'],
        datasets: [
            {
                label: 'Planet Mass',
                data: [
                    {x: '11 UMi b', y: 4684.8 },
                    {x: '17 Sco b', y: 1373.0 }, 
                    {x: ' 91 Aqr b', y:1017.0}, 
                    {x: 'COCONUTS-2b', y: 2002.3},
                    {x: '14 Her b', y: 2259.4 }, 
                    {x: 'DP Leo b', y: 1995.8 },
                    {x: 'GJ 15 A c', y: 36.00 }, 
                    {x: 'HD220689b', y:381.39}
                ],
               backgroundColor: 'rgba(255, 255, 255)',
               pointBackgroundColor: [
                'rgba(209, 130, 195)',
                'rgba(209, 130, 151)',
                'rgba(130, 165, 209)',
                'rgba(130, 209, 172)'
               ],
               pointRadius: 5,
            },
        ],
        
    };
    const options = {
        scales: {
            x: {
                type: 'category',
                title: {display: true, text: 'Planet Name'},
            },
            y: {
                type: 'linear',
                title: {display: true, text: 'Mass'},
            }
        }
    }
        return <Scatter data={data} options={options} />;
    }


export default ScatterPlot;
