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

import './feedingGraphic.scss';

const FeedingGraphic = () => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'График кормления этом месяце',
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
        label: 'Количество корма (кг)',
        data: [
          20, 17, 18, 19, 20, 22, 0, 20, 20, 20, 20, 20, 20, 15, 11, 12, 14, 19, 0, 20, 20, 20, 20,
          20, 20, 20, 20, 20, 20, 22, 27,
        ],
        borderColor: 'rgb(61, 181, 74)',
        backgroundColor: 'rgba(61, 181, 74, 0.5)',
      },
    ],
  };

  return (
    <Line
      options={options}
      data={data}
      style={{ maxHeight: '275px' }}
      className="feeding-graphic"
    />
  );
};

export default FeedingGraphic;
