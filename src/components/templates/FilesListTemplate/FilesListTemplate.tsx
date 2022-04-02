import React from "react";
import { Container } from "reader/layouts";
import { FilesListOrganism } from "reader/organisms";
import { IFile } from "reader/types";

interface Props {
  files: Array<IFile>;
  setFiles: any;
}

const FilesListTemplate = ({ files , setFiles }: Props) => {
  return <Container>
      <FilesListOrganism files={files} setFiles={setFiles}></FilesListOrganism>
  </Container>
}

export default FilesListTemplate;

