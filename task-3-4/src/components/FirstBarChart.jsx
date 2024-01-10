import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

const FirstBarChart = () => {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            labels: ['Everett', 'Seattle', 'Lynnwood', 'Bothell', 'Mukilteo', 'Edmonds'],

            datasets: [
                {
                    type: 'bar',
                    label: 'Revenue for November 2019',
                    color: '#222222',
                    backgroundColor: '#41BF98',
                    borderRadius: 5,
                    data: [80000, 75000, 49000, 47000, 45000, 34000]
                },
            ]
        };
        const options = {
            responsive: true,
            indexAxis: 'y',
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                tooltips: {
                    mode: 'index',
                    intersect: false
                },
                legend: {
                    label: {
                        display: false,
                    }
                },
                label: {
                    display: false,
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: '#222222'
                    },
                    grid: {
                        color: "#ffffff"
                    }


                },
                y: {
                    stacked: true,
                    ticks: {
                        color: '#222222'
                    },
                    grid: {
                        color: "#ffffff"
                    }


                }
            }
        };
        setChartData(data);
        setChartOptions(options);
    }, []);


    return (
        <div className="bar">

            <div className="bar-box">
                <p className="para"><Chart type="bar" data={chartData} options={chartOptions} /></p>

            </div>
        </div>
    );
}

export default FirstBarChart;