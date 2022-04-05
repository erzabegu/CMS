import React, { useState } from 'react'
import { Input } from 'reader/atoms';
import { IFile } from 'reader/types'
import styled from 'styled-components';
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { addFile, editFile, getFiles } from 'reader/services';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { InputWrapper } from 'reader/molecules';



interface Props {
    files: Array<IFile>;
    setFiles: any;
}

const FilesListOrganism = ({ files, setFiles }: Props) => {
    const navigate = useNavigate();
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

    return <>
        {files.map((file: IFile, index: number) => <StyledBox key={index}>
            <FileOpenOutlinedIcon onClick={() => navigate(`/${file.id}`)}></FileOpenOutlinedIcon>
            <InputWrapper
                labelName={'FileName'}
                autoFoucus={autofocus}
                type={'text'}
                defaultValue={file.fileName}
                onClick={() => { setFileToEdit(file.id) }}
                onChange={(e) => { setFile({ id: file.id, fileName: e.target.value }) }}
                onBlur={onBlur}
            />
            {file.id === fileToEdit && <CircularWrapper><CircularProgress size={15} color={"inherit"} /></CircularWrapper>}
        </StyledBox>)}
        <StyledBox onClick={addNewFile}>
            +
        </StyledBox>
    </>
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
const CircularWrapper = styled.div`
    display: flex; 
    width: 100%;
    justify-content: end; 
    padding: 10px;
`