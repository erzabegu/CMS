import React from "react";
import { Container } from "reader/layouts";
import { FilesListOrganism } from "reader/organisms";
import { IFile } from "reader/types";
import styled from "styled-components";

interface Props {
  files: Array<IFile>;
  setFiles: any;
}

const FilesListTemplate = ({ files, setFiles }: Props) => {
  return <FileTemplateWraper>
    <FilesListOrganism files={files} setFiles={setFiles}></FilesListOrganism>
  </FileTemplateWraper>
}

export default FilesListTemplate;

const FileTemplateWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`