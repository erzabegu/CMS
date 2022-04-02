import React, { useState } from 'react'
import { Input } from 'reader/atoms';
import { IFile } from 'reader/types'
import styled from 'styled-components';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { addFile, editFile, getFiles } from 'reader/services';
import CircularProgress from '@mui/material/CircularProgress';


interface Props {
    files: Array<IFile>;
    setFiles: any;
}

const FilesListOrganism = ({ files, setFiles }: Props) => {
    const [file, setFile] = useState<any>({})
    const [fileToEdit, setFileToEdit] = useState<number | null>(0);
    const [autofocus, setAutofocus] = useState<boolean>(false);


    const onBlur = () => {
        file.id && editFile(file.id, { ...file, fileName: file.fileName, }).then((res: any) => console.log(res)).catch((e) => console.log(e))
        setFileToEdit(null)
    }

    const addNewFile = () => {
        addFile(files && { id: (files.length + 1), fileName: `File${files.length + 1}` }).then(() => getFiles().then((res: any) => {
            setAutofocus(true)
            setFiles(res.data)
        }))
    }

    return <div style={{ display: 'flex', flexWrap: 'wrap', padding: '30px' }}>
        {files.map((file: IFile, index: number) => <StyledBox key={index}>
            <FileOpenOutlinedIcon></FileOpenOutlinedIcon>
            <span>File name</span>
            <Input
                autoFoucus={autofocus}
                type={'text'}
                defaultValue={file.fileName}
                onClick={() => { setFileToEdit(file.id) }}
                onChange={(e) => { setFile({ id: file.id, fileName: e.target.value }) }}
                onBlur={onBlur}
            />
            {file.id === fileToEdit && <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', padding: '10px' }}><CircularProgress size={15} color={"inherit"} /></div>}
        </StyledBox>)}
        <StyledBox onClick={addNewFile}>
            +
        </StyledBox>
    </div>
}

export default FilesListOrganism

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    margin: 3px;
    align-items: center;
    border: 1px solid black;
    min-width: 250px;
`