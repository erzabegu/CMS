import React, { useEffect, useState } from 'react'
import { Input } from 'reader/atoms';

interface Props {
    openEditDialog: boolean;
    item: any;
    handleUpdate(passedItem: any): void;
}

const EditChartDialog = ({ openEditDialog, item, handleUpdate }: Props) => {

    const [dataToEdit, setDataToEdit] = useState<any>()

    const handleChange = (index: any, v: any) => {
        const todos = { ...item }
        todos.data.datasets[0].data[index] = v
        handleUpdate(todos)
    }

    return <>
        {openEditDialog && <span>{item.data.datasets.map((data: any) => <>
            {data.data.map((d: any, index: any) => <Input
                type={'number'}
                key={index}
                value={d}
                onChange={(e) => {
                    setDataToEdit(index)
                    handleChange(index, Number(e.target.value))
                }}
            />)}
        </>)}</span>}
    </>
}
export default EditChartDialog