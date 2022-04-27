import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
    data: any;
    onClick(): void;
}


const DoughnutChart = ({ data, onClick }: Props) => {


    return <Doughnut redraw={true} data={data} onClick={onClick} />
}

export default DoughnutChart