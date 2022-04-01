import React from "react";
import { Container } from "reader/layouts";
import { FilesListOrganism } from "reader/organisms";
import { IFile } from "reader/types";

interface Props {
  files: Array<IFile>;
}

const FilesListTemplate = ({ files }: Props) => {
  return <Container>
      <FilesListOrganism files={files}></FilesListOrganism>
  </Container>
}

export default FilesListTemplate;

