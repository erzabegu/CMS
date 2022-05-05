import { useEffect, useState } from 'react';
import { LineChart } from 'reader/atoms'
import { ISectionItem } from 'reader/types';
import { EditLineChartDialog } from '../EditLineChartDialog';

interface Props {
    item: ISectionItem;
    handleUpdate?(passedItem: any): void;
}


const RenderLineChart = ({ item, handleUpdate }: Props) => {
    const [openEditDialog, setOpenEditDialog] = useState<boolean>(false)

    return <><LineChart data={{ labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], datasets: [{ data: item.lineChartData, backgroundColor: item.backgroundColor }] }}
        onClick={() => setOpenEditDialog(!openEditDialog)} />
        {openEditDialog && <EditLineChartDialog openEditDialog={openEditDialog} item={item} handleUpdate={handleUpdate} />}</>
}

export default RenderLineChart