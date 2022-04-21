import React, { useState } from 'react'
import { IFile } from 'reader/types'
import FileOpenOutlinedIcon from '@mui/icons-material/FileOpenOutlined';
import AddIcon from '@mui/icons-material/Add';
import { addFile, editFile, getFiles } from 'reader/services';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { InputWrapper } from 'reader/molecules';
import { FilesWrapper, StyledBox, StyledPlus } from './styled';


interface Props {
    files: Array<IFile>;
    editFile(file: any, setFileToEdit: any): void;
    addNewFile(setAutofocus: any): void;
}

const FilesListOrganism = ({ files, editFile, addNewFile }: Props) => {
    const navigate = useNavigate();
    const [file, setFile] = useState<any>({})
    const [fileToEdit, setFileToEdit] = useState<number | null>(0);
    const [autofocus, setAutofocus] = useState<boolean>(false);


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
                onBlur={() => editFile(file, setFileToEdit)}
            />
            {file.id === fileToEdit && <CircularProgress size={12} color={"inherit"} style={{ padding: '3px' }} />}
            {files.length === index + 1 && <StyledPlus><AddIcon style={{ height: '15px', width: '15px', margin: '2px 2px' }} onClick={() => addNewFile(setAutofocus)} /></StyledPlus>}
        </StyledBox></>)}
    </FilesWrapper>
}

export default FilesListOrganism