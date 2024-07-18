import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { BASE_URL } from "../../util/vars";
import { Box } from "@chakra-ui/react";
const ChartComponent = () => {
  const [backendData, setBackendData] = useState([]);
  useEffect(() => {
    const fetchDataAndRenderChart = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tasks/getTask`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const dataFromBackend = await response.json();
        setBackendData(dataFromBackend);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataAndRenderChart();
  }, []);

  useEffect(() => {
    if (backendData.length > 0) {
      const labels = backendData.map((item) => item.activityName);
      const datasets = [
        {
          label: "Construction Project Timeline",
          data: backendData.map((item) => [item.startDate, item.endDate]),
          backgroundColor: "#2a68a2",
          borderColor: "#2a68a2",
          barPercentage: 0.4,
        },
      ];

      const minDate = findMinDate(backendData);

      const config = {
        type: "bar",
        data: {
          labels: labels,
          datasets: datasets,
        },
        options: {
          indexAxis: "y",
          scales: {
            x: {
              type: "time",
              time: {
                unit: "day", 
                displayFormats: {
                  day: 'MMM d, yyyy' 
                },
                tooltipFormat: "MMM d, yyyy",
              },
              min: minDate,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      };

      const myChart = new Chart(document.getElementById("myChart"), config);

      return () => myChart.destroy();
    }
  }, [backendData]);

  const findMinDate = (data) => {
    let minDate = data.reduce((min, current) => {
      return current.startDate < min ? current.startDate : min;
    }, data[0].startDate);

    return minDate;
  };

  return (
    <Box mt={16} mx={20}>
      <Box className="chartCard">
        <Box className="chartBox">
          <canvas id="myChart"></canvas>
        </Box>
      </Box>
    </Box>
  );
};

export default ChartComponent;
