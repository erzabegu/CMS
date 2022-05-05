import React, { useState } from "react";
import { Input } from "reader/atoms";

interface Props {
    openEditDialog: boolean;
    item: any;
    handleUpdate(passedItem: any): void;
}


const EditLineChartDialog = ({ openEditDialog, item, handleUpdate }: Props) => {
    const [dataToEdit, setDataToEdit] = useState<number>()

    const handleChange = (index: any, v?: any) => {
        const todos = { ...item }
        todos.lineChartData[index] = v ? v : todos.lineChartData[index]
        handleUpdate(todos)
    }
    return <><div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxWidth: '300px', marginTop: '3px' }}>
        {openEditDialog && <>{item.lineChartData.map((d: any, index: any) =>
            <div>
                <Input
                    type={'number'}
                    backgroundColor={"#d9d9d9"}
                    key={index}
                    value={d}
                    width={'50px'}
                    margin={'2px'}
                    onChange={(e) => {
                        setDataToEdit(index)
                        handleChange(index, Number(e.target.value))
                    }}
                />
            </div>
        )}</>}
    </div></>
}

export default EditLineChartDialog