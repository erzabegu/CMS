import { FilesListOrganism, Header } from "reader/organisms";
import { IFile } from "reader/types";
import { FileTemplateWraper } from "./styled";

interface Props {
  files: Array<IFile>;
  setFiles: any;
  editFile(file: any, setFileToEdit: any): void;
  addNewFile(setAutofocus: any): void;
}

const FilesListTemplate = ({ files, setFiles, editFile, addNewFile }: Props) => {
  return <>
    <Header />
    <FileTemplateWraper>
      <FilesListOrganism files={files} editFile={editFile} addNewFile={addNewFile}/>
    </FileTemplateWraper>
  </>
}

export default FilesListTemplate;