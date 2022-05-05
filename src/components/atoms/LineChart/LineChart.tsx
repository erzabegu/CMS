import { Line } from 'react-chartjs-2'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface Props {
    data: any;
    onClick?(): void;
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    }
};

const LineChart = ({ data, onClick }: Props) => {
    return <Line options={options} data={data} onClick={onClick} />;
}

export default LineChart