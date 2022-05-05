import { Chart as ChartJS, ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
Chart.overrides.doughnut

interface Props {
    data: any;
    onClick(): void;
}


const DoughnutChart = ({ data, onClick }: Props) => {

    return <Doughnut data={data} onClick={onClick} />
}

export default DoughnutChart