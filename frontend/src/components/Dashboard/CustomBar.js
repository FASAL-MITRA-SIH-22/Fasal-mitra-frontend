import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const initial = {
  labels: [],
  datasets: [
    {
      label: "Plant",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [],
    },
  ],
};

function CustomBar({ data, labelName, legendName }) {
  const [barData, setBarData] = useState(initial);

  useEffect(() => {
    if (!data) return;

    setBarData({
      labels: data?.legends,
      datasets: [
        {
          label: labelName,
          backgroundColor: "#6FD399",
          borderColor: "#333",
          borderWidth: 1,
          data: data?.data,
        },
      ],
    });
  }, [data, labelName]);

  return (
    <Bar
      data={barData}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: { grid: { display: false } },
          y: { grid: { display: false } },
        },
        title: {
          display: true,
          text: { LegendName: legendName },
          fontSize: 20,
        },
        legend: {
          display: true,
          position: "right",
        },
      }}
    />
  );
}

export default CustomBar;
