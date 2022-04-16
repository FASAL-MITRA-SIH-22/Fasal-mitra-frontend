import React from "react";
import Chart from 'react-apexcharts'


class PieChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [14, 23, 21, 17, 15, 10, 12],
            options: {
                labels: [
                    "Corn_(maize)",
                    "Tomato",
                    "Potato",
                    "Grape",
                    "Pepper bell",
                    "Strawberry",
                    "Apple",
                ],
                plotOptions: {
                    pie: {
                        donut: {
                            size: '70%',
                        },

                    }
                },
                chart: {
                    type: 'donut',
                    foreColor: '#ffffff'
                },
                stroke: {
                    width: 10,
                    colors: ['#334155']
                },
                innerRadius: "2%",
                title: {
                    text: 'Distribution of Prediction over plants'
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },
        };

    }



    render() {
        return (
            <div id="chart" className="w-full">
                <Chart options={this.state.options} series={this.state.series} type="donut" />
            </div>


        );
    }
}

export default PieChart;