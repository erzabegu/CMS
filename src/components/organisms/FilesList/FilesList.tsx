import React from 'react'
import { IFile } from 'reader/types'
import styled from 'styled-components';

interface Props {
    files: Array<IFile>;
}

const FilesListOrganism = ({ files }: Props) => {
    return <>
        {files.map((file: IFile, index: number) => <StyledBox key={index}>
            <h5>{file.fileName}</h5>
        </StyledBox>)}
    </>
}

export default FilesListOrganism

const StyledBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
`