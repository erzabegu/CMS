import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: any;
}

const DoughnutChart = (props: Props) => {
    return <Doughnut data={props.data} />;
}

export default DoughnutChart