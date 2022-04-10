import React, { useState } from 'react'
import { IFile } from 'reader/types'
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import { addFile, editFile, getFiles } from 'reader/services';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { InputWrapper } from 'reader/molecules';
import AddIcon from '@mui/icons-material/Add';
import { FilesWrapper, StyledBox, StyledPlus } from './styled';


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

    return <FilesWrapper>
        {files.map((file: IFile, index: number) => <><StyledBox key={index}>
            <span style={{ cursor: 'pointer' }}><FileOpenOutlinedIcon onClick={() => navigate(`/${file.id}`)}></FileOpenOutlinedIcon></span>
            <InputWrapper
                labelName={'FileName'}
                autoFoucus={autofocus}
                type={'text'}
                defaultValue={file.fileName}
                onClick={() => { setFileToEdit(file.id) }}
                onChange={(e) => { setFile({ id: file.id, fileName: e.target.value }) }}
                onBlur={onBlur}
            />
            {file.id === fileToEdit && <CircularProgress size={12} color={"inherit"} style={{ padding: '3px' }} />}
            {files.length === index + 1 && <StyledPlus><AddIcon style={{ height: '15px', width: '15px', margin: '2px 2px' }} onClick={addNewFile} /></StyledPlus>}
        </StyledBox></>)}
    </FilesWrapper>
}

export default FilesListOrganism