import React, { useEffect, useState } from 'react'
import { CustomColorPicker, Icon, Input } from 'reader/atoms';
import { AddIcon, RemoveIcon } from 'reader/icons';
import styled from 'styled-components';
import { AddCustomPicker } from '../AddCustomPicker';

interface Props {
    openEditDialog: boolean;
    item: any;
    handleUpdate(passedItem: any): void;
}

const EditChartDialog = ({ openEditDialog, item, handleUpdate }: Props) => {

    const [dataToEdit, setDataToEdit] = useState<number>()
    const [pickerColor, setPickerColor] = useState<any>()

    const handleChange = (index: any, v?: any, color?: string) => {
        const todos = { ...item }
        todos.data[index] = v ? v : todos.data[index]
        todos.backgroundColor[index] = color ? color : todos.backgroundColor[index]
        handleUpdate(todos)
    }

    const addDataSet = () => {
        const todos = { ...item }
        todos.data.push(46)
        handleUpdate(todos)
    }

    const removeDataSet = () => {
        const todos = { ...item }
        todos.data.pop()
        handleUpdate(todos)
    }

    return <StyledEditWrapper>
        {openEditDialog && item.data.length > 0 && <>{item.data.map((d: any, index: any) =>
            <StyledInput>
                <div><Input
                    type={'number'}
                    backgroundColor={"#d9d9d9"}
                    key={index}
                    value={d}
                    // min={-1}
                    width={'40px'}
                    onChange={(e) => {
                        setDataToEdit(index)
                        handleChange(index, Number(e.target.value), null)
                    }}
                /></div>
                <StyledHidden>
                    <AddCustomPicker
                        openPicker={true}
                        colorsPalette={['#706677', '#8B7382', '#997A87', '#A6808C', '#CCB7AE', '#D6CFCB']}
                        color={pickerColor}
                        width={'150px'}
                        triangle={'hide'}
                        onChangeComplete={(color) => {
                            setDataToEdit(index)
                            setPickerColor(color.hex)
                            handleChange(index, null, color.hex)
                        }} />
                </StyledHidden>
            </StyledInput>
        )}</>}
        {openEditDialog && item.data.length > 0 && <Icon
            iconName={<AddIcon />}
            onClick={() => addDataSet()} />}
        {/* {openEditDialog && <Icon
            iconName={<RemoveIcon />}
            onClick={() => removeDataSet()} />} */}
    </StyledEditWrapper>
}
export default EditChartDialog

const StyledInput = styled.div`
  display: flex;
  padding: 3px;
`
const StyledHidden = styled.div`
    display: block;
    ${StyledInput}:hover & {
        display: block;
    }
`
const StyledEditWrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    margin-top: 3px;
    position: absolute; 
    z-index: 999; 
`
