import { FilesListOrganism, Header } from "reader/organisms";
import { IFile } from "reader/types";
import { FileTemplateWraper } from "./styled";

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