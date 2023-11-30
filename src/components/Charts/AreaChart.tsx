"use client";
import React from "react";

// Chartjs
import { Chart } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function AreaChart({
  label,
  bgColor,
  borderColor,
}: {
  label: string;
  bgColor: string;
  borderColor: string;
}) {
  const labels = ["Jan", "Feb", "March", "April", "May", "June", "July"];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: label,
        data: [98, 95, 110, 150, 132, 180, 210],
        borderColor: borderColor,
        backgroundColor: bgColor,
      },
    ],

  };

  return <Chart type="line" options={options} data={data} />;
}
