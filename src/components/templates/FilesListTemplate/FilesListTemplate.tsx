import React from "react";
import { FilesListOrganism, Header } from "reader/organisms";
import { IFile } from "reader/types";
import styled from "styled-components";

interface Props {
  files: Array<IFile>;
  setFiles: any;
}

const FilesListTemplate = ({ files, setFiles }: Props) => {
  return <>
    <Header />
    <FileTemplateWraper>
      <FilesListOrganism files={files} setFiles={setFiles}></FilesListOrganism>
    </FileTemplateWraper>
  </>
}

export default FilesListTemplate;

const FileTemplateWraper = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px 50px;
  background-color: #FCFBFB;
  box-shadow:  inset 0 0 10px #d9d9d9;
  height: calc(100vh - 50px);
`