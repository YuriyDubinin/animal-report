import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const WorkActivityGraphic = () => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Пищевая и рабочая активность в этом месяце',
      },
    },
  };

  const labels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: 'Пищевая активность (%)',
        data: [
          90, 90, 90, 90, 90, 90, 0, 90, 90, 100, 90, 90, 90, 0, 90, 90, 70, 90, 90, 90, 0, 90, 90,
          90, 90, 90, 90, 0, 90, 90, 90,
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Рабочая активность (%)',
        data: [
          100, 80, 70, 70, 70, 70, 0, 70, 70, 70, 70, 70, 70, 0, 70, 70, 70, 70, 70, 70, 0, 70, 70,
          70, 70, 70, 70, 0, 70, 70, 70,
        ],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Line options={options} data={data} style={{ maxHeight: '275px' }} />;
};

export default WorkActivityGraphic;
